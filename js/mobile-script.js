const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".hamburger-menu");
const accordionsBtn = document.querySelectorAll(".hamburger-menu__dropdown-container");
const accordions = document.querySelectorAll(".hamburger-menu__dropdown");

/** Event Listener */

menuButton.addEventListener("click", function () {
    if (menuButton.classList.contains("hamburger-icon")) {
        toggleButton("open");
        showMenu();
    } else {
        toggleButton("close");
        hideMenu();
    }
});

accordionsBtn.forEach(accaordionBtn => {
    accaordionBtn.addEventListener("click", function (e) {
        if (e.target.localName === "a") {
            accordion(e.target.innerText);
        }
    })
})

/** Menu Icon */

function toggleButton(status) {
    if (status === "open") {
        menuButton.classList.remove("hamburger-icon");
        menuButton.classList.add("close-icon");
        showMenu()
    } else if (status === "close") {
        menuButton.classList.remove("close-icon");
        menuButton.classList.add("hamburger-icon");
        hideMenu()
    }
}

/** Menu */

function showMenu() {
    menu.classList.add("show-menu");
    menu.classList.remove("hide-menu");
}

function hideMenu() {
    menu.classList.add("hide-menu");
    menu.classList.remove("show-menu");
}

/** Accordions */

function accordion(name) {
    switch (name) {
        case "Product":
            /* e.target.classList.add("rotate-arrow"); */
            accordions.forEach(dropdown => {
                if (dropdown.classList.contains("hamburger-menu__product__dropdown") &&
                    dropdown.classList.contains("hide-accordion")) {
                        dropdown.previousElementSibling.classList.add("rotate-arrow")
                    dropdown.classList.add("show-accordion");
                    dropdown.classList.remove("hide-accordion");

                } else {
                    dropdown.previousElementSibling.classList.remove("rotate-arrow")
                    dropdown.classList.remove("show-accordion");
                    dropdown.classList.add("hide-accordion");
                }
            })
            break;
        case "Company":
            accordions.forEach(dropdown => {
                if (dropdown.classList.contains("hamburger-menu__company__dropdown") &&
                    dropdown.classList.contains("hide-accordion")) {
                        dropdown.previousElementSibling.classList.add("rotate-arrow")
                    dropdown.classList.add("show-accordion");
                    dropdown.classList.remove("hide-accordion");
                } else {
                    dropdown.previousElementSibling.classList.remove("rotate-arrow")
                    dropdown.classList.remove("show-accordion");
                    dropdown.classList.add("hide-accordion");
                }
            })
            break;
        case "Connect":
            accordions.forEach(dropdown => {
                if (dropdown.classList.contains("hamburger-menu__connect__dropdown") &&
                    dropdown.classList.contains("hide-accordion")) {
                        dropdown.previousElementSibling.classList.add("rotate-arrow")
                    dropdown.classList.add("show-accordion");
                    dropdown.classList.remove("hide-accordion");
                } else {
                    dropdown.previousElementSibling.classList.remove("rotate-arrow")
                    dropdown.classList.remove("show-accordion");
                    dropdown.classList.add("hide-accordion");
                }
            })
            break;

        default:
            break;
    }
}