"use strict";(self.webpackChunkkubernetes=self.webpackChunkkubernetes||[]).push([[145],{9669:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"testdata","metadata":{"permalink":"/kubernetes/blog/testdata","source":"@site/blog/2022-10-20-testdata.md","title":"Testdaten Sampling","description":"Bevor neue Applikationen in Produktion gehen, sind datengetriebene Tests unabdingbar, um die Qualit\xe4t von Software und Anwendungen sicherzustellen. F\xfcr diese Tesings haben wir einen Testdatengenerator gebaut.","date":"2022-10-20T00:00:00.000Z","formattedDate":"20. Oktober 2022","tags":[{"label":"Python3","permalink":"/kubernetes/blog/tags/python-3"},{"label":"Azure","permalink":"/kubernetes/blog/tags/azure"}],"readingTime":1.38,"hasTruncateMarker":true,"authors":[{"name":"Marie Padberg","title":"Data Scientist","url":"https://github.com/MariePad","imageURL":"https://github.com/MariePad.png","key":"padberg"}],"frontMatter":{"slug":"testdata","title":"Testdaten Sampling","authors":["padberg"],"tags":["Python3","Azure"]},"nextItem":{"title":"Docker in WSL","permalink":"/kubernetes/blog/docker-in-wsl"}},"content":"Bevor neue Applikationen in Produktion gehen, sind datengetriebene Tests unabdingbar, um die Qualit\xe4t von Software und Anwendungen sicherzustellen. F\xfcr diese Tesings haben wir einen Testdatengenerator gebaut.\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nPersonenbezogene Daten in vielen Branchen ein Kernelement der gesamten Gesch\xe4ftst\xe4tigkeit, z.B. bei Versicherungen, Banken und nat\xfcrlich im Handel. Die hier abgelegten sensible und hoch-differenzierten Informationen k\xf6nnen aus datenschutzrechtlichen Gr\xfcnden nicht f\xfcr das Testing genutzt werden. Statt dessen werden oft synthetische Daten genutzt, deren Struktur meist nicht den Originaldatenbestande wiedergeben.\\r\\n\\r\\nHierdurch k\xf6nnen keine realistischen Testbedingungen geschaffen werden. Die Folge sind deutlich h\xf6here Aufwendungen, weil Fixinings im laufenden Betrieb installiert werden m\xfcssen. Im schlimmsten Fall k\xf6nnen sogar Akzeptanzprobleme bei Nutzern und Kunden entstehen.\\r\\n\\r\\nNotwendig sind stattdessen Testdaten, die realistisch und repr\xe4sentativ f\xfcr die den Gesamtdatenbestand sind. Die Erstellung solcher Testdaten bedeutet allerdings in vielen F\xe4llen einen hohen Arbeitsaufwand, da Abh\xe4ngigkeiten erhalten bleiben m\xfcssen, die Datentypen sich nicht \xe4ndern d\xfcrfen, Outlier Beachtung brauchen, personenbezogene Daten nicht ohne Pseudonomisierung verwendet werden sollten usw.\\r\\n\\r\\nDeshalb haben wir einen Testdatengenerator entwickelt, der aus einem gro\xdfen Originaldatenset ein repr\xe4sentatives Sample erstellt und dieses anschlie\xdfend pseudonomisiert.\\r\\n\\r\\nDabei kann aus zwei unterschiedlichen Samplingmethoden ausgew\xe4hlt werden, welche wir vorab mithilfe statistischer Verfahrensweisen evaluiert haben. Au\xdferdem stehen verschiedene Pseudonomisierungen zur Verf\xfcgung. Zum Schluss wird ein Download der Testdaten und ein kurzer Bericht, mit einer Gegen\xfcberstellung der Original- und Testdaten, zur Verf\xfcgung gestellt.\\r\\n\\r\\nAktuell haben wir das gesamte System mittels Azure Functions als on-demand Website bereitgestellt. Das hei\xdft, bei einer hohen Nachfrage werden mehr Ressourcen so lange wie notwendig bereitgehalten. Bei einem R\xfcckgang der Nachfragen, werden die Ressourcen wieder reduziert. Deshalb kann das Laden der Seite manchmal ein paar Sekunden dauern.\\r\\n\\r\\nAktuell befinden wir uns noch in der Testphase des [Testdatengenerators](https://kitestdataengine.azurewebsites.net/file_upload)."},{"id":"docker-in-wsl","metadata":{"permalink":"/kubernetes/blog/docker-in-wsl","source":"@site/blog/2022-01-27-docker-in-wsl.md","title":"Docker in WSL","description":"Docker Desktop wird kostenplichtig. Wir zeigen Ihnen eine kostenfreie Alternative.","date":"2022-01-27T00:00:00.000Z","formattedDate":"27. Januar 2022","tags":[{"label":"Docker","permalink":"/kubernetes/blog/tags/docker"},{"label":"WSL","permalink":"/kubernetes/blog/tags/wsl"}],"readingTime":1.77,"hasTruncateMarker":true,"authors":[{"name":"Suphanat Avipan","title":"IT Consultant","url":"https://github.com/suphanataviphan","imageURL":"https://github.com/suphanataviphan.png","key":"aviphan"},{"name":"Harald P. Gerhards","title":"Senior IT Consultant | Head of Cloud Engineering","url":"https://github.com/HPG84","imageURL":"https://github.com/HPG84.png","key":"gerhards"},{"name":"Nico Graap","title":"IT Consultant","url":"https://github.com/Nico-infologistix","imageURL":"https://github.com/Nico-infologistix.png","key":"graap"},{"name":"Paul Schmidt","title":"Data Scientist","url":"https://github.com/pickmylight","imageURL":"https://github.com/pickmylight.png","key":"schmidt"}],"frontMatter":{"slug":"docker-in-wsl","title":"Docker in WSL","authors":["aviphan","gerhards","graap","schmidt"],"tags":["Docker","WSL"]},"prevItem":{"title":"Testdaten Sampling","permalink":"/kubernetes/blog/testdata"}},"content":"Docker Desktop wird kostenplichtig. Wir zeigen Ihnen eine kostenfreie Alternative.\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nDocker wird von Millionen von Entwicklern verwendet, um Anwendungen zu erstellen, zu ver\xf6ffentlichen und auszuf\xfchren - \xfcberall. Dar\xfcber hinaus nutzen 55 % der Entwickler Docker jeden Tag bei der Arbeit. \\r\\n\\r\\nK\xfcrzlich hat Docker beschlossen, im Rahmen einer Umgestaltung des Gesch\xe4ftsmodells Geb\xfchren f\xfcr Unternehmenskunden zu erheben, um ein nachhaltiges Gesch\xe4ftsmodell zu etablieren. Ab dem 31.01.2022 wird Docker Desktop f\xfcr Enterprise-Nutzer mit mehr als 250 Mitarbeitern und einem Jahresumsatz von mehr als 10 Millionen Dollar nicht mehr frei verf\xfcgbar sein. \\r\\n\\r\\n \\r\\n\\r\\nObwohl Docker Desktop viel mehr als nur Compose und GUI enth\xe4lt, stellt sich die Frage, ob GUI und zus\xe4tzliche Funktionen ausreichen, um Unternehmen davon zu \xfcberzeugen, Geld f\xfcr Lizenzen auszugeben, anstatt eine Kombination aus verf\xfcgbarer und einfach zu bedienender Open-Source-Software zu verwenden? \\r\\n\\r\\n \\r\\n\\r\\nDie Docker-Plattform besteht aus mehreren Open-Source-Komponenten, von denen Docker Desktop nur ein Teil dessen ist. Der Docker-Client ist ein Befehlszeilendienstprogramm, das die API des Docker-Daemons, der wichtigste Teil des Docker-Software-Stacks, bedient. Beide Tools sind quelloffen und frei verf\xfcgbar. Docker Desktop ist f\xfcr die Ausf\xfchrung unter Windows und MacOS konzipiert und verwaltet und installiert diese Open-Source-Tools f\xfcr Unternehmensbetriebssysteme. Durch die Verwaltung der Open-Source-Docker-Tools in einer Open-Source-Umgebung entf\xe4llt die Notwendigkeit von Docker Desktop und dem damit verbundenen Lizenzierungsmodell. \\r\\n\\r\\n \\r\\n\\r\\nWir haben die Verwaltung dieser Tools so einfach gemacht wie die Nutzung des Internets. Von gro\xdfen Rechenzentren abgeschaut, in denen Linux-basierte Server Docker ohne Lizenzkosten ausf\xfchren, nutzen wir ebendiese Tools auf einer lokalen Entwicklungsmaschine. Wenn wir dies auf ein Unternehmensbetriebssystem wie Windows \xfcbertragen, ben\xf6tigen wir das neue Entwicklungswerkzeug Windows Subsystem f\xfcr Linux als Voraussetzung.  \\r\\n\\r\\nWir haben die Installation von Docker so einfach gestaltet, dass nach der Aktivierung und Installation von Windows Subsystem f\xfcr Linux nur noch ein Installationsprogramm ausgef\xfchrt werden muss. Als Bonus k\xf6nnen Sie den Docker-Client selbst auf Ihrem lokalen Rechner installieren, indem Sie ihn herunterladen und einen Docker-Kontext konfigurieren, um die intern gehostete Docker-Plattform auf Windows Subsystem f\xfcr Linux zu benutzen. \\r\\n\\r\\n \\r\\n\\r\\nZusammenfassend haben wir haben einen Installer f\xfcr die Ausf\xfchrung von Docker in einer Windows Subsystem f\xfcr Linux-Umgebung kombiniert und erstellt. Der daraus resultierende Installer, zus\xe4tzliche Konfiguration und Dokumentation finden Sie in unserem GitHub Repository."}]}')}}]);