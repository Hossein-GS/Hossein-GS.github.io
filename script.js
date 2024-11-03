// Initialize slide index for each project card
const slideIndexes = []; // Array to hold slide indices for each project
const slidesContainers = document.querySelectorAll('.project-card'); // Get all project cards

// Set initial slide index for each project card
slidesContainers.forEach(() => slideIndexes.push(0));

// Function to change slides
function plusSlides(n, projectIndex) {
    const projectSlides = slidesContainers[projectIndex].getElementsByClassName('slide');
    slideIndexes[projectIndex] += n;
    showSlides(slideIndexes[projectIndex], projectSlides, projectIndex);
}

// Function to display the current slide
function showSlides(n, projectSlides, projectIndex) {
    if (n >= projectSlides.length) {
        slideIndexes[projectIndex] = 0; // Reset to the first slide
    }
    if (n < 0) {
        slideIndexes[projectIndex] = projectSlides.length - 1; // Go to the last slide
    }
    for (let i = 0; i < projectSlides.length; i++) {
        projectSlides[i].style.display = 'none';
    }
    projectSlides[slideIndexes[projectIndex]].style.display = 'block';
}

// Initial display of the first slide for each project card
slidesContainers.forEach((container, index) => {
    const projectSlides = container.getElementsByClassName('slide');
    showSlides(slideIndexes[index], projectSlides, index);
});


// Show button when scrolling down 100px
window.onscroll = function() { showBackToTopButton() };

function showBackToTopButton() {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function toggleEmailDropdown() {
    const emailDropdown = document.getElementById("emailDropdown");
    emailDropdown.classList.toggle("show-email");
}

// Optional: Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    const emailDropdown = document.getElementById("emailDropdown");
    if (!event.target.closest('.email') && emailDropdown.classList.contains('show-email')) {
        emailDropdown.classList.remove('show-email');
    }
});

function copyEmail() {
    const email = "H.Hossien2022@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function togglePhoneDropdown() {
    const phoneDropdown = document.getElementById("phoneDropdown");
    phoneDropdown.classList.toggle("show-phone");
}

// Optional: Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    const phoneDropdown = document.getElementById("phoneDropdown");
    if (!event.target.closest('.phone') && phoneDropdown.classList.contains('show-phone')) {
        phoneDropdown.classList.remove('show-phone');
    }
});

function copyPhone() {
    const phone = "+971 50 889 1909";
    
    navigator.clipboard.writeText(phone).then(() => {
        alert("Phone number copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}




