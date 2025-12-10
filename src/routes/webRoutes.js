const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.getHome);
router.get('/aboutus', pageController.getServices);

// Rotte per i contatti
router.get('/contatti', pageController.getContatti);
router.post('/contatti', pageController.postContatti); // Nuova rotta POST

module.exports = router;