let searchBar = document.querySelector('.search-bar-container');
let searchBtn = document.querySelector('#search-btn');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

const submitBtn = document.querySelector('#submit-btn');



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

    //login page
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    console.log("Login button");
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
    console.log("login Close Button");
});


const form = document.querySelector('#search-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission behavior
  const placeName = document.querySelector('#place-name').value;
  const adults = document.querySelector('#adults').value;
  const childrens = document.querySelector('#children').value;
  const arrivalDate = document.querySelector('#checkin').value;
  const leavingDate = document.querySelector('#checkout').value;
  const url = `https://www.airbnb.com/s/${placeName}/homes?adults=${adults}&checkin=${arrivalDate}&checkout=${leavingDate}&children=${childrens}`;
  window.open(url, '_blank'); // open URL in a new tab/window
});


// For video in home page
const videoSlider = document.querySelector("#video-slider");
const videoControls = document.querySelectorAll(".vid-btn");
let index = 0;

function playNextVideo() {
  videoSlider.src = videoControls[index].getAttribute("data-src");
  index = (index + 1) % videoControls.length;
}

// Call playNextVideo function every 7 seconds
setInterval(playNextVideo, 7000);



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3175a60233msh10bd93a81a5f8b0p171adfjsnd5e2df15191d',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
   
	async function searchPlace(){
		const searchText = document.getElementById("search-bar").value;
		localStorage.setItem('placeName',searchText);
		const res = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${searchText}&limit=4`, options)
		.then(response => response.json());
		const firstLocationId = res.data[0].result_object.location_id;
		const places = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${firstLocationId}&limit=6`, options)
			.then(response => response.json());
			console.log(places);
			
			localStorage.setItem('apiData',JSON.stringify(places.data));
			window.location.href= 'place.html';
			//showData();
			
}