// Initial slide index
let slideIndex = 0;
showSlide(slideIndex);

// Function to move to the next or previous slide
function moveSlide(n) {
  showSlide(slideIndex += n);
}

// Function to display the current slide
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');

  // Loop back to the first slide if at the end, or to the last slide if at the beginning
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Hide all slides, then display the current one
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'flex';
}

// Dropdown menu toggle
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Optional: Hide dropdown menu if clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu && dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
};

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate fields
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  if (username && email && password) {
    alert(`Welcome, ${username}! Your account has been created.`);
    // Logic to handle form submission could go here
  } else {
    alert("Please fill out all fields.");
  }
});
