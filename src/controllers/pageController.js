const pageController = {
    getHome: (req, res) => {
        res.render('public/home', { 
            title: 'Home - Officina Fitness',
            isHome: true // <--- AGGIUNGI QUESTA RIGA
        });
    },
    getServices: (req, res) => {
        res.render('public/services', { title: 'I Nostri Corsi' });
    }
};

module.exports = pageController;