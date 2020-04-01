


$(document).ready(function(){
	

	$('.lazy').Lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		effectTime:300, //duration
		throttle:1000,//delay
		//delay: 2000,
		visibleOnly: true,
		onError: function(element) {
			console.log('lazy error loading' + element.data('src'));
		},
		beforeLoad: function(element) {
			// Create virtual img to set imgs src src
			pureLazyfocusepointer(element);
		},
		afterLoad(element){
			element.parent('.focuspoint').delay(500).focusPoint();
			element.addClass('lazied');
		},
		onFinishedAll(){
			console.log('img Complete');
		},
	});     

	function pureLazyfocusepointer(target){
		var img = new Image();
		img.src = target.data('src');
		var target_focuspoint = target.parent('.focuspoint');
		$(target_focuspoint).attr({
			'data-focus-x':"0.00",
			'data-focus-y':"0.00",
			'data-image-w':img.width,
			'data-image-h':img.height,
		});
	}




//研究所專區專用
var SubjectListMajor = new Swiper('#SubjectListMajor', {
	slidesPerView: 'auto',
	speed:400,
	grabCursor : true,
	allowTouchMove: true,
	breakpoints: { 
		601: {
			initialSlide :1,
			centeredSlides :true,
		},
	},
});
var SubjectListMinor = new Swiper('#SubjectListMinor', {
	slidesPerView: 'auto',
	speed:400,
	grabCursor : true,
	allowTouchMove: true,
	breakpoints: { 
		601: {
			initialSlide :1,
			centeredSlides :true,
		},
	},
});
var SubjectListMobile = new Swiper('#SubjectListMobile', {
	slidesPerView: 'auto',
	speed:400,
	grabCursor : true,
	allowTouchMove: true,
	breakpoints: { 
		601: {
			initialSlide :1,
			centeredSlides :true,
		},
	},
});




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

var video_swiper = new Swiper('.video-swiper', {
	allowTouchMove: true,
	slidesPerView: 1,
	grabCursor: true,
	effect: 'fade',
	direction: 'vertical',
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 1//可視block的預載入數量,
		},
});

var intro_swiper = new Swiper('.intro-swiper', {
	allowTouchMove: true,
	slidesPerView: 1,
	grabCursor: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	controller: {
		control: video_swiper,
		inverse: false,
		by: 'slide',
	},
	pagination: {
		el: '.swiper-pagination',
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

function NavHide(){
	$('#SubjectNav').delay(400).hide(0);
	$('#NavMask').fadeOut(100);
	$('#SubjectNavBody').slideUp(100);
};

function NavShow(){
	$('#SubjectNav').show();
	$('#SubjectNavBody').delay(100).slideDown(150);
	$('#NavMask').delay(100).fadeIn(100);
};

$('#SubjectNavTrigger').click(function(){
	if($(this).hasClass('closeable')){
		NavHide();
		$(this).removeClass('active closeable ');
	}else{
		NavShow();
		$(this).addClass('active closeable');
	}
});

$('#NavClose , #NavMask').click(function(){
	$('#SubjectNavTrigger').removeClass('active closeable');
	NavHide();
});


var GraduateDetailTabListSwiper = new Swiper('#GraduateDetailTabListSwiper', {
	slidesPerView: 'auto',
	speed:400,
	grabCursor : true,
	allowTouchMove: true,
	breakpoints: { 
		601: {
			initialSlide :1,
			centeredSlides :true,
		},
	},
});

// $('#SubjectNav').click(function(){
	
// })

var tabBoxAction = {

	TabSwitcher: function (tabEl){
		$('.tab_box li').removeClass('active');
		$(tabEl).addClass('active');
		var triggerId ='#' +  $(tabEl).attr('data-cid');
		$('.course_information').hide(300);
		$(triggerId).show(400);
	},

	CourseNext: function (){
		var tabActiveThis = $('.tab_item.active');
		var tabActiveNext = $('.tab_item.active').next();
		tabActiveNext.addClass('active');
		
		if(tabActiveNext.length == 0){
			$('.tab_box li:first').addClass('active');
		}
		tabActiveThis.removeClass('active');
		var tabActiveThisNew = $('.tab_item.active');
		var triggerId ='#' +  $(tabActiveThisNew).attr('data-cid');
		$('.course_information').hide(300);
		$(triggerId).show(400);
	},

}



//文章斷點
var info_content_len = 110;
$('.info_content').each(function(i){
	if($(this).text().length>info_content_len){
		$(this).attr("title",$(this).text());
		var thistext=$(this).text().substring(0,info_content_len-1)+"...";
		$(this).text(thistext);
	};
});


});
