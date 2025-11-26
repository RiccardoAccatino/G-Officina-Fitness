const pageController = {
    getHome: (req, res) => {
        res.render('public/home', { 
            title: 'Home - Officina Fitness',
            isHome: true
        });
    },
    getServices: (req, res) => {
        res.render('public/services', { 
            title: 'I Nostri Corsi',
            isHome: false
        });
    }
};

module.exports = pageController;