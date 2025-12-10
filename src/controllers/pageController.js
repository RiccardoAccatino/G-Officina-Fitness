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
    },


getContatti: (req, res) => {
        res.render('public/contatti', { 
            title: 'Contatatti',
            isHome: false
        });
    }

    };

module.exports = pageController;