/*==========================================
PRELOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/*==========================================
MOBILE MENU
==========================================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*==========================================
SCROLL TO TOP
==========================================*/

const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
TYPING EFFECT
==========================================*/

const words = [

    "Software Engineering Student",

    "AI Full Stack Learner",

    "Frontend Developer",

    "Python Programmer",

    "Future AI Engineer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeWriter() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeWriter, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            letterIndex = 0;

        }

    }

    setTimeout(typeWriter, deleting ? 50 : 100);

}

typeWriter();
/*==========================================
DARK MODE
==========================================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/*==========================================
COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 80;

            function updateCounter() {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================
HEADER SHADOW
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*==========================================
CONTACT FORM
==========================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

/*==========================================
FLOATING EFFECT
==========================================*/

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.4}s`;

});

/*==========================================
FADE-IN ANIMATION
==========================================*/

const revealItems = document.querySelectorAll(

".section-header,.about-container,.skill-box,.project-card,.timeline-item,.certificate-card,.contact-item"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

    revealObserver.observe(item);

});

/*==========================================
SMOOTH BUTTON HOVER
==========================================*/

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

/*==========================================
END OF SCRIPT
==========================================*/

console.log("Premium Portfolio Loaded Successfully");
