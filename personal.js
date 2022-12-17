var humburger = document.querySelector(".humb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListner("click" , function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})