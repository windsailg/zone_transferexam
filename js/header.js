
   var GORecommenderCourseSwipers;		
	
window.onload = function () {

	// $(document).ready(function (){



		try {
			SwiperInit();
		} catch (e) {
			SwiperInit();
		}

		function SwiperInit(){

			GORecommenderCourseSwipers = new Swiper('#GORecommenderCourseSwiper', {
				allowTouchMove: true,
				slidesPerView: 'auto',
				centeredSlides: false,
				spaceBetween: 18,
				grabCursor: true,
				followFinger: false,
				speed: 250,
				loop: false,
				autoplay: {
					delay: 10000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.recommender_swiper_next',
					prevEl: '.recommender_swiper_prev',
				},
				breakpoints: {
					1300: {
						slidesPerView: 'auto',
						centeredSlides: true,
					},
					640: {
						slidesPerView: 'auto',
						centeredSlides: true,
					},
				},
			});

		}

		$('.sn-folder').click(function (event) {
			event.preventDefault();
			var thistarget = $(this).attr('href');
			var thisname = $(this).find('span');
			if ($(thistarget).css("display") == "none") {
				$(thistarget).slideDown();
				$(thisname).html('<i class="fa fa-caret-down" ></i>');
			} else {
				$(thistarget).slideUp();
				$(thisname).html('<i class="fa fa-caret-right" ></i>');
			}
			return false;
		});

			/*手機版展開動作*/
		function openSearch() {
			$('#searchBox').fadeToggle(300);
		};

		$('#openSearch').click(function () {
			openSearch();
		})

		$('.login-btn').click(function () {
			$('#searchBox').fadeOut(300);
		});
		$('#gonavopen').on('click tap', function () {
			$('.sidenav').fadeToggle(80);
			$('#goSidenav-mask').fadeToggle(100);
			$('#searchBox').fadeOut(300);
		});
		$('#goSidenav-mask').on('click tap', function () {
			$('.sidenav').fadeToggle(80);
			$('#goSidenav-mask').fadeToggle(100);
			$('#searchBox').fadeOut(300);
		});
		$('#gonavclose').on('click tap', function () {
			$('.sidenav').fadeToggle(80);
			$('#goSidenav-mask').fadeToggle(100);
			$('#searchBox').fadeOut(300);
		});

		//table HeaderList下拉選單
		$('.nav-dropdown').hide(1);
		var itemThis = 0;
		$('.dropdownList .navs_main_links').click(function () {
			$('.nav-dropdown').fadeOut(200);
			var drops = $(this).attr("href");

			if (itemThis == drops) {
				itemThis = 0;
				$(drops).fadeOut(100);
				$('#goSListMask').fadeOut(200);
			} else {
				itemThis = drops;
				$(drops).fadeIn(100);
				$('#goSListMask').fadeIn(200);
			}
		});
		$('.nav-dropdown a').click(function () {
			itemThis = 0;
			$('#goSListMask').fadeOut(200);
			$('.nav-dropdown').hide(1);
		});

		function closeList() {
			itemThis = 0;
			$('#goSListMask').fadeOut(200);
			$('.nav-dropdown').hide(1);
		};

		$('#goSListMask').click(function () {
			closeList();
		})

		$('.tab_box .tab_item').click(function () {
			TabToggleFunc();
		});

		function TabToggleFunc() {
			var item = $('.tab_item');
			item.addClass('unactive');
			setTimeout(() => {
				item.removeClass('unactive');
			}, 600);
			$('#Recommender').toggleClass('oncollapse');
			$('#Collapser').toggleClass('active');
		}
		
		var windowTop = $(this).scrollTop();
		var pageHeight = $(document).height();
		var windowHeight = $(this).height();
		if (windowTop >= 200) {
			$('#SkylightLinkMobile').addClass('onhide');
		} else {
			$('#SkylightLinkMobile').removeClass('onhide');
		}

		var ScrollTimer ;
		$(window).scroll(function () {

			$('#GoTopAndBottomButton').show();
			ScrollTimer = window.setTimeout(function () {
				windowTop = $(this).scrollTop() + 10;
				pageHeight = $(document).height();
				windowHeight = $(this).height();
				//a + c > b
				if (windowTop + windowHeight >= pageHeight) {
					$('#Recommender').addClass('oncollapse');
					$('#Collapser').addClass('active');
				}
				//Skylight Mobile ScrollHide Function
				if (windowTop >= 200) {
					$('#SkylightLinkMobile').addClass('onhide');
				} else {
					$('#SkylightLinkMobile').removeClass('onhide');
				}



				
				//算出卷軸距離文件底部的高度
				var OnScrolltoBottomHeight = $(document).height() - $(window).height() - $(window).scrollTop();
				if (OnScrolltoBottomHeight <= 400) {
					$('#GoTopAndBottomButton').html('<i class="fas fa-arrow-up"><span class="gotop_gobottom_deco gotop "></span></i>')
				} else {
					$('#GoTopAndBottomButton').html('<i class="fas fa-arrow-down"><span class="gotop_gobottom_deco gobotton"></span></i>')
				}
			}, 200)
		});

		//Go top Button Click Func
		$('#GoTopAndBottomButton').click(function (){
			$(this).addClass('unactive');
			$('html , body').css({
				'scroll-behavior': 'unset',
			});
			setTimeout(() => {
				$(this).removeClass('unactive');
				$('html , body').css({
					'scroll-behavior': 'smooth',
				});
			}, 1500);
			var CheckScrolltoBottomHeight = $(document).height() - $(window).height() - $(window).scrollTop();
			if (CheckScrolltoBottomHeight <= 400) {
				$('html, body').animate({
					scrollTop: $('html').offset().top
				}, {
					duration: 1000, easing: "easeInOutQuint"
				});
			} else {
				$('html, body').animate({
					scrollTop: $(document).height() - $(window).height()
				}, {
					duration: 1000, easing: "easeOutQuint"
				});
			}


		});

	}
