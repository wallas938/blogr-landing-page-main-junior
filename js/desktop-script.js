const btns = document.querySelectorAll(".dropdown-container");
const dropdowns = document.querySelectorAll(".dropdown");

let isProductDropdownDisplayed = false;
let isCompanyDropdownDisplayed = false;
let isConnectDropdownDisplayed = false;

btns.forEach(node => {
    node.addEventListener("mouseover", function (e) {
        const target = e.target;
        const parent = target.parentElement.className;
        const dropdown = node.children[1];
        if (target.tagName === "A") {
            dropdown.classList.remove("hide-dropdown");
            dropdown.classList.add("show-dropdown");
            if (parent === "product") {
                isProductDropdownDisplayed = true;
            } else if (parent === "company") {
                isCompanyDropdownDisplayed = true;
            } else if (parent === "connect") {
                isConnectDropdownDisplayed = true;
            }
        }
    }, false);

    node.addEventListener("mouseleave", function (e) {
        const target = e.target;
        const parent = target.parentElement.className;
        const dropdown = node.children[1];
        setTimeout(() => {
            if (!target.classList.contains("dropdown") || !target.classList.contains("link")) {
                dropdown.classList.remove("show-dropdown");
                dropdown.classList.add("hide-dropdown");
            } 
        }, 300)
    }, false)
});