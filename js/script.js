//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger

function showDropdownContent(id) {
	$(`#${id}`).toggleClass('show')
}

let elements = $('.modal-overlay, .modal');

$('.open-modal').click(function(){
  elements.addClass('active');
});

$('.close-modal').click(function(){
  elements.removeClass('active');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay, .modal')) {
		elements.removeClass('active');
	}
});
$('#owl-one').owlCarousel({
	loop:true,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
})
$('#owl-two').owlCarousel({
	margin:25,
	autoHeight:true,
	autoplay: true,
	loop:true,
	nav:true,
	dots:true,
	dotsEach:true,
	navText: ["<img src='image/arrow-left.svg'>", "<img src='image/arrow-right.svg'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:2
		}
	}
})

$('#owl-three').owlCarousel({
	margin:20,
	autoHeight:true,
	autoplay: true,
	loop:true,
	nav:true,
	dots:false,
	dotsEach:true,
	navText: ["<img src='image/arrow-left.svg'>", "<img src='image/arrow-right.svg'>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
})

$('#owl-four').owlCarousel({
	margin:25,
	autoHeight:true,
	autoplay: true,
	loop:true,
	nav:true,
	dots:true,
	dotsEach:true,
	navText: ["<img src='image/arrow-left.svg'>", "<img src='image/arrow-right.svg'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
})

$('#m-catalog-s').owlCarousel({
	margin:15,
	autoHeight:true,
	autoplay: true,
	loop:true,
	nav:true,
	dots:true,
	dotsEach:true,
	navText: ["<img src='image/arrow-left.svg'>", "<img src='image/arrow-right.svg'>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
})

$('#tile-s').owlCarousel({
	margin:15,
	autoHeight:true,
	autoplay: true,
	loop:true,
	nav:true,
	dots:true,
	dotsEach:true,
	navText: ["<img src='image/arrow-left.svg'>", "<img src='image/arrow-right.svg'>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:2
		},
		1000:{
			items:5
		}
	}
})