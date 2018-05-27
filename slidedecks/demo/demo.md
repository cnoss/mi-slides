---
title: Demo für MI Slides
separator: ___
verticalSeparator: ---
revealOptions:
  transition: 'slide'
  backgroundTransition: 'zoom'
  center: false
types: welcome, assignment
---

slide-is:welcome
# MI Slides
Kleine Beispielpräsentation für das Markdown Slidedeck Tool im Look der Medieninformatik

---

slide-is:longtext
## Worum geht es hier?

Präsentieren macht Spaß, Präsenationen bauen nicht. Mir zumindest nicht. Ich erwische mich ständig dabeim wie ich in Keynote anfange Pixel zu schubsen und aus dem Ich-mach-mal-eben-ein-paar-Slides-für-morgen wird eine abendfüllende Beschäftigung.

Also großer Markdown Fan und mittelgroßer reveal.js Fan habe ich dann mal ein kleines Mashup gemacht, in dem folgende Frameworks, Snippets und Ideen verbaut sind:
* [reveal-md](https://github.com/webpro/reveal-md): Markdown Variante von [reveal.js](https://revealjs.com/)
* Semantische Templates (dazu später mehr)
* [Font Awesome Icons](https://fontawesome.com/icons)
* MI Stylesheet 2K-18

---

slide-is:longtext
## Semantische Templates

Um möglichst schnell zu einer lesbaren und ansehnlichen Präsentation zu kommen verwendet MI Slides Markdown. Die gesamte Präsentation liegt in einer einzigen Markdown Datei. 

Damit man nicht in die Versuchung kommt Pixel zu schubsen, sind die Templates nicht formal, sondern eher semantische organisiert. Im Zentrum steht daher eher die Frage: **Was soll die Folie machen? Welche Funktion hat sie?** und weniger die Frage: **Wie soll die Folie aussehen?**

---

slide-is:longtext
## Was kann das Tool gut? Was kann es nicht?


Um möglichst schnell zu einer lesbaren und ansehnlichen Präsentation zu kommen verwendet MI Slides zum einen Markdown. 

---

slide-is:assignment
## icon:pencil Fingerübung

Nehmen Sie ein DIN A4 Blatt und falten Sie es mittig über die lange Seite. Zeichnen Sie dann im oberen Teil ein einfaches, aber möglichst charakteristisches Portrait von sich selbst. Danach zeichnen Sie auf der Rückseite eines von Ihrem Nebenmann.

Tauschen Sie sich aus, vergleichen Sie die Portraits, wählen Sie das, welches Sie am Besten wieder gibt und ergänzen Sie es um die folgenden Angaben:
- Ihren Vornamen
- zwei Ihrer guten Eigenschaften
- zwei Ihrer schlechten Eigenschaften
- ein kurzes Statement, warum Sie ein guter Medieninformatiker sind oder werden

Für die Aufgabe haben Sie ** 10 Minuten ** Zeit.

---

slide-is:interlude
## Visual Basics
[Zunächst einige Grundgedanken](http://www.christiannoss.de/talks/2017-visual-thinking-emi/#/step-1)

---

slide-is:interlude
## Szenarien

---
slide-is:image-fullscreen https://upload.wikimedia.org/wikipedia/commons/1/11/Honigberg-wald-1s.jpg

---

slide-is:longtext
## Szenario: Gestensteuerung

Hallo Christian,

wir hatten neulich nach dem Vortrag über das Thema gesprochen. In unsere Fertigungsmaschinen würden wir mittelfristig gerne Gestensteuerungen integrieren. Momentan werden hier entweder klassische Schaltpanele oder Touchdisplays verwendet. Die Schaltpanele sind aber meist zu komplex in der Bedienung. Die Touchdisplays sind in der Fertigung sehr problematisch, weil die Maschinenführer teils ziemlich schnutzige Hände haben. 

Bislang haben wir keine Erfahrungen im Bereich Gestensteuerungen und müssten hier erstmal angeholt und auf den aktuellen Stand der Technik gebracht werden. Dann würden wir auch gerne zunächst einige Testreihen mit verschiedenen Steuerungen fahren, um ein Gefühl zu bekommen, was in unserem Kontext funktionieren könnte und was nicht. 

Könntet ihr uns hierbei unterstützen?


> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---

slide-is:longtext
## Szenario: Clara Schumann Installation

Hallo Christian,

wir hatten neulich darüber gesprochen, dass wir anlässlich des 200sten Geburtstags von Clara Schuhmann darüber nachdenken, eine große, interaktive Installation für unser Museum konzipieren und entwickeln zu lassen. Wir hätten dazu einen 120qm großen Raum mit einer 12x4m großen Wand zur Verfügung, die wir gerne bespielen würden.

Die Besucher sollten die Möglichkeit bekommen, sich interaktiv mit dem Werk und der Musik von Clara Schumann auseinander setzen zu können. Wir hatten dazu ein schönes Beispiel im [Perlanmuseum in Reykjavik](https://www.perlanmuseum.is/is/) gesehen.

Können wir dazu die Tage mal telefonieren?


> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---

slide-is:longtext
## Szenario: RI Maps für die Deutsche Bahn

Hallo Christian,

wie Du weißt, haben wir im letzten Jahr begonnen die wichtigsten Bahnhöfe zu digitalisieren. Wir haben inzwischen einen basalen Indoorkarten Service entwickelt und online verfügbar gemacht. Im nächsten Schritt wollen diesen um einige zusätzliche Services erweitern. Dazu gibt es bislang folgende Ideen:

* Suche nach POIs, ähnlich wie bei Google Maps
* Abfahrtsauskünfte zu den einzelnen Gleisen
* Indoornavigation innerhalb der Bahnhöfe und Übergangszonen

Bislang ist der Service nur über das Web erreichbar, aber zukünftig soll dieser auch in verschiedenen anderen Kontexten genutzt werden, u.A.:

* RIS Communicator - Infotool für das reisende Personal (Android)
* Infoterminals am Bahnhof
* DB Navigator - Infotool für die Kunden

Könntet ihr unser Team bei diesem Projekt unterstützen?

> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---

slide-is:longtext
## Szenario: Digitalisierung Altenpflege

Hallo Christian,

wir haben bei unseren stationären Altenpflegediensten das Problem, dass die Dokumentation der einzelnen Arbeitsschritte, Therapiemaßnahmen, Diagnosen, der Medikation, etc. extrem aufwändig und zeitintensiv geworden ist. Daher würden wir diese Prozesse gerne digitalisieren. Bislang gibt es am Markt aber keine Lösung, die unsere Prozesse ansatzweise sinnvoll unterstützt.

Wir bräuchten ein Team, dass uns sowohl bei der Konzeption, als auch bei der Entwicklung und Inbetriebnahme unterstützt. Können wir uns dazu mal in Kürze treffen?

> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---

slide-is:longtext
## Szenario: Jugend hackt

Hallo Christian,

bei unserem Workshopformat ”Smarthome“ für das Projekt ”Jugend hackt - Hello World“ haben wir festgestellt, dass die Programmierung von den Arduino Mikrocontrollern die Zielgruppe etwas überfordert. In den Workshops sitzen Jugendliche zwischen zehn und sechzehn Jahren, die in der Regel keine Programmierungvorkenntnisse mitbringen. In anderen Workshops konnten wir beobachten, dass die Teilnehmer mit visuellen Programmierumgebungen ziemlich schnell zurecht kommen und gute Ergebnisse erzielen.

Daher würden wir zukünftig gerne für unsere Arduino Workshops eine visuelle Programmierumgebungen einsetzen. Könntet ihr uns dabei unterstüzen? 

> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---


slide-is:longtext
## Szenario: Experimentelle Geräuschcollagen via Klangfang 

Hallo Christian,

wir hatten ja auf der Mensch und Computer über unsere App "[Klangfang](https://www.startnext.com/klangfang)" gesprochen. Das Konzept ist ziemlich weit fortgeschritten und es gibt auch eine Finanzierung. Es wurden auch schon eine ganze Menge Prototypen entwickelt und teilweise getestet. Leider kommen wir momentan nicht weiter, denn wir brauchen unbedingt ein Team, das sich dem Vorhaben von der Informatik Seite nähert. 

Könntet ihr uns da supporten? 

> Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

---

slide-is:assignment
## icon:fa-question-circle-o **Aufgabe 1:** Szenario verstehen

Analysieren Sie Ihr Szenario und entwickeln Sie eine Herangehensweise an das Problem. Identifizieren Sie notwendiges Know-How und formulieren Sie Fragen für ein erstes Sondierungsgespräch.

Für die Aufgabe haben Sie ** 5 Minuten ** Zeit. 


---

slide-is:assignment
## icon:briefcase **Aufgabe 2:** Know-How und Arbeitsschritte

Analysieren Sie Ihr Szenario und identifizieren Sie die notwendigen Schritte und Know-How Bereiche, die zur erfolgreichen Bearbeitung des Projekts oder zur Lösung des Problems aus Ihrer Sicht notwendig sind. Notieren Sie jeden Schritt und jeden Know-How Bereich auf einen eigenen Zettel.

Arbeiten Sie zügig und diskutieren Sie nicht zu lange über einzelne Schritte. Es geht zunächst darum ein möglichst umfassendes Bild zu erarbeiten.

Für die Aufgabe haben Sie ** 20 Minuten ** Zeit. 

---

slide-is:assignment
## icon:ravelry **Aufgabe 3:** Ablauf und Visualisierung

Entwickeln Sie für die notwendigen Arbeitsschritte passende Visualisierungen. Bringen Sie die einzelnen Arbeitsschritte in eine verständliche Gesamtübersicht. Markieren Sie mögliche Iterationen.

Für die Aufgabe haben Sie ** 20 Minuten ** Zeit. 


---

slide-is:assignment
## icon:exchange Übergabe

Erstellen Sie für die nachfolgende Gruppe eine schriftliche und möglichst visuelle Übergabe Ihrer Ergebnisse. Im nächsten Workshop werden wir versuchen aus Ihren Ergebnissen eine Medieninformatik Competence Map zu erstellen.

* Was sollten Ihre Nachfolger wissen? 
* Worauf sollten Sie achten? 
* Was wären Ihre nächsten Schritte gewesen? 

Für die Aufgabe haben Sie ** 10 Minuten ** Zeit. 

---

slide-is:welcome
## Visual Thinking
Workshop im Rahmen des Moduls "Einführung in die Medieninformatik"

---

slide-is:assignment
## icon:pencil Fingerübung

Nehmen Sie ein DIN A4 Blatt und falten Sie es mittig über die lange Seite. Zeichnen Sie dann im oberen Teil ein einfachen, aber möglichst charakteristisches Portrait von sich und auf der Rückseite von Ihrem Nebenmann.

Wählen Sie das Porträt, dass Sie am Besten wieder gibt und ergänzen Sie es um die folgenden Angaben:
- Ihren Namen
- zwei Ihrer guten Eigenschaften
- zwei Ihrer schlechten Eigenschaften
- einen Satz, warum Sie ein guter Medieninformatiker sind oder werden

Für die Aufgabe haben Sie ** 10 Minuten ** Zeit. 

---

slide-is:interlude
## Visual Basics
[Zunächst einige Grundgedanken](http://www.christiannoss.de/talks/2017-visual-thinking-emi/#/step-1)



--- 

slide-is:assignment
## icon:ravelry **Aufgabe 4:** Clustern und Visualisieren

Gruppieren Sie die einzelnen Know-How Bereiche, bzw. Arbeitsschritte inhaltlich. Bitte entwickeln Sie für jede Gruppe (Baustein) **3** unterschiedliche, einfache Visualisierungen. 

Hier könnte es hilfreich sein das Team zu teilen in "Clusterer" und "Visualisierer".

Für die Aufgabe haben Sie ** 20 Minuten ** Zeit. 

--- 

slide-is:assignment
## icon:users **Aufgabe 5:** Synthese und Teamrollen

Gruppieren Sie die einzelnen Know-How Bereiche, bzw. Arbeitsschritte inhaltlich. Bitte entwickeln Sie für jede Gruppe (Baustein) eine Visualisierung.

Hier könnte es hilfreich sein das Team zu teilen in "Clusterer" und "Visualisierer".

"Formen" Sie nun aus einer sinnvollen Menge an Bausteinen jeweils eine Teamrolle. Geben Sie der Teamrolle einen erläuternden Namen, entwerfen Sie eine Visalisierung für die Teamrolle und notieren Sie in Stichpunkten typische Aufgaben, die in den Verantwortungsbereich der Rollen fallen könnten.

Für die Aufgabe haben Sie ** 30 Minuten ** Zeit. 

--- 

slide-is:interlude
## Mapping aufs Curriculum

--- 

slide-is:assignment
## icon:check-circle-o **Aufgabe 5:** Bewertung der Vorarbeit

Verfassen Sie eine kurze, möglichst visuelle Bewertung der Vorarbeit Ihrer Vorgänger:

* Wie verständlich war die Übergabe?
* Wie gut war das übergebene Material?
* Welche Qualität hatten die vorgefundenen Artefakte?

Für die Aufgabe haben Sie ** 10 Minuten ** Zeit. 

---

slide-is:outro
## Danke für's Mitmachen

icon:twitter [twitter.com/cnoss](http://twitter.com/cnoss)  
icon:facebook [www.facebook.com/cnoss](https://www.facebook.com/cnoss)