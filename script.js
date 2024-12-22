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

let searchproductpart = document.getElementById("searchproductpart");
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



searchproductpart.addEventListener("input", () => {
    const searchValue = searchproductpart.value.toLowerCase();
    const filteredData = allData.filter(place => place.name.toLowerCase().includes(searchValue));
    displayData(filteredData);
});


function displayData(data) {
    heroSection.innerHTML = "";
    data.forEach((place, index) => {
        const divCard = document.createElement('div');
        divCard.classList.add("card");
        divCard.innerHTML = `
        <div>
            <i class="heart-icon" data-liked="false" onclick="toggleHeart(this)">&#9825;</i>
            <button class="slider-btn right" onclick="switchImage(this, 'next')">&#10095;</button>
            <button class="slider-btn left" onclick="switchImage(this, 'prev')">&#10094;</button>
            <img  src="${place.image}" alt="${place.name}" data-alt-image="${place.image2}">
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

        // Event listener for image click only
        const image = divCard.querySelector('img');
        image.addEventListener('click', () => {
            const queryParams = new URLSearchParams({
                name: place.name,
                image1: place.image,
                image2: place.image2,
                rating: place.rating,
                distance: place.distance,
                price: place.price,
            });
            window.location.href = `productpage.html?${queryParams.toString()}`;
        });

       
        const heartIcon = divCard.querySelector('.heart-icon');
        const sliderButtons = divCard.querySelectorAll('.slider-btn');
        heartIcon.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toggleHeart(heartIcon);
        });
        sliderButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); 
               
            });
        });

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




let btns = document.getElementsByClassName('btns'); 
Array.from(btns).forEach(tab => {
    tab.addEventListener('click', function () {
        Array.from(btns).forEach(btn => btn.classList.remove('underlined'));
        this.classList.add('underlined');
    });
});









//ggggggggggggggggggggggggggggggggg



function openAuthPopup() {
    document.getElementById('authPopup').style.display = 'block';
}


function closeAuthPopup() {
    document.getElementById('authPopup').style.display = 'none';
}
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (user) {
        const userName = JSON.parse(user).name;
        document.getElementById('signUpBtn').style.display = 'none';
        document.getElementById('logInBtn').style.display = 'none';
        const userMenu = document.getElementById('userMenu');
        userMenu.innerHTML = `
            <a href="#">${userName}</a>
            <a href="javascript:void(0)" id="logoutBtn">Log out</a>
            <hr>
             <a href="javascript:void(0)" id="wishlistBtn">Wishlist</a> 
            <a href="#">Airbnb your home</a>
            <a href="#">Host an experience</a>
            <a href="#">Help Centre</a>
           
        `;
        document.getElementById('logoutBtn').addEventListener('click', logout);
        document.getElementById('wishlistBtn').addEventListener('click', showWishlist); // Wishlist button click handler
    } else {
        document.getElementById('wishlistBtn').style.display = 'none'; // Hide Wishlist button when not logged in
    }
}

function logout() {
    localStorage.removeItem('user');
    location.reload(); // Reload the page to update the login status
}

function showWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistPopup = document.getElementById("wishlistPopup");
    const wishlistItems = document.getElementById("wishlistItems");

    wishlistItems.innerHTML = wishlist
        .map(
            (item) => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        </div>`
        )
        .join("");

    wishlistPopup.style.display = "flex"; // Show wishlist popup
}

// Update the checkLoginStatus to ensure the wishlist button visibility is updated
document.getElementById('signUpBtn').addEventListener('click', openAuthPopup);
document.getElementById('logInBtn').addEventListener('click', openAuthPopup);
document.getElementById('closeAuthPopup').addEventListener('click', closeAuthPopup);
document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        const user = {
            name: email.split('@')[0],  
            email,
            password
        };

        localStorage.setItem('user', JSON.stringify(user));

        closeAuthPopup();
        checkLoginStatus(); // Recheck the login status
    }
});

window.onload = checkLoginStatus; // Call checkLoginStatus on page load

// (((((((((((((((((((())))))))))))))))))))


const toggleSwitch = document.querySelector('.toggle-switch');
toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('active');
});

// )))))))))))))))))))))
// Add to Wishlist Functionality
function toggleHeart(heartIcon) {
    const isLiked = heartIcon.dataset.liked === "true";
    heartIcon.dataset.liked = !isLiked;

    const card = heartIcon.closest(".card");
    card.style.border = isLiked ? "none" : "2px solid red";

    if (!isLiked) {
        const product = {
            name: card.querySelector(".name").textContent,
            image: card.querySelector("img").src,
        };

        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        alert("Add Successful");
    }
}

// Wishlist Popup Logic
const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistPopup = document.getElementById("wishlistPopup");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");

wishlistBtn.addEventListener("click", () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistItems.innerHTML = wishlist
        .map(
            (item) => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        </div>`
        )
        .join("");

    wishlistPopup.style.display = "flex";
});

closeWishlist.addEventListener("click", () => {
    wishlistPopup.style.display = "none";
});

wishlistPopup.addEventListener("click", (event) => {
    if (event.target === wishlistPopup) {
        wishlistPopup.style.display = "none";
    }
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$