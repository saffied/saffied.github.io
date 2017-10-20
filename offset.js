function offset(elementToOffsetBy, elementToOffset, minScreenSize) {
	var width = $(window).width();
	if(width >= minScreenSize) {
		var x = document.getElementById(elementToOffsetBy);
		var height = x.offsetHeight;
		var top_offset = height * -1;
		document.getElementById(elementToOffset).style.top = top_offset + "px";
	}
}