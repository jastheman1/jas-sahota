const contact = document.querySelector(".contact");
const contactInfo = document.getElementById("contact-info");

contact.addEventListener("click", toggleContactInfo);

function toggleContactInfo(){
    contactInfo.classList.toggle("display-contact-info");
}

const button = document.getElementById("button")
const banner = document.querySelector(".know-more");
const thanks = document.querySelector(".text-area");

button.addEventListener("click", popUp);

function popUp(){
    banner.classList.toggle("display-banner");
    thanks.classList.toggle("hide-text");
}