// togel menue
function toggleMenu() {
    var menu = document.getElementById('userMenu');

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// category slider functionality

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const categories = document.querySelectorAll(".category");
    const categoryWidth = categories[0].offsetWidth + 20;

    let currentIndex = 0;

    function updateArrowVisibility() {
        leftArrow.hidden = currentIndex === 0;
        rightArrow.hidden = currentIndex >= categories.length - 15;
    }

    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
            updateArrowVisibility();
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex < categories.length - 1) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
            updateArrowVisibility();
        }
    });

    updateArrowVisibility();
});
