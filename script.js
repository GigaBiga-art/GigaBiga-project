// ===============================
// GigaBiga project
// Main JavaScript
// ===============================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Закрываем меню после нажатия на ссылку

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



// ===============================
// CURRENT YEAR
// ===============================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// ===============================
// SCROLL ANIMATIONS
// ===============================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .step, .stats div, section h2"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach((element) => {

    observer.observe(element);

});



// ===============================
// BUTTON HOVER EFFECT
// ===============================

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-3px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";

        }
    );

});



// ===============================
// SMOOTH ANCHOR LINKS
// ===============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });
