# F11 - Testaufgabe

Deploy : [https://de24world.github.io/F11---Testaufgabe/]

## Libarary

1. react-hooks-form
   https://react-hook-form.com/

2. react-i18-next
   https://react.i18next.com/

3. react-router-dom
4. little-state-machine (state-management like a redux)

5. gh-pages : For deploy

### `npm install` & `npm run start`

download code and 'npm install' and then 'npm run start'

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Aufgaben

Die Aufgabe besteht in dem Aufbau eines „Supportformulars“ in Deutsch und Englisch mit React.

Auf der Seite soll es oben eine Sprachauswahl geben, um von Deutsch auf Englisch wechseln zu können.

Das Formular enthält initial folgende Felder:

Name/Name (Textfeld, initial leer)
Emailadresse/Email address (Textfeld, initial leer, Validierung ob es sich bei der Eingabe um eine gültige Mailadresse handelt)
Themenbereich/Topic (Selectfeld mit den Optionen „Allgemeine Anfrage“, „Softwarefehler“ und „Rückruf“)
Beschreibung/Description (Textarea)
Absenden-Button
Wird im Themenbereich „Softwarefehler“ ausgewählt, wird ein zusätzliches Feld unter dem Dropdown hinzugefügt, in das eine Versionsnummer eingetragen werden muss. Die Versionsnummer kann zum Beispiel lauten „1.0.0“, „1.11.12“. Eine andere Möglichkeit mit zum Beispiel Buchstaben ist hier nicht möglich. Das Schema bleibt <zahl>.<zahl>.<zahl>.

Wird im Themenbereich „Rückruf“ ausgewählt, wird ein zusätzliches Feld unter dem Dropdown hinzugefügt, in das eine Telefonnummer eingetragen werden muss.

Das Formular sollte die Eingabe entsprechend validieren.

Wird das Formular abgeschickt, soll das Ergebnis auf einer Ergebnisseite angezeigt werden.

Die Ergebnisse werden nicht gespeichert.
Alle Felder sind Pflichtfelder.
