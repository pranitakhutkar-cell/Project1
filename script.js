// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");


menuButton?.addEventListener("click", () => {

    const isOpen =
        header.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        header.classList.remove("open");

        menuButton?.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ===============================
// LIVE CLOCK
// ===============================

function updateClock() {

    const clock =
        document.getElementById("clock");

    if (!clock) {
        return;
    }


    const now = new Date();


    clock.textContent =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour12: false,
                timeZone: "Asia/Kolkata"
            }
        );

}


updateClock();

setInterval(
    updateClock,
    1000
);


// ===============================
// CURRENT YEAR
// ===============================

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// ===============================
// SKILLS
// ===============================

const readout =
    document.getElementById("readout");


document
    .querySelectorAll(".cat button")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                if (readout) {

                    readout.textContent =
                        button.dataset.i;

                }

            }
        );

    });


// ===============================
// PROJECT DATA
// ===============================

const projects = [

    {
        title:
            "College Feedback Management System",

        text:
            "A college feedback platform with an admin dashboard for feedback forms, responses, analytics, user management and responsive UI. Worked on frontend development, user analysis and system testing.",

        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "UI/UX"
        ]
    },


    {
        title:
            "FreshKart",

        text:
            "A smart grocery delivery UI/UX project with customer, store owner, delivery partner and administrator flows. Designed screens for shopping, checkout, orders and delivery tracking.",

        tags: [
            "Figma",
            "UI/UX",
            "Responsive Design"
        ]
    },


    {
        title:
            "Property Rental and Sale Portal",

        text:
            "A responsive web development project focused on property listings, user interactions, booking flows and a simple user-friendly interface.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }

];


// ===============================
// PROJECT MODAL
// ===============================

const dialog =
    document.getElementById(
        "projectDialog"
    );

const dialogTitle =
    document.getElementById(
        "dialogTitle"
    );

const dialogText =
    document.getElementById(
        "dialogText"
    );

const dialogTags =
    document.getElementById(
        "dialogTags"
    );


document
    .querySelectorAll("[data-p]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const project =
                    projects[
                        Number(
                            button.dataset.p
                        )
                    ];


                dialogTitle.textContent =
                    project.title;


                dialogText.textContent =
                    project.text;


                dialogTags.replaceChildren(

                    ...project.tags.map(
                        (tag) => {

                            const element =
                                document.createElement(
                                    "b"
                                );

                            element.textContent =
                                tag;

                            return element;

                        }
                    )

                );


                dialog.showModal();

            }
        );

    });


// ===============================
// CLOSE PROJECT MODAL
// ===============================

const closeDialog =
    document.getElementById(
        "closeDialog"
    );


closeDialog.addEventListener(
    "click",
    () => {

        dialog.close();

    }
);


dialog.addEventListener(
    "click",
    (event) => {

        if (
            event.target === dialog
        ) {

            dialog.close();

        }

    }
);


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const status =
            document.getElementById(
                "formStatus"
            );


        status.textContent =
            "Thanks! Your message has been submitted successfully.";


        contactForm.reset();

    }
);


// ===============================
// CUSTOM CURSOR
// ===============================

const cursor =
    document.querySelector(
        ".cursor"
    );


if (cursor) {

    window.addEventListener(
        "pointermove",
        (event) => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }
    );


    document
        .querySelectorAll(
            "a, button"
        )
        .forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "big"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "big"
                    );

                }
            );

        });

}