const links = document.querySelector(".nav_links");

const close = document.querySelector(".close")
const open = document.querySelector(".open");


// click and see items

function openMenu() {
    links.styles.display = "block"
}

function closeMenu() {
    links.style.display = "none"
    close.style.display = "none"
    open.style.display="flex"
}

open.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)



