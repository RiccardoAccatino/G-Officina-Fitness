const express = require('express');
const router = express.Router();
// Importiamo il controller che abbiamo appena creato
const pageController = require('../controllers/pageController');

// Quando l'utente va sulla pagina principale '/'
router.get('/', pageController.getHome);

// Quando l'utente va su '/corsi'
router.get('/aboutus', pageController.getServices);

module.exports = router;