
// Automatically update the footer year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Typing animation

const typingElement = document.getElementById("typing-text");

const roles = [
    "Student",
    "Web Developer",
    "Programmer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    if (!typingElement) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        delay = 1200;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        delay = 300;
    }

    setTimeout(typeAnimation, delay);
}

typeAnimation();
