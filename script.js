var menubar = document.querySelector('#menu')
var navbar = document.querySelector('#navbar')

menubar.onclick = () => {
    navbar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}