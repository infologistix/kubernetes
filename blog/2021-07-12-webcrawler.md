---
slug: webcrawler
title: Use Case für einen WebCrawler
tags: [Python3, Azure]
---
WebCrawler sind eine einfache, effektive und kostengünstige Möglichkeit Websiten gezielt nach Informationen zu durchsuchen und Ihnen komprimiert zur Verfügung zu stellen. Die Programme sind damit ideal dafür geeignet repetitive Aufgaben zu erledigen.
<!--truncate-->
In diesem Artikel stellen wir Ihnen einen Use Case für einen WebCrawler vor und geben Ihnen ein ausführliches How-To zur Einrichtung eines cloudbasierten Dockers.
### WebCrawler - Use Case
WebCrawler sind leichtgewichtige und kosteneffiziente Datensammler, die Ihnen einen Informationsvorsprung sichern.
Heutzutage sind (fast) alle Informationen online verfügbar. Googeln ist ein Synonym für das Finden von Informationen geworden, vom einfachen Kochrezept bis hin zur wissenschaftlichen Abhandlung.

Die meisten dieser Daten sind frei zugänglich und können einfach abgerufen werden. Die schiere Menge an Daten und Websites macht eine Suche aber sehr zeit- und personalintensiv. Der Zeitaufwand spielt insbesondere dann eine Rolle, wenn die Suche nicht nur einmalig geschehen soll, sondern regelmäßig, um dann die Änderungen und Entwicklungen zu monitoren. Hier bieten sich sogenannte WebCrawler als eine einfache und vor allem kosteneffiziente Möglichkeit an, die Suche zu automatisieren.

WebCrawler sind Programme, die automatisiert das Internet durchsuchen und Websites analysieren. Sie sind damit perfekt geeignet, um repetitive Aufgaben zu erledigen.

