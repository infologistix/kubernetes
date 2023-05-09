---
slug: docker-in-wsl
title: Docker in WSL
authors: [aviphan, gerhards, graap, schmidt]
tags: [Docker, WSL]
---
Docker Desktop wird kostenplichtig. Wir zeigen Ihnen eine kostenfreie Alternative.
<!--truncate-->

Docker wird von Millionen von Entwicklern verwendet, um Anwendungen zu erstellen, zu veröffentlichen und auszuführen - überall. Darüber hinaus nutzen 55 % der Entwickler Docker jeden Tag bei der Arbeit. 

Kürzlich hat Docker beschlossen, im Rahmen einer Umgestaltung des Geschäftsmodells Gebühren für Unternehmenskunden zu erheben, um ein nachhaltiges Geschäftsmodell zu etablieren. Ab dem 31.01.2022 wird Docker Desktop für Enterprise-Nutzer mit mehr als 250 Mitarbeitern und einem Jahresumsatz von mehr als 10 Millionen Dollar nicht mehr frei verfügbar sein. 

 

Obwohl Docker Desktop viel mehr als nur Compose und GUI enthält, stellt sich die Frage, ob GUI und zusätzliche Funktionen ausreichen, um Unternehmen davon zu überzeugen, Geld für Lizenzen auszugeben, anstatt eine Kombination aus verfügbarer und einfach zu bedienender Open-Source-Software zu verwenden? 

 

Die Docker-Plattform besteht aus mehreren Open-Source-Komponenten, von denen Docker Desktop nur ein Teil dessen ist. Der Docker-Client ist ein Befehlszeilendienstprogramm, das die API des Docker-Daemons, der wichtigste Teil des Docker-Software-Stacks, bedient. Beide Tools sind quelloffen und frei verfügbar. Docker Desktop ist für die Ausführung unter Windows und MacOS konzipiert und verwaltet und installiert diese Open-Source-Tools für Unternehmensbetriebssysteme. Durch die Verwaltung der Open-Source-Docker-Tools in einer Open-Source-Umgebung entfällt die Notwendigkeit von Docker Desktop und dem damit verbundenen Lizenzierungsmodell. 

 

Wir haben die Verwaltung dieser Tools so einfach gemacht wie die Nutzung des Internets. Von großen Rechenzentren abgeschaut, in denen Linux-basierte Server Docker ohne Lizenzkosten ausführen, nutzen wir ebendiese Tools auf einer lokalen Entwicklungsmaschine. Wenn wir dies auf ein Unternehmensbetriebssystem wie Windows übertragen, benötigen wir das neue Entwicklungswerkzeug Windows Subsystem für Linux als Voraussetzung.  

Wir haben die Installation von Docker so einfach gestaltet, dass nach der Aktivierung und Installation von Windows Subsystem für Linux nur noch ein Installationsprogramm ausgeführt werden muss. Als Bonus können Sie den Docker-Client selbst auf Ihrem lokalen Rechner installieren, indem Sie ihn herunterladen und einen Docker-Kontext konfigurieren, um die intern gehostete Docker-Plattform auf Windows Subsystem für Linux zu benutzen. 

 

Zusammenfassend haben wir haben einen Installer für die Ausführung von Docker in einer Windows Subsystem für Linux-Umgebung kombiniert und erstellt. Der daraus resultierende Installer, zusätzliche Konfiguration und Dokumentation finden Sie in unserem GitHub Repository. 