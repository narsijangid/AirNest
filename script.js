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

// its our image sliding functionlity 

const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === carousel.children.length - 2;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 2) {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();




window.addEventListener('scroll', function() {
  const card = document.querySelector('.card'); 
  const scrollTop = window.scrollY; 
  const scrollBottom = scrollTop + window.innerHeight; 
  const documentHeight = document.documentElement.scrollHeight; 


  if (scrollTop > 410) {
      card.classList.remove('hidden');
  } else {
      card.classList.add('hidden');
  }


  if (scrollBottom > documentHeight - 2200) {
      card.classList.add('hidden');
  }
});