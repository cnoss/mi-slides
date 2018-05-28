# MI-Slides
Slidedecks in Markdown mit Reveal.js im MI Style. 

## Kann das was?
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

# Ich bin eine Headline
## Und ich bin die kleine Schwester der Headline.

Jaja, und ich bin dann eben ein langweiliger Text, den sowieso keine liest, 
weil heutzutage doch alle nur Filme schauen, oder Snaps oder was weiß denn ich. 
Denkt dran:
- früher war alles besser
- jeden Tag eine gute Tat
- mehr fällt mir gerade nicht ein

```

