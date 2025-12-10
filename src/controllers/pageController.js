const nodemailer = require('nodemailer');

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
            title: 'Contattaci',
            isHome: false,
            success: false, // Variabili per gestire i messaggi
            error: false
        });
    },

    // Logica per inviare l'email
    postContatti: async (req, res) => {
        const { name, email, subject, message } = req.body;

        // Configura il trasportatore (chi invia l'email)
        // ATTENZIONE: Usa le variabili d'ambiente (.env) per sicurezza in produzione
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // La tua email gmail (es: fitnessofficina@gmail.com)
                pass: process.env.EMAIL_PASS  // La tua PASSWORD PER LE APP di Google (non quella di login!)
            }
        });

        // Configura l'email
        let mailOptions = {
            from: email, // Chi scrive (dal form)
            to: process.env.EMAIL_USER, // A chi arriva (a te)
            subject: `Nuovo messaggio dal sito web: ${subject}`,
            text: `Hai ricevuto un messaggio da:
Nome: ${name}
Email: ${email}

Messaggio:
${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            // Se va tutto bene, ricarica la pagina con messaggio di successo
            res.render('public/contatti', {
                title: 'Contattaci',
                isHome: false,
                success: true,
                error: false
            });
        } catch (err) {
            console.log(err);
            // Se c'è un errore, mostra messaggio di errore
            res.render('public/contatti', {
                title: 'Contattaci',
                isHome: false,
                success: false,
                error: true
            });
        }
    }
};

module.exports = pageController;