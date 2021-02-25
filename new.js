const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

/* Toggle mobile menu */
function toggleMenu() {

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // lets get some burgers (REMOVE LATER TO NOT INJECT HTML)
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    }

    else {
        menu.classList.add("active");

        // adds the close icon 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

function closeMenu() {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.classList.contains("active")) {
        menu.classList.remove("active");
    }
}

toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeMenu, false);