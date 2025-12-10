const pageController = {
    getHome: (req, res) => {
        res.render('public/home', { 
            title: 'Home - Officina Fitness',
            isHome: true
        });
    },
    getServices: (req, res) => {
        res.render('public/aboutus', { 
            title: 'Chi siamo',
            isHome: false
        });
    }
};

module.exports = pageController;