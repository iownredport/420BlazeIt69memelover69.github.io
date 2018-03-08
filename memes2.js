
var search = document.getElementById("search");

search.addEventListener("click",enter);
search.addEventListener("keypress",wrong);

function enter() {
	alert("Hit enter when you are done.");
}

function wrong(e){
	var key = e.which||e.keyCode;
	 if (key === 13) { // 13 is enter

	alert("No results");
	}
}


var sidebar = document.getElementsByClassName("sidebar")[0];
sidebar.addEventListener("mouseout",nobar);
sidebar.addEventListener("mouseover",bar);
sidebar.style.width="25px";
sidebar.style.fontSize="5pt";
document.querySelectorAll(".sidebar a")[0].style.fontSize="5pt";
document.querySelectorAll(".sidebar a")[1].style.fontSize="5pt";
document.querySelectorAll(".sidebar a")[2].style.fontSize="5pt";



function bar(){
	sidebar.style.width="150px";
	sidebar.style.fontSize="25px";
	document.querySelectorAll(".sidebar a")[0].style.fontSize="25px";
	document.querySelectorAll(".sidebar a")[1].style.fontSize="25px";
	document.querySelectorAll(".sidebar a")[2].style.fontSize="25px";
}

function nobar(){
	sidebar.style.width="25px";
	sidebar.style.fontSize="5pt";
	document.querySelectorAll(".sidebar a")[0].style.fontSize="5pt";
	document.querySelectorAll(".sidebar a")[1].style.fontSize="5pt";
	document.querySelectorAll(".sidebar a")[2].style.fontSize="5px";
}
