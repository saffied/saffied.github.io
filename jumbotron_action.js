$(document).ready(function () {
	var x = document.getElementById("myTopnav");
	var height = x.offsetHeight;
	var top_offset = height * -1;
	document.getElementById("jumbotron").style.top = top_offset + "px";
})