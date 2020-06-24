$(document).ready(function(){

	/*$("#banner").hide().slideDown(1000);*/

	$("#container").hide().slideDown(1000);

/*	$("footer").hide().delay(1000).slideDown(1000);
*/



	/*---hover des flèches sur les bouttons de la navbar---*/

	$("#nav1").hover(function(){
		if($("#navarrow1").css("visibility") == "hidden"){
			$("#navarrow1").css("visibility", "visible");
		}
		else{
			$("#navarrow1").css("visibility", "hidden");
		}
	});

	$("#nav2").hover(function(){
		if($("#navarrow2").css("visibility") == "hidden"){
			$("#navarrow2").css("visibility", "visible");
		}
		else{
			$("#navarrow2").css("visibility", "hidden");
		}
	});

	$("#nav3").hover(function(){
		if($("#navarrow3").css("visibility") == "hidden"){
			$("#navarrow3").css("visibility", "visible");
		}
		else{
			$("#navarrow3").css("visibility", "hidden");
		}
	});


	/*---agrandissement des box "questions" sur click---*/

	$("#whoAmI").click( function(){
		if($("#whoAmI").hasClass('expandWhoAmI')){
			$("#whoAmI").removeClass('expandWhoAmI');
			$("#whoAmI").animate({ "height": "20vh", "min-height": "200px"});
			$("#whoAmI").find(".content-text").hide();
		}	
		else {
			$("#whoAmI").addClass('expandWhoAmI');
			$("#whoAmI").animate({ "height": "50vh", "min-height": "400px"});
			$("#whoAmI").find(".content-text").show();
		}
	});

	$("#why").click( function(){
		if($("#why").hasClass('expandWhy')){
			$("#why").removeClass('expandWhy');
			$("#why").animate({"height": "20vh", "min-height": "200px"});
			$("#why").find(".content-text").hide();
		}	
		else {
			$("#why").addClass('expandWhy');
			$("#why").animate({ "height": "50vh", "min-height": "400px"});
			$("#why").find(".content-text").show();
		}
	});



	/********************-FORM-CONTACT-************************/

	/*------------Contrôle des inputs côté client-----------------*/

	$(function() {
	  $("form[name='contactForm']").validate({
		    rules: {
		     
		      email: {
		        required: true,
		        email: true
		      },
		      subject: {
		        required: true,
		        minlength: 1
		      },
		      text: {
		      	required: true,
		      	minlength: 1
		      }
		    },
		    // Specify validation error messages
		    messages: {
		      subject: "Veuillez renseigner le sujet du message...",
		      email: "Veuillez renseigner une adresse e-mail valide...",
		      text: "Le corps du message ne peut être vide..."
		    },
		    submitHandler: function(form) {
		      form.submit();
		    	}
  		});
	});

	/*--------------Captcha---------------*/

	$('#contactForm').on('submit', (e) => {

		const captcha = $('#g-recaptcha-response').val().trim();

		console.log(captcha);

		if(captcha === undefined || captcha === '' || captcha === null){
			console.log("On prevent default !!!!");
			/*e.preventDefault();*/
		}

	});


/*	$('form').on('submit', (e) => {
			e.preventDefault();//désactive le comportement par défaut du boutton submit.

			const email = $('#email').val().trim();
			const subject = $('#subject').val().trim();
			const text = $('#text').val().trim();
			const captcha = $('#g-recaptcha-response').val().trim();

			const data = {
				email,
				subject,
				text,
				captcha
			};//On empacte nos données dans un objet.

			$.post('/contact', data, function(){
				console.log('Data received !');
				$(location).attr('href',"/mail-sent");

			});	// redirection sur un message de validation quand la requête post est effective.

	});*/// Collecte des données pour nodeMailer via jQuery.





	/*$("#container").fadeIn(5000);*/
	

	/*$("#box").click( function(){
		var toggleWidth = $("#box").width() == 500 ? "800px" : "500px";
		var toggleHeight = $("#box").height() == 500 ? "800px" : "500px";
		$("#box").animate({width: toggleWidth, height: toggleHeight});
	});*/

});//EO $(document).ready()






