const btns = document.querySelectorAll(".dropdown-container");
const dropdowns = document.querySelectorAll(".dropdown");
const productDropdwon = document.querySelector(".product__dropdown");
const companyDropdwon = document.querySelector(".company__dropdown");
const connectDropdwon = document.querySelector(".connect__dropdown");

let isProductDropdownDisplayed = false;
let isCompanyDropdownDisplayed = false;
let isConnectDropdownDisplayed = false;

let isProductDropdownTargeted = false;
let isCompanyDropdownTargeted = false;
let isConnectDropdownTargeted = false;

btns.forEach(container => {
    container.addEventListener("mouseover", function (e) {
        const target = e.target;
        const parent = target.parentElement;
        const dropdown = container.children[1];
        const sibling = dropdown.previousElementSibling;
        dropdown.classList.remove("hide-dropdown");
        dropdown.classList.add("show-dropdown");
        sibling.classList.add("rotate-arrow");
        const parentName = getDropdownParent(parent);
        setDropdownDisplayStatus(parentName);
    }, false);

    container.addEventListener("mouseleave", function (e) {
        setTimeout(() => {
            if (!isProductDropdownTargeted && isProductDropdownDisplayed) {
                productDropdwon.previousElementSibling.classList.remove("rotate-arrow");
                productDropdwon.classList.remove("show-dropdown");
                productDropdwon.classList.add("hide-dropdown");
            }

            if (!isCompanyDropdownTargeted) {
                companyDropdwon.previousElementSibling.classList.remove("rotate-arrow");
                companyDropdwon.classList.remove("show-dropdown");
                companyDropdwon.classList.add("hide-dropdown");
            }

            if (!isConnectDropdownTargeted) {
                connectDropdwon.previousElementSibling.classList.remove("rotate-arrow");
                connectDropdwon.classList.remove("show-dropdown");
                connectDropdwon.classList.add("hide-dropdown");
            }
        }, 200)
    }, false)
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseover", function (e) {
        if (dropdown.classList.contains("product__dropdown")) {
            isProductDropdownTargeted = true;
        } else if (dropdown.classList.contains("company__dropdown")) {
            isCompanyDropdownTargeted = true;
        } else if (dropdown.classList.contains("connect__dropdown")) {
            isConnectDropdownTargeted = true;
        }
    });
    dropdown.addEventListener("mouseleave", function (e) {
        if (dropdown.classList.contains("product__dropdown")) {
            isProductDropdownDisplayed = false;
            isProductDropdownTargeted = false;
            dropdown.classList.remove("show-dropdown");
            dropdown.classList.add("hide-dropdown");
        } else if (dropdown.classList.contains("company__dropdown")) {
            isCompanyDropdownDisplayed = false;
            isCompanyDropdownTargeted = false;
            dropdown.classList.remove("show-dropdown");
            dropdown.classList.add("hide-dropdown");
        } else if (dropdown.classList.contains("connect__dropdown")) {
            isConnectDropdownDisplayed = false;
            isConnectDropdownTargeted = false;
            dropdown.classList.remove("show-dropdown");
            dropdown.classList.add("hide-dropdown");
        }
    })
})

function getDropdownParent(element) {
    if (element.classList.contains("product")) {
        return "product";
    } else if (element.classList.contains("company")) {
        return "company";
    } else if (element.classList.contains("connect")) {
        return "connect";
    }
}

function setDropdownDisplayStatus(name) {
    if (name === "product") {
        isProductDropdownDisplayed = true;
    } else if (name === "company") {
        isCompanyDropdownDisplayed = true;
    } else if (name === "connect") {
        isConnectDropdownDisplayed = true;
    }
}

function hideDropdown(dropdown) {

}