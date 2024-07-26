alert("connected")

const nav = document.querySelector(".nav_links");
const openNavBtn = document.querySelector(".open")
const closeNavBtn = document.querySelector(".close")
const openNav = () => {
    nav.style.display = 'flex'
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
}

const closeNav = () => {
    nav.style.display = 'none'
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
}

openNavBtn.addEventListener("click", openNav)
closeNavBtn.addEventListener("click", closeNav)
