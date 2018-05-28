# MI-Slides
Slidedecks in Markdown mit Reveal.js im MI Style

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

Im Kopfbereich der Markdown Datei müssen ein paar Metadaten angegeben werden. Die meisten beziehen sich auf Einstellungen für Revea.js.

```
---
title: Demo für MI Slides
verticalSeparator: ---
revealOptions:
  transition: 'slide'
  backgroundTransition: 'zoom'
  center: false
---
```

## Kann was?
- Live Reload
