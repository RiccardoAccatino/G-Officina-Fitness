require('dotenv').config(); // Carica le variabili d'ambiente
const express = require('express');
const path = require('path');
const app = express();

// 1. Configura EJS come motore grafico
app.set('view engine', 'ejs');
// Dice a Node dove trovare i file .ejs (nella cartella src/views)
app.set('views', path.join(__dirname, 'src', 'views'));

// 2. File Statici (CSS, Immagini, JS)
// Rende pubblica la cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware per leggere i dati dei form (POST)
app.use(express.urlencoded({ extended: true }));

// 3. Le Rotte (Le pagine del sito)
const webRoutes = require('./src/routes/webRoutes');
app.use('/', webRoutes);

// 4. Avvio del Server
// Railway ci darà una porta specifica, altrimenti usiamo la 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server palestra attivo su: http://localhost:${PORT}`);
});