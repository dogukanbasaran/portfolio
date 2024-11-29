const navList = document.querySelector("nav ul");
const mobileMenu = document.querySelector("header button");

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