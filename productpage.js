

document.getElementById('languageIcon').addEventListener('click', function () {
  document.getElementById('languagePopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('languagePopup').style.display = 'none';
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




// ))))))))))))))))))))
window.addEventListener('DOMContentLoaded', function() {
  const cardofbnb = document.querySelector('.cardofbnb');
  cardofbnb.classList.add('hidden');
});


window.addEventListener('scroll', function() {
  const cardofbnb = document.querySelector('.cardofbnb'); 
  const scrollTop = window.scrollY; 
  const scrollBottom = scrollTop + window.innerHeight; 
  const documentHeight = document.documentElement.scrollHeight; 

 
  if (scrollTop > 407) {
      cardofbnb.classList.remove('hidden');
  } else {
      cardofbnb.classList.add('hidden');
  }

  
  if (scrollBottom > documentHeight - 2200) {
      cardofbnb.classList.add('hidden');
  }
});




document.addEventListener('DOMContentLoaded', () => {
 
  const params = new URLSearchParams(window.location.search);

 
  const name = params.get('name');
  const image1 = params.get('image1');
  const image2 = params.get('image2');

 
  document.querySelector('h2').textContent = name;
  document.querySelector('#productpageimage #firstimg img').src = image1;

 
  const imageGrid = document.querySelector('#productimagegrid');
  imageGrid.children[0].src = image1;
  imageGrid.children[1].src = image2;
  imageGrid.children[2].src = image1; 
  imageGrid.children[3].src = image2; 
});



function toggleMenu() {
  var menu = document.getElementById('userMenu');

  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}





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
          <a href="#">Airbnb your home</a>
          <a href="#">Host an experience</a>
          <a href="#">Help Centre</a>
      `;
      document.getElementById('logoutBtn').addEventListener('click', logout);
  }
}


function logout() {
  localStorage.removeItem('user');
  location.reload();
}


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
      checkLoginStatus();
  }
});


window.onload = checkLoginStatus;