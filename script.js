// MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
}

// AUTOMATIC FOOTER YEAR
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
// COSMIC AMBIENCE
const cosmicAudio = document.querySelector("#cosmic-audio");

if (cosmicAudio) {
    cosmicAudio.volume = 0.25;

    cosmicAudio.play().catch((error) => {
        console.log("Autoplay was blocked:", error);
    });
}