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



var images = document.getElementsByTagName("img")[0];
images.addEventListener("mouseover",imagezoom);
images.addEventListener("mouseout",imagenormal);

var images1 = document.getElementsByTagName("img")[1];
images1.addEventListener("mouseover",imagezoom1);
images1.addEventListener("mouseout",imagenormal1);

var images2 = document.getElementsByTagName("img")[2];
images2.addEventListener("mouseover",imagezoom2);
images2.addEventListener("mouseout",imagenormal2);

var images3 = document.getElementsByTagName("img")[3];
images3.addEventListener("mouseover",imagezoom3);
images3.addEventListener("mouseout",imagenormal3);

var images4 = document.getElementsByTagName("img")[4];
images4.addEventListener("mouseover",imagezoom4);
images4.addEventListener("mouseout",imagenormal4);

var images5 = document.getElementsByTagName("img")[5];
images5.addEventListener("mouseover",imagezoom5);
images5.addEventListener("mouseout",imagenormal5);



function imagezoom() {
	images.style.width="430px";
	images.style.height="310.7142857142857px";
}

function imagenormal() {
	images.style.width="420px";
	images.style.height="300px";
}

function imagezoom1() {
	images1.style.width="430px";
	images1.style.height="310.7142857142857px";
}

function imagenormal1() {
	images1.style.width="420px";
	images1.style.height="300px";
}

function imagezoom2() {
	images2.style.width="430px";
	images2.style.height="310.7142857142857px";

}

function imagenormal2() {
	images2.style.width="420px";
	images2.style.height="300px";
}

function imagezoom3() {
	images3.style.width="430px";
	images3.style.height="310.7142857142857px";
}

function imagenormal3() {
	images3.style.width="420px";
	images3.style.height="300px";
}
function imagezoom4() {
	images4.style.width="430px";
	images4.style.height="310.7142857142857px";
}

function imagenormal4() {
	images4.style.width="420px";
	images4.style.height="300px";
}
function imagezoom5() {
	images5.style.width="430px";
	images5.style.height="310.7142857142857px";
}

function imagenormal5() {
	images5.style.width="420px";
	images5.style.height="300px";
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