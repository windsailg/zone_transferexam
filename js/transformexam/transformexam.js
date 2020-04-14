


$(document).ready(function(){
	

var student_experience_slider = new Swiper('.student-experience-slider', {
	allowTouchMove: false,
	effect : 'fade',
	loop:true,
});

var student_avatar_slider = new Swiper('.student-avatar-slider', {
	allowTouchMove: true,

	spaceBetween:30,
	effect : 'fade',
	loop:true,
	centeredSlides: true,
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 1//可視block的預載入數量,
		},
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	controller: {
		control: student_experience_slider,
		inverse: false,
		by: 'slide',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

	on:{
		slideChange: function(){
			var sai =this.realIndex + 1;
			$('.pager_number').delay(500).html(sai)
		},
		}, 
});


$('.tab_item').click(function(){
	var tabEl = this;
	tabBoxAction.TabSwitcher(tabEl);
	setTimeout(() => {
	}, 500);
});

$('#Course_next').click(function(){
	tabBoxAction.CourseNext();
	setTimeout(() => {
	}, 500);
});

NavHide();








});
