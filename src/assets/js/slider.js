var mySwiper = new Swiper('.swiper-courses', {
	slidesPerView: 1,
	spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1000: {
				slidesPerView: 2,
		},
	}
})

var mySwiper = new Swiper('.swiper-events', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.next-events',
    prevEl: '.prev-events',
	},
	breakpoints: {
		320: {
			spaceBetween: 5,
		},
	}
	
})

var mySwiper = new Swiper('.swiper-review', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
	},
	pagination: {
		el: '.pagination-review',
		clickable: true,
  },
	breakpoints: {
		1000: {
				slidesPerView: 2,
		},
	}
})

var mySwiper = new Swiper('.swiper-news', {
	loop: true,
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var mySwiper = new Swiper('.swiper-video', {
	slidesPerView: 1,
	spaceBetween: 62,
	loop: true,
  navigation: {
    nextEl: '.next-video',
    prevEl: '.prev-video',
	},
	breakpoints: {
		992: {
				centeredSlides: true,
				slidesPerView: 1.8,
		},
	}
})

var mySwiper = new Swiper('.swiper-video-two', {
	slidesPerView: 1,
	spaceBetween: 62,
	loop: true,
  navigation: {
    nextEl: '.next-video-two',
    prevEl: '.prev-video-two',
	},
	breakpoints: {
		992: {
				centeredSlides: true,
				slidesPerView: 1.8,
		},
	}
})