document.addEventListener('DOMContentLoaded',function(event){
	// array with texts to type in typewriter
	var dataText = [ "Hi, I'm Derek.", "Developer.", "Writer."];

	function typeWriter(i) {
		
		var h = document.createElement("h1"); //creating the element
		h.innerHTML = dataText[i];          //setting its content
		var typewriter = document.querySelector(".typewriter");
		typewriter.innerHTML = '';  //remove all children
		typewriter.appendChild(h);  //add the new h1 element

		// wait for a while and call this function again for next character
		setTimeout(function() {
			typeWriter((i + 1)%3)
		}, 6000);
	}
  
	// start the text animation
	typeWriter(0);
});