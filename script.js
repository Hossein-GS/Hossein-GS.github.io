// Initialize the slide index for each slideshow
let slideIndexes = [0]; // Adjust the size based on the number of project cards
const slides = document.querySelectorAll('.gallery .project-card');

function plusSlides(n, projectIndex) {
    const projectSlides = slides[projectIndex].getElementsByClassName('slide');
    showSlides(slideIndexes[projectIndex] += n, projectSlides, projectIndex);
}

function showSlides(n, projectSlides, projectIndex) {
    if (n >= projectSlides.length) {
        slideIndexes[projectIndex] = 0; // Loop back to the first image
    } else if (n < 0) {
        slideIndexes[projectIndex] = projectSlides.length - 1; // Loop back to the last image
    }

    for (let i = 0; i < projectSlides.length; i++) {
        projectSlides[i].style.display = 'none';
    }

    projectSlides[slideIndexes[projectIndex]].style.display = 'block';
}
