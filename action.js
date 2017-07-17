$(document).ready(function () {
	//Function to scroll to 'about' section on button click
	$('.about_button').on('click', function() {
		scroller('about_wrapper');
	});
	
	//Function to scroll to 'timeline' section on button click
	$('.timeline_button').on('click', function() {
		scroller('timeline_wrapper');
	});
	
	//Function to scroll to 'projects' section on button click
	$('.project_button').on('click', function() {
		scroller('project_section');
	});
	
	//Function to scroll to 'contact' section on button click
	$('.contact_button').on('click', function() {
		scroller('contact_section');
	});
})

function scroller(scroll_to) {
	//Get the position of the top of the desired element
	var pos = $('#' + scroll_to).offset().top;	

	//Animate scroll with duration of 1000ms
	$('HTML, BODY').animate({
		scrollTop: pos
	}, 1000);
}