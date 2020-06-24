const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const sendMail = require('../mail');
const request = require('request');


router.get('/', function(req, res){
	res.render('home');
});

router.get('/formation', function(req, res){
	res.render('formation');
});

router.get('/projets', function(req, res){
	res.render('projets.ejs');
});

router.get('/contact', function(req, res){
	res.render('contact', {checkCaptcha: ""});
});

router.post('/contact',
	[
	check('email')
		.isEmail()
		.withMessage('Veuillez renseigner une adresse courriel valide...')
		.trim()
		.normalizeEmail(),
	check('subject')
		.isLength({min: 1}),
	check('text')
		.isLength({min: 1})
	],


	function(req, res){ //Début fonction callback

	


	/* Captcha */

  	if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    	res.render('contact', {checkCaptcha: "Veuillez cliquer sur le CAPTCHA. Merci."});

  	} else {

	  	var secretKey = "6Ld3cAEVAAAAADG5TRAk_2kKLTSNV1CL74yzrq2-";

	  	var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

	  	request(verificationUrl, function(error, response, body) {
	    	body = JSON.parse(body);
	    
	    	if(body.success !== undefined && !body.success) {
	      		/*return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});*/
	    	}
	    	
	    	/* Validator */

			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				console.log(errors);
	    		return res.status(422).json({ errors: errors.array() });
	  		}

		  	/* Traitement de la requête */

			const { subject, email, text } = req.body;

			console.log('Data: ', req.body);

			sendMail(email, subject, text, function(err, data){
				if (err) {
					console.log('On va dans le if.')
					res.status(500);
				} else {
					console.log("je vais dans le else.")
					res.redirect(302, '/mail-sent');
				}
			});//EO sendMail function

	  	});//On envoie la request à l'api de vérification du captcha. Selon le boolean de retour on éxécute la logique ou non.
  	}//EO else
});//EO /contact POST route

router.get('/mail-sent', function(req, res){
	res.render('mail-sent');
});//Message de confirmation de l'envoi de l'email.



module.exports = router;