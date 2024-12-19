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
