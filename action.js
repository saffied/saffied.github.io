$(document).ready(function () {
	var x = document.getElementById("myTopnav");
	var height = x.offsetHeight;
	var top_offset = height * -1;
	document.getElementById("jumbotron").style.top = top_offset + "px";
})

document.addEventListener('DOMContentLoaded',function(event){
	// array with texts to type in typewriter
	var dataText = [ "Hi, I'm Derek.", "Developer.", "Writer."];

	function typeWriter(i) {
		
		var elm = document.querySelector("h1");
        var newElm = elm.cloneNode(true);
        elm.parentNode.replaceChild(newElm, elm);
		
		// add next character to h1
		document.querySelector("h1").innerHTML = dataText[i] +'<span aria-hidden="true"></span>';

		// wait for a while and call this function again for next character
		setTimeout(function() {
			typeWriter((i + 1)%3)
		}, 6000);
	}
  
	// start the text animation
	typeWriter(0);
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}