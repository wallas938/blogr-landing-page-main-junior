const btns = document.querySelectorAll(".desktop-nav__left > div > a");
const dropdowns = document.querySelectorAll(".dropdown");

let isProductDropdownDisplayed = false;
let isCompanyDropdownDisplayed = false;
let isConnectDropdownDisplayed = false;

btns.forEach(node => {
    node.addEventListener("mouseover", function (e) {
        const target = e.target;
        const parent = target.parentElement.className;
        target.nextElementSibling.classList.remove("hide-dropdown");
        target.nextElementSibling.classList.add("show-dropdown");
        /* switch (parent) {
            case "product":
                isProductDropdownDisplayed = true;
                break;
            case "company":
                isCompanyDropdownDisplayed = true;
                break;
            case "connect":
                isConnectDropdownDisplayed = true;
                break;
            default:
                break;
        } */
    });

    node.addEventListener("mouseout", function (e) {
        const target = e.target;
        const parent = target.parentElement.className;

        const timeout = setTimeout(() => {
            switch (parent) {
                case "product":
                    setTimeout(() => {
                        if (!isProductDropdownDisplayed) {
                            target.nextElementSibling.classList.remove("show-dropdown");
                            target.nextElementSibling.classList.add("hide-dropdown");
                            console.log("removing...");
                        } else {
                            console.log("still displayed");
                        }
                    }, 1000);
                    break;
                case "company":
                    setTimeout(() => {
                        if (!isCompanyDropdownDisplayed) {
                            target.nextElementSibling.classList.remove("show-dropdown");
                            target.nextElementSibling.classList.add("hide-dropdown");
                        }
                    }, 300);
                    break;
                case "connect":
                    setTimeout(() => {
                        if (!isConnectDropdownDisplayed) {
                            target.nextElementSibling.classList.remove("show-dropdown");
                            target.nextElementSibling.classList.add("hide-dropdown");
                            isConnectDropdownDisplayed = false;
                        }
                    }, 300);
                    break;
                default:
                    break;
            }
        }, 1500)
    })
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseover", function (e) {
        const target = e.target;
        if (target.classList.contains("dropdown")) {
            target.classList.add("show-dropdown");
            target.classList.remove("hide-dropdown");
            switch (target.className) {
                case "product__dropdown":
                    isProductDropdownDisplayed = true;
                    break;
                case "company__dropdown":
                    isCompanyDropdownDisplayed = true;
                    break;
                case "connect__dropdown":
                    isConnectDropdownDisplayed = true;
                    break;
                default:
                    break;
            }
        }
    });

    dropdown.addEventListener("mouseout", function (e) {
        const target = e.target;
        if (target.classList.contains("dropdown")) {
            target.classList.remove("show-dropdown");
            target.classList.add("hide-dropdown");
            switch (target.className) {
                case "product__dropdown":
                    isProductDropdownDisplayed = false;
                    break;
                case "company__dropdown":
                    isCompanyDropdownDisplayed = false;
                    break;
                case "connect__dropdown":
                    isConnectDropdownDisplayed = false;
                    break;
                default:
                    break;
            }
        }
    });
})