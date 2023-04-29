let searchBar = document.querySelector('.search-bar-container');
let searchBtn = document.querySelector('#search-btn');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');





window.onscroll = () => {
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    console.log("Menu-Bar");
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    console.log("search button");
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    console.log("Login button");
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
    console.log("login Close Button");
});
