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
    searchInput.value = "naber aşkım ;) - dogukan";
});