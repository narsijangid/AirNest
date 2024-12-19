// togel menue
function toggleMenu() {
    var menu = document.getElementById('userMenu');

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// category slider functionality

const slider = document.getElementById("slider");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const categories = document.querySelectorAll(".category");
const totalCategories = categories.length;


const categoryWidth = categories[0].offsetWidth + 20;

let currentIndex = 0;


function updateArrowVisibility() {
    if (currentIndex === 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "block";
    }

    if (currentIndex === totalCategories - 15) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "block";
    }
}

updateArrowVisibility();


leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
        updateArrowVisibility();
    }
});


rightArrow.addEventListener("click", () => {
    if (currentIndex < totalCategories - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
        updateArrowVisibility();
    }
});

