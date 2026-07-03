// =============================
// Smooth Scroll for Navigation
// =============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =============================
// Active Navigation Highlight
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// Sticky Navbar Shadow
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
    }

});

// =============================
// Scroll to Top Button
// =============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "30px";
topButton.style.padding = "15px 20px";
topButton.style.fontSize = "22px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0077ff";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// =============================
// Contact Form Validation
// =============================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});

// =============================
// Typing Effect
// =============================

const text = "Frontend Developer";

const heading = document.querySelector(".hero-text h2");

let index = 0;

function typeEffect() {

    if (index < text.length) {

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 120);

    }

}

heading.textContent = "";

typeEffect();

// =============================
// Reveal Animation
// =============================

const revealElements = document.querySelectorAll(
    ".skill-card,.project-card,.edu-card,.about-container");

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();