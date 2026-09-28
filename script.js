// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ===============================
// CLOSE MOBILE MENU
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light Mode";

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

    }

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all the fields.";

        return;

    }


    // Check email

    if (!email.includes("@")) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    // Success message

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";


    // Clear form

    contactForm.reset();

// ===============================
// MOBILE MENU
// ===============================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ===============================
// CLOSE MOBILE MENU
// ===============================

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ===============================
// DARK MODE
// ===============================

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeToggle.textContent =
            "☀️ Light Mode";

    } else {

        themeToggle.textContent =
            "🌙 Dark Mode";

    }

});


// ===============================
// PROJECT POPUP
// ===============================

function showProject(title, description) {

    const modal =
        document.getElementById("projectModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");


    modalTitle.textContent = title;

    modalDescription.textContent = description;


    modal.classList.add("active");

}


// ===============================
// CLOSE PROJECT POPUP
// ===============================

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

}


// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("projectModal");


    if (event.target === modal) {

        closeProject();

    }

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value
            .trim();


        const email =
            document.getElementById("email")
            .value
            .trim();


        const message =
            document.getElementById("message")
            .value
            .trim();


        // CHECK EMPTY FIELDS

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;

        }


        // CHECK EMAIL

        if (!email.includes("@")) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;

        }


        // SUCCESS

        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been received.";

        formMessage.style.color = "green";


        // CLEAR FORM

        contactForm.reset();

    }
);


// ===============================
// BACK TO TOP
// ===============================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const currentYear =
    document.getElementById("currentYear");


currentYear.textContent =
    new Date().getFullYear();