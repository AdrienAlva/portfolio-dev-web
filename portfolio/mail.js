const nodemailer = require('nodemailer');
const mailGun= require('nodemailer-mailgun-transport');


const auth = {
	auth: {
		api_key: '',
		domain: ''
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, callback) => {
	const mailOptions = {
		from: email,
		to: '',
		subject,
		text
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if(err) {
			console.log('L\'erreur est bien là.')
			console.log(err);
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
};


module.exports = sendMail;

