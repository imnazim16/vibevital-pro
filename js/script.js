"use strict";

$('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.test-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
			},
		},
		// {
		// 	breakpoint: 500,
		// 	settings: {
		// 		arrows: fasle,
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		infinite: true,
		// 	},
		// },
	],
});  

// Menue Bar
const openMenueBar = document.querySelector(".menu-bar");
const closeMenueBar = document.querySelector(".close-menu");
const menueBar = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");

openMenueBar.addEventListener("click", ()=>{
    menueBar.classList.add("active");
    overlay.classList.add("active");
})

closeMenueBar.addEventListener("click", ()=>{
    menueBar.classList.remove("active");
    overlay.classList.remove("active");
})

overlay.addEventListener("click", ()=>{
    menueBar.classList.remove("active");
    overlay.classList.remove("active");
})