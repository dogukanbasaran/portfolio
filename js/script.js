const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const text = document.querySelector("#home h1");
const strongText = document.querySelector("#home h1 strong");
const contactBtn = document.querySelector("#home button");

window.addEventListener("load", () => {
    if(window.location.toString().includes("index")){
        header.style.display = "none";
        footer.style.display = "none";
        body.style.background = `var(--bgTerminal)`;
        strongText.style.color = "#000";
    }
});

const navList = document.querySelector("nav ul");
const mobileMenu = document.querySelector("header #btn-menu");
const searchBtn = document.querySelector("nav ul .search-box #btn-search");
const searchInput = document.querySelector("nav ul .search-box #input-search");


navList.style.display = "none";

mobileMenu.addEventListener("click", () => {
    if(navList.style.display == "none"){
        navList.style.display = "block";
        mobileMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
    else{
        navList.style.display = "none";
        mobileMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    };
});

searchBtn.addEventListener("click", () => {
    searchInput.focus();
});

const userInput = document.querySelector("#input-user");

userInput.addEventListener("keypress", (e) => {
    if(userInput.value === "hi" && e.key === "Enter"){
        userInput.style.display = "none";
        header.style.display = "block";
        footer.style.display = "block";
        body.style.background = `var(--bgColor)`;
        text.style.color = `var(--txtColor)`;
        contactBtn.style.display = "block";
    }
})