#### Anwendungsbeispiel
Bei der infologistix GmbH verwenden wir WebCrawler für verschiedene Aufgaben, u.a. um öffentliche Ausschreibungsseiten zu monitoren und die für uns interessanten Ausschreibungen heraus zu filtern. Dazu crawlen wir ca. zwei Dutzend verschiedene Websites von Behörden, Unternehmen und Portalen. Crawlen bedeutet hier, dass ein cloud-basierter <u>Docker</u> die Seiten nacheinander aufruft, sie nach interessanten Ausschreibungen durchsucht und uns eine Ergebnisliste mit ausschließlich relevanten Ausschreibungen zur Verfügung stellt. Technische Details, sowie das Dockerimage und eine Anleitung zum Nachbauen finden Sie im folgenden [How-To Abschnitt](#webcrawler---how-to).

Die Ergebnisliste mit relevanten Ausschreibungen stellt für uns eine enorme Zeit- und Kostenersparnis dar. Anstatt hunderte von Ausschreibungen pro Tag durchsuchen zu müssen, müssen jetzt nur noch ein halbes Dutzend Ausschreibung geprüft werden. Und das bei nur ca. 1€ Betriebskosten pro Woche für den WebCrawler.

#### Resümee
WebCrawler sind eine einfache, effektive und kostengünstige Möglichkeit, Websites gezielt nach Informationen zu durchsuchen und Ergebnisse komprimiert zur Verfügung zu stellen. Unser Dockerimage stellt da eine besonders leichtgewichtige und easy to-use Variante dar. Sollten Sie Fragen zu WebCrawlern haben oder eine maßgeschneiderte Lösung suchen, kontaktieren Sie uns gerne.

### WebCrawler - How-To
Mit diesem How-To zeigen wir, wie man einen Cloud-basierten Docker einrichtet, um damit Websites nach Informationen zu durchsuchen und aufbereitete Suchergebnisse mittels Benachrichtigung über Social Chat wie MS Teams oder Slack oder auch E-Mail zur Verfügung zu stellen.

####  Was man dafür benötigt
- Lokale Docker Runtime
- Social Chat (MS Teams, Slack) oder E-Mail Client
- [infologistix WebCrawler von Docker Hub](https://hub.docker.com/r/infologistix/docker-selenium-python)
- Etwas Erfahrung mit [Python](https://www.python.org/), Command Line, HTML

#### Für die Anwendung in der Cloud wahlweise:
- [Microsoft Azure](https://azure.microsoft.com/en-us/)
- [Amazon AWS](https://aws.amazon.com/)
- [Google Cloud Platform](https://cloud.google.com/)

#### Legen wir los
<u> 0. GitHub Repository Klonen </u>

Dieses How-To basiert auf einer Projektstruktur, welche wir bereits angelegt haben und, die Sie direkt in Ihr Projekt übernehmen können.
Unter dem folgenden Link finden Sie dieses How-To auch **als fertiges Programm im Ordner Examples.**
```
$ git clone https://github.com/infologistix/docker-selenium-python.git ./infologistix
```
Wir wollen hier ein einfaches Beispiel betrachten und zunächst herausfinden, welche Services unser Unternehmen bietet. Die hier gezeigten Funktionen lassen sich einfach auf neue Gegebenheiten anpassen

<u> 1. Grundstruktur und Bibliotheken </u>

Das Test-Framework Selenium bietet uns bereits eine große Auswahl an Funktionen und Equipment, um Websites gezielt zu bearbeiten und Informationen zu ermitteln. Die Grundstruktur unseres Projektes basiert auf einer Klasse, welche die Kommunikation mit dem Browser übernimmt und uns sämtliche Daten aus der Webseite extrahiert. Darüber hinaus verwenden wir pandas als Tool für die Formatierung und Datenanalyse der Suchergebnisse.
```
from selenium.webdriver import Chrome
from selenium.webdriver import ChromeOptions 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
```
Ausgehend von den genutzten Bibliotheken können wir eine Basisklasse für unseren Crawler schreiben. Diese Basisklasse beschreibt den allgemeinen Crawler. Wir verwenden die Klassendarstellung, da hier die Website und deren Funktionen und Elementextraktion als Variablen und Funktionen aufgerufen werden können. Initial öffnen wir hiermit ein Chrome-Fenster im „headless“-Modus und öffnen die gegebene Webseite.
```
class InfologistixCrawler():
    def __init__(self, url: str, headless: bool=True) -> None:
        options = ChromeOptions()
        options.add_argument("–no-sandbox")
        options.add_argument("–window-size=1280,720")
        if headless:
            options.add_argument("–headless")
        self.driver = Chrome(options=options)
        self.driver.get(url)

    def run(self):
        page = self.driver.page_source
        self.close()
        return page

    def close(self):
        self.driver.close()
```
<u> 2. Informationen der Webseite ermitteln </u>

Wir filtern aus unserer eigenen [Homepage](https://infologistix.de/) die angebotenen Dienstleistungen heraus und wollen diese mit Namen, Details und Referenz abspeichern. Dazu suchen wir uns die Informationen auf der Website und ermitteln die HTML-Grundstruktur. In unserem Fall befinden sich die Dienstleistungen in einem ‚section‘-Element, welches wir finden müssen. Unser gesuchtes Element besitzt die ID ‚Leistungen‘, welches wiederum mehrere ‚section‘-Elemente mit dem Klassenattribut ‚elementor-image-box-content‘ beinhaltet. Hier sind alle Dienstleistungen hinterlegt.

Zunächst warten wir, bis das gesuchte Element vorhanden ist. Wir teilen mit WebDrverWait unserem Programm mit, maximal 10 Sekunden darauf zu warten, dass unser gefordertes Element auf der Webseite im DOM vorhanden ist. Ist dieses Element nicht vorhanden, dann wird hier aus dem laufenden Programm ausgestiegen und man läuft in keine Fehler.

Dann speichern wir uns den Container mit den gesuchten Elementen mittels der find_element_by\*-Funktion und suchen innerhalb dieses Containers mit find_elements_by* alle gesuchten Elemente und extrahieren die einzelnen Informationen der Extraktion.
```
def getServices(self) -> list:
        results = list()
        WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "Leistungen")))
        services = self.driver.find_element_by_id ("Leistungen")
        for service in services.find_elements_by_tag_name("section"):
            results.append(
                 self.__extract(
                          service.find_element_by_class_name(
                                   "elementor-image-box-content")))

         return results
```
Als Ergebnis erhalten wir eine Liste, welche wir nur noch zurückgeben müssen. Was genau die Funktion __extract() macht, das erklären wir gleich

Mit Hilfe der Liste lässt sich jetzt eine Darstellung der einzelnen Leistungen entwickeln, welche die Sichtbarkeit und Lesbarkeit für den Menschen vereinfacht. Wir wählen hierbei die Darstellung eines Pandas DatenFrames, da hier z.B. auch numerische Berechnungen und Aggregationen vorgenommen werden können. Zusätzlich können hieraus auch Excel-Dateien erstellt werden. Wir bilden hier also einen DataFrame mit den Spalten „URI“, „Title“ und „Description“ aus unserer Liste, in welchem der Titel, Beschreibung und die jeweilige Referenz steht.

Zurückgegeben wird dann ein DatenFrame.
```
def makeFrame(self, services: list) -> pd.DataFrame:
    return pd.DataFrame(services)
```
Auf Basis dieser Transformation der Ergebnisse stellen wir unsere run() Funktion um, sodass sie uns die gefundenen Ergebnisse liefert und die erstellten Funktionen einbindet.
```
def run(self):
     services = self.getServices()
     self.close()
     return self.makeFrame(services)
```
Erinnern wir uns zurück an unsere __extract() Funktion. Hier wollen wir aus den Elementen die erforderlichen Informationen extrahieren. Relevante Informationen herauszufinden und zu filtern, ist hier die Hauptaufgabe. Sämtliche Informationen sind in unterschiedlichen Elementen mit unterschiedlichen Identifizierungsmöglichkeiten vorhanden. Der Titel steht zum Beispiel als Text innerhalb eines ‚a‘-Elements, welches zusätzlich noch die Referenz beinhaltet. In unserem Beispiel setzt sich die Extraktionsfunktion wie folgt zusammen und gibt uns ein geordnetes Dictionary zurück, in welchem die Elementinformationen enthalten sind.
```
def __extract(self, service: WebElement) -> dict:
        return {
           "URI": service.find_element_by_tag_name("a").get_attribute("href"),
           "Title": service.find_element_by_tag_name("a").text,
           "Description": service.find_element_by_tag_name("p").text,
         }
```
Die gesamte Klasse mit Funktionen sieht dann wie folgt aus:
```
class InfologistixCrawler():
    def __init__(self, url, headless=False):
        options = ChromeOptions()
        options.add_argument("–no-sandbox")
        options.add_argument("–window-size=1280,720")
        if headless:
            options.add_argument("–headless")
        self.driver = Chrome(options=options)
        self.driver.get(url)

    def getServices(self) -> list:
        results = list()
        WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "Leistungen")))
        services = self.driver.find_element_by_id ("Leistungen")
        for service in services.find_elements_by_tag_name("section"):
            results.append(
                 self.__extract(
                          service.find_element_by_class_name(
                                   "elementor-image-box-content")))
        return results

    def __extract(self, service: WebElement) -> dict:
        return {
           "URI": service.find_element_by_tag_name("a").get_attribute("href"),
           "Title": service.find_element_by_tag_name("a").text,
           "Description": service.find_element_by_tag_name("p").text,
         }

    def makeFrame(self, services : list) -> pd.DataFrame:
        return pd.DataFrame(services)

    def run(self) -> pd.DataFrame:
        services = self.getServices()
        self.close()
        return self.makeFrame(services)

    def close(self) -> None:
        self.driver.close()
```
Lassen wir unseren Crawler laufen, dann erhalten wir einen DataFrame mit den angebotenen Leistungen der infologistix GmbH.
```
services = Crawler(url="https://infologistix.de").run()
```
Wir können nun die Dienstleistungen der infologistix GmbH von der Website extrahieren und als Dataframe ausgeben lassen. Der nächste Schritt ist die Übermittlung der Ergebnisse.
<u> 3. Übermittlung & Messaging </u>
Für Teams, als auch Slack wird ein Token beziehungsweise Webhook verwendet, um eine formatierte Nachricht an einen Channel zu senden. Die Integration von Slack ist leider noch nicht vollständig umgesetzt und kann daher zu Fehlern führen.

[Hier findest du eine detaillierte Anleitung, wie man an eine Webhook eines Kanals in MS Teams gelangt.](https://dev.outlook.com/Connectors/GetStarted#creating-messages-through-office-365-connectors-in-microsoft-teams)

Hier benutzen wir die Basisbibliothek pymsteams und erstellen eine Card mit der uns verfügbaren Webhook URL. Wir fügen dem Beitrag einen Titel und die als HTML formatierten Suchergebnisse an und schicken ihn an unseren Teams-Channel.
```
import pymsteams

message = services.to_html()
title = "Dienstleistungen Infologistix"

def sendMSTeams(webhook : str, message : str, title : str) -> Literal[True]:
    channel = pymsteams.connectorcard(webhook)
    channel.title(title)
    channel.text(message)
    return channel.send()
```
Wir haben nun unseren Ablauf geplant und können diesen als main.py speichern.
<u> 4. Cloud-Container </u>
Mit dem hier erstellten Script können wir jetzt einen Docker-Container erstellen, welcher uns die Möglichkeit gibt, den Crawler in der Cloud laufen zu lassen. Hierzu erstellen wir das Dockerfile oder nehmen das bereits vorhandene Beispiel auf.

Es reicht hier ein einfacher Befehl um dieses Beispiel laufen zu lassen.
```
$ docker run -it –rm –shm-size=128m docker-selenium-python:latest python ./examples/main.py
```
Eine Anleitung für das Einrichten in der Cloud-Umgebung findest du hier:

- [Microsoft Azure](https://learn.microsoft.com/de-de/azure/container-instances/container-instances-tutorial-prepare-app)
- [Amazon AWS](https://us-east-1.signin.aws.amazon.com/oauth?SignatureVersion=4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQHJ3VXZJKWI3EBO4&X-Amz-Date=2023-05-15T15%3A08%3A10.140Z&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQChMDyBnLd2%2F6pRONs4Qt%2ByvBbsOpAnL9akqgT%2FbmPzHQIgQDYigveW%2FZwaS10R4VZkdtTA08gEFv%2FXedWIz5r%2ByhkqzQMIGBACGgwwMTU2OTQ0MTMzOTQiDHXEpnkLczxPEFM%2B1SqqAzRfwLNltRQTxPe6NJdMLiwSKoLDoKdz0cfX%2B3V1qQ9SLmVKLxC3Ar3a7JNJzQ2P%2Fj7nrb5FGWM2FhQ8GUt6Zr1YE%2F%2FqvVm1%2FESeKDWHlsJMg0fF8IxeY9vQSVPE59zHD4IP94QeLfiHQPY0zO8fIY98FH6SBw18a%2FJh4AbGv20QF92lXwqVVJlmeyfdKdOTP9%2FjPwAZV1F8FItFqkqkOb8r8p8QwvPEDPr%2B0CqOdOQ631qdOtT%2FBYsOcXcvqBxeAyx1ud2SsvHC1bxG7eFdUGPrigT%2B08LU6rWtabEzNFFsVHzYV45K4o56JTO8%2BeFeKgri7N5qAINjmWAKzBRpSvF2zLx8i5Y%2BLYLx278yZwaNRSTCj%2FzaDkI%2BSP1cqU2qLStDbjXD51CrA3RSVxMjUn7%2BqqF48ynxogK2gsPeNAXSpt4RUwen28SINrnzw6ajQHxU3bxKa8pHx4sIe%2Fq6%2BmsHNdwP9EJsQ5WT0Dsd16F29IVrSfOPbN7azqPuCmVT5HmXtC13WsltPEHL4LHYlGCNqWQy2yIe0ivXLdoEmTEl1aIzwUpWCi0uEjDUgYmjBjqhAYubtfW9U3AJzxe55%2FXr2Ps%2FTiqGV8tWTNhFESUbyVKKXPXeFrbvrQd%2BXNUhXekARqS4aqbyiqmNxy3HyoxWFXnQkIrZHNZfj8kORXtj6QpWwGtYi7J5kh9TOAyW1GASQpj5CLuk8LnvsBLsAqmdSmuxD69GwoaZ1%2FqcSd441OA1uIiaYjeVM4MAU7Z%2F5hKmgLFacJZwD7UaHq7BNIjt2YZ8&X-Amz-Signature=88941b4e1ab60b16a86d29aa30169819c908f3b5558268f10040ef6c273940e1&X-Amz-SignedHeaders=host&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fecs&code_challenge=Rzvs-__JFcYEHVU8L8WkBiXx4NhaNcxiZN2krlbe1XQ&code_challenge_method=SHA-256&redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fecs%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%252FgetStarted%26isauthcode%3Dtrue&region=us-east-1&response_type=code&state=hashArgs%23%2FgetStarted)
- [Google Cloud Services](https://cloud.google.com/container-registry/docs/pushing-and-pulling?hl=de)