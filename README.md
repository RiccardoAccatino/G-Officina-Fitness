# 🏋️‍♂️ G-Officina Fitness - Sito Web

Benvenuti nel repository del sito di **G-Officina Fitness**!
Questa guida serve ad aiutare tutti i collaboratori (anche i non-programmatori!) a scaricare, avviare e modificare il sito sul proprio computer.

---

## 🚀 1. Prima di Iniziare (Prerequisiti)

Per far funzionare il sito sul tuo PC, devi avere installati questi due programmi gratuiti:

1.  **Node.js** (Il motore del sito):
    * Scaricalo qui: [https://nodejs.org/](https://nodejs.org/) (Scegli la versione "LTS").
    * Installalo cliccando sempre "Avanti".
2.  **VS Code** (L'editor per modificare il codice):
    * Scaricalo qui: [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

## 📥 2. Installazione

Una volta scaricato il progetto (o clonato con Git), dobbiamo installare le "librerie" che servono al sito per funzionare.

1.  Apri la cartella del progetto con **VS Code**.
2.  In alto nel menu, clicca su **Terminale** -> **Nuovo Terminale**.
3.  Nella finestra nera che appare in basso, scrivi questo comando e premi Invio:

    ```bash
    npm install
    ```

    *⏳ Attendi qualche secondo che finisca di scaricare i pacchetti.*

---

## ▶️ 3. Come Avviare il Sito

Ora che è tutto pronto, accendiamo il sito!

1.  Sempre nel terminale di VS Code, scrivi:

    ```bash
    npm start
    ```

2.  Dovresti vedere una scritta tipo:
    `Server palestra attivo su: http://localhost:3000`

3.  Apri il tuo browser (Chrome, Safari, ecc.) e vai all'indirizzo:
    👉 **http://localhost:3000**

🎉 **Ecco fatto! Il sito è attivo sul tuo PC.**

> **Nota:** Per spegnere il sito, clicca nel terminale e premi `CTRL + C`.

---

## 📂 4. Dove metto le mani? (Guida alle cartelle)

Ecco una mappa semplice per capire dove trovare i file da modificare:

### 🖼️ Vuoi cambiare un'immagine o il logo?
Vai nella cartella: `public/img`
* Qui ci sono tutte le foto divise per categorie (Chri, Gio, Logo, ecc.).
* Se aggiungi una nuova foto, ricordati il nome esatto per collegarla!

### ✍️ Vuoi cambiare i testi o l'HTML?
Vai nella cartella: `src/views`
* Qui trovi le pagine vere e proprie. I file finiscono con `.ejs` (è come l'HTML).
* `home.ejs`: È la pagina principale.
* `partials/navbar.ejs`: È la barra del menu in alto (modificala qui per cambiarla in tutte le pagine).
* `partials/footer.ejs`: È la parte nera in fondo alla pagina (contatti, copyright).

### 🎨 Vuoi cambiare i colori o i font?
Vai nella cartella: `public/css`
* Cerca il file `style.css`. Qui ci sono tutte le regole di stile.

---

## 🛠️ Esempio: Come fare una modifica

Mettiamo che tu voglia cambiare una scritta nella Home Page:

1.  Assicurati che il sito sia avviato (`npm start`).
2.  Apri il file `src/views/public/home.ejs`.
3.  Cerca la frase che vuoi cambiare e scrivi il nuovo testo.
4.  Salva il file (`CTRL + S` o `CMD + S` su Mac).
5.  Vai sul browser (dove hai aperto localhost:3000) e **ricarica la pagina**.
6.  Vedrai subito la modifica! ✨

---

## 🆘 Problemi comuni

* **Il comando `npm start` dà errore?**
    * Assicurati di aver fatto `npm install` prima.
    * Controlla che non ci sia già un altro terminale aperto che sta facendo girare il sito.
* **Le immagini non si vedono?**
    * Controlla che il nome del file sia corretto (Maiuscole e minuscole contano! `foto.jpg` è diverso da `Foto.JPG`).

---

Buon lavoro dal team Tech! 💻💪
