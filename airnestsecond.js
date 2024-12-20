
function toggleOptions(button) {
  const options = button.nextElementSibling;
  const allOptions = document.querySelectorAll('.faq-options');
  
  allOptions.forEach(opt => {
    if (opt !== options) opt.classList.remove('active');
  });

  options.classList.toggle('active');
}

window.addEventListener('click', function (e) {
  const dropdowns = document.querySelectorAll('.faq-options');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});

function updateRate() {
  const slider = document.getElementById('rateSlider');
  const rateDisplay = document.getElementById('rateDisplay');
  const rateText = document.getElementById('rateText');
  const nightlyRate = parseInt(slider.value).toLocaleString('en-IN');
  rateDisplay.textContent = `₹${nightlyRate}`;
  rateText.textContent = `1 night · ₹${nightlyRate}/night`;
}
