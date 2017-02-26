function askQuestions() {

		var firstName = prompt('What is your first name?').trim();

		var lastName = prompt('What is your last name?').trim();

		var fullName = firstName + ' ' + lastName;

		console.log(fullName);

		var age = prompt('How old are you?');
		age = parseInt(age);


		if (age>=18) {

			console.log('User is an adult');

		} else if (age>=14) {

			console.log('User is a teenager');

		} else {

			console.log('User is a child');

		}

		if (firstName.toLowerCase().trim() == 'general' && lastName.toLowerCase().trim() !== 'Assembly') {

			console.log('hiya General' + ' ' + lastName);

		}

}

//trim is used to reduce space before and after input


//when the page has loaded do the stuff within the curly brackets
$(function() {

	$('img').on('click', askQuestions);

	//when the user clicks an h3
	$('h3').on('click',function() {

		//toggle the next element and this refers to the thing the user just cliked on
		//and this can refer to different things
		$(this).next().slideToggle(1000);

	});

//function addTax(price) {var total = price + 10; return total;}

});



