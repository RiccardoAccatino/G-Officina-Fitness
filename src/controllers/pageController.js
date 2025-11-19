const pageController = {
    getHome: (req, res) => {
        // Cerca il file in src/views/public/home.ejs
        res.render('public/home', { title: 'Home - Officina Fitness' });
    },

    getServices: (req, res) => {
        res.render('public/services', { title: 'I Nostri Corsi' });
    }
};

module.exports = pageController;