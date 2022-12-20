var humburger = document.querySelector(".hump");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

humburger.addEventListener("click" , function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});