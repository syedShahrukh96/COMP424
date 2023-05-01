let searchBar = document.querySelector('.search-bar-container');
let searchBtn = document.querySelector('#search-btn');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    console.log("search button");
});


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







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


