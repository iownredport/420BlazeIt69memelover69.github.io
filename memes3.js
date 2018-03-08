
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




function bar(){
	sidebar.style.width="150px";
	sidebar.style.fontSize="25px";
	document.querySelectorAll(".sidebar a")[0].style.fontSize="25px";
	document.querySelectorAll(".sidebar a")[1].style.fontSize="25px";
}

function nobar(){
	sidebar.style.width="25px";
	sidebar.style.fontSize="5pt";
	document.querySelectorAll(".sidebar a")[0].style.fontSize="5pt";
	document.querySelectorAll(".sidebar a")[1].style.fontSize="5pt";
}


var x = document.getElementsByTagName("input")[1];
var y = document.getElementsByTagName("input")[2];
var z = document.getElementsByTagName("input")[3];
var l = document.getElementsByTagName("input")[4];


l.addEventListener("click",name);


function name(){
	if(x.value == "" || y.value == ""|| z.value == ""){
	alert("One or more missing fields are empty!");
}
else{
	alert("Thank you for your message. If you were looking to be hired for a job, you did not get it. If you are leaving feedback, we are not reading it. Have a nice day.")
}

}


