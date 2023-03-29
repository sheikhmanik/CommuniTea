let Shop = document.getElementById("Shop");
let sideMenu = document.getElementById("sideMenu");
Shop.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
});

let sideMenuClose = document.getElementById("sideMenuClose");
sideMenuClose.addEventListener("click", () => {
    sideMenu.classList.add("hidden");
});