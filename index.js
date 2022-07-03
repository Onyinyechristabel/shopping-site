var menu = document.querySelector("#menu");
var side = document.querySelector("#side");
menu.addEventListener("click",function(){
    side.classList.toggle("hide");
});