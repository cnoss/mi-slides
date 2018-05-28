# MI-Slides
Slidedecks in Markdown mit Reveal.js im MI Style. 

## Was kann der Skripthaufen?
Präsentieren macht Spaß, Präsenationen bauen nicht. Mir zumindest nicht. Ich erwische mich ständig dabeim wie ich in Keynote anfange Pixel zu schubsen und aus dem Ich-mach-mal-eben-ein-paar-Slides-für-morgen wird eine abendfüllende Beschäftigung.

Also großer Markdown Fan und mittelgroßer reveal.js Fan habe ich dann mal ein kleines Mashup gemacht, in dem folgende Frameworks, Snippets und Ideen verbaut sind:

- reveal-md: Markdown Variante von reveal.js
- Live-Reload
- Semantische Templates (dazu später mehr)
- Font Awesome Icons
- MI Stylesheet 2K-18

## Voraussetzungen
MI-Slides braucht:
- NPM ab Version 6.0
- Node ab Version 9.0 

## Getting Started

Repo lokal klonen:

``` git clone git@github.com:cnoss/mi-slides.git ```

ins Verzeichnis wechseln:

``` cd mi-slides ```

Module installieren:

``` npm install ```

MI-Slides starten:

``` npm start ```

Demo Präsentation auswählen … Fertig


## Eigene Präsentation bauen

Die Präsentationen liegen im Verzeichnis "slidedecks". Es empfiehlt sich für jede Präsentation ein eigenes Unterverzeichnis anzulegen. Dort muss eine Markdown Datei liegen und ggf. weitere Assets für die Präsentation, z.B. Bilder. Am Einfachsten ist es die Demo Präsentation einmal zu kopieren. 

### Metadaten

Im Kopfbereich der Markdown Datei müssen ein paar Metadaten angegeben werden. Außer dem Titel beziehen diese sich auf [Einstellungen für Reveal.js](https://github.com/webpro/reveal-md#yaml-front-matter).

```
---
title: Demo für MI Slides
revealOptions:
  transition: 'slide'
  backgroundTransition: 'zoom'
  center: false
---
```

### Slides erstellen
Alle Slides liegen in einer Markdown Datei. Bislang werden nur Slides in vertikaler Richtung unterstützt. Die einzelnen Folien werden durch einen Seperator (Leerzeile gefolgt von drei Minus-Zeichen und einer weiteren Leerzeile) voneinander getrennt.

```

Ich bin die erste Folie.

---

Und ich bin die zweite Folie.

```

### Texte auszeichnen
Innerhalb der Folien können alle Markdown Auszeichnungen, wie Headlines, Aufzählungen und ähnliches verwendet werden.

```
---

# Ich bin eine Headline
## Und ich bin die kleine Schwester der Headline.

Jaja, und ich bin dann eben ein langweiliger Text, den sowieso keine liest, 
weil heutzutage doch alle nur Filme schauen, oder Snaps oder was weiß denn ich. 
Denkt dran:
- früher war alles besser
- jeden Tag eine gute Tat
- mehr fällt mir gerade nicht ein
```

### Folien auszeichnen
Nach dem Seperator kann der Folie die Funktion und damit das Layout mitgegeben werden. Das Schlüsselwort dafür ist slide-is.

```
---

slide-is:simpel
# Ich bin eine Headline
## Und ich bin die kleine Schwester der Headline.

```
#### slide-is:welcome
Die Begrüßungsfolie enthält in der Regel nur eine Headline und einen kurzen Text.

```
slide-is:welcome
# Ich bin eine Headline
Und ich bin ein kurzer Untertitel
```

#### slide-is:outro
Die Abschlussfolie enthält meist nur eine Headline zweiter Ordnung und ein paar weiterführende Informationen oder Kontaktdaten.

```
slide-is:outro
## Danke für's Mitmachen
icon:twitter [twitter.com/cnoss](http://twitter.com/cnoss)  
icon:facebook [www.facebook.com/cnoss](https://www.facebook.com/cnoss)
```

#### slide-is:simple
Die einfachste Folie der Welt, sozusagen der VW Golf unter den Layouts: pragmatisch, einfach, gut.

#### slide-is:explanation
Manchmal hat man viel zu sagen. Mit dieser Auszeichnung geht das ganz gut.

#### slide-is:assignment
Für den Fall, dass man eine kleine Aufgabe herausgeben möchte.

#### slide-is:interlude
Folie mit zufällig generiertem, farbigen Hintergrund, ideal für einen Zwischenstopp, einen gedanklichen Ausflug oder ein neuen inhaltichen Block.

#### slide-is:image-fullscreen 
Ein Bild sagt mehr als 1000 Worte. Bilder können via absoluter URL eingebunden werden:

```
slide-is:image-fullscreen https://upload.wikimedia.org/wikipedia/commons/1/11/Honigberg-wald-1s.jpg
```

Oder relativ zum Verzeichnis der Präsentation:

```
slide-is:image-fullscreen img/IMG_6024.jpg
```

## Ideen & Anregungen …
… bitte in die [Issues](https://github.com/cnoss/mi-slides/issues). Bugs bitte selber behalten. 
Falls noch jemand dieses kleine Tool mit weiter entwickeln möchte: melden :)
