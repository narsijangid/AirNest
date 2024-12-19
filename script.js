function toggleMenu() {
    var menu = document.getElementById('userMenu');
    
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}


document.getElementById('languageIcon').addEventListener('click', function () {
    document.getElementById('languagePopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('languagePopup').style.display = 'none';
});




document.addEventListener('DOMContentLoaded', () => {
    const authPopup = document.getElementById('authPopup');
    const closeAuthPopupBtn = document.getElementById('closeAuthPopup');
    const menuLinks = document.querySelectorAll('.menu a');

  
    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            if (event.target.textContent === 'Sign up' || event.target.textContent === 'Log in') {
                event.preventDefault();
                authPopup.style.display = 'flex';
            }
        });
    });


    closeAuthPopupBtn.addEventListener('click', () => {
        authPopup.style.display = 'none';
    });


    authPopup.addEventListener('click', event => {
        if (event.target === authPopup) {
            authPopup.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const heroSection = document.getElementById('hero-section');
const showMoreButton = document.getElementById('show-more-button');
let allData = [];
let isShowingAll = false;
const ROW_LIMIT = 4;

async function fetchData() {
    const response = await fetch("https://airnest-8ab86-default-rtdb.firebaseio.com/places.json");
    const data = await response.json();
    allData = Object.values(data);
    displayData(allData.slice(0, ROW_LIMIT * getCardsPerRow()));
};

function displayData(data) {
    heroSection.innerHTML = "";
    data.forEach((place) => {
        const divCard = document.createElement('div');
        divCard.classList.add("card");
        divCard.innerHTML = `
        <div>
            <i class="heart-icon" data-liked="false" onclick="toggleHeart(this)">&#9825;</i>
            <button class="slider-btn right" onclick="switchImage(this, 'next')">&#10095;</button>
            <button class="slider-btn left" onclick="switchImage(this, 'prev')">&#10094;</button>
            <img src="${place.image}" alt="${place.name}" data-alt-image="${place.image2}">
        </div>
        <div>
            <div class="card-header">
                <p class="name"><strong>${place.name}</strong></p>
                <p class="rating">★ ${place.rating}</p>
            </div>
            <p>${place.distance} kilometers away</p>
            <p>${place.date}</p>
            <p><strong>₹${place.price}</strong> night</p>
        </div>
        `;
        heroSection.appendChild(divCard);
    });
}

function getCardsPerRow() {
    const cardWidth = 300;
    const containerWidth = heroSection.offsetWidth;
    return Math.floor(containerWidth / cardWidth);
}

showMoreButton.addEventListener('click', () => {
    if (isShowingAll) {
        displayData(allData.slice(0, ROW_LIMIT * getCardsPerRow()));
        showMoreButton.textContent = "Show More";
    } else {
        displayData(allData);
        showMoreButton.style.display = "none";
    }
    isShowingAll = !isShowingAll;
});

function toggleHeart(heartIcon) {
    const isLiked = heartIcon.dataset.liked === "true";
    heartIcon.dataset.liked = !isLiked;
    heartIcon.classList.toggle('liked');
}

function switchImage(button, direction) {
    const card = button.closest('.card');
    const img = card.querySelector('img');
    const currentSrc = img.src;
    const altImage = img.getAttribute('data-alt-image');
    const leftButton = card.querySelector('.slider-btn.left');
    const rightButton = card.querySelector('.slider-btn.right');

    img.classList.remove('slide-left', 'slide-right');

    if (direction === 'next') {
        img.src = altImage;
        img.setAttribute('data-alt-image', currentSrc);
        img.classList.add('slide-left');
        leftButton.style.display = 'flex';
        rightButton.style.display = 'none';
    } else if (direction === 'prev') {
        img.src = altImage;
        img.setAttribute('data-alt-image', currentSrc);
        img.classList.add('slide-right');
        leftButton.style.display = 'none';
        rightButton.style.display = 'flex';
    }
    
}