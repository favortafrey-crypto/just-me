
const menuButton= document.querySelector(".menu-toggle");
const navigation= document.querySelector(".navigation");

menuButton.addEventListener("click",function(){
    navigation.classList.toggle("active")
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
