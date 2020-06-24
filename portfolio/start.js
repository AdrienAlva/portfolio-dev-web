const app = require('./app');

const server = app.listen(8080, () => {

	date = new Date();
	console.log('Time:', date.getHours(),'h', date.getMinutes(), 'm', date.getSeconds(),'- Projet: Portfolio - Port: 8080');
	
});