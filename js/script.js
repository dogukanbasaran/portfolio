const navList = document.querySelector("nav ul");
const mobileMenu = document.querySelector("header #btn-menu");
const searchBtn = document.querySelector("nav ul .search-box #btn-search");
const searchInput = document.querySelector("nav ul .search-box #input-search");

const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.style.display = "none";
footer.style.display = "none";

const userInput = document.querySelector("#input-user");

userInput.addEventListener("keypress", (e) => {
    if(userInput.value === "hi" && e.key === "Enter"){
        header.style.display = "block";
    }
})

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