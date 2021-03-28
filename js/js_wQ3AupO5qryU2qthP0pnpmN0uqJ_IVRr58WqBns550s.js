(function ($) {

// **************************************************************
// slideSwitch works with the Highlight roll for the News Type
// **************************************************************
function slideSwitch() {
//    alert("switching");
   var active = $('#block-views-highlights-block .views-row.active');

    if ( active.length == 0 ) {
        active = $('#block-views-highlights-block .views-row:last');
    }

    var next =  active.next().length ? active.next() : $('#block-views-highlights-block .views-row:first');

    active.addClass('last-active');

    next.css({opacity: 0.0});
    next.addClass('active');
    next.animate({opacity: 1.0}, 1000, function() {
        active.removeClass('active last-active').animate({opacity: 0.0}, 1000);
    });
}

// **************************************************************
// frontRollSlideSwitch works with the roll for the Highlight Type
// **************************************************************
function frontRollSlideSwitch() {
     var controlsNewSlide = 0;
     var dir = slideDirection;
//    alert("switching");
     // set variable for the number of the current slide
     if ( dir == "next" ) {
          controlsNewSlide = controlsCurrentSlide == controlsNumberSlides ? 1 : controlsCurrentSlide + 1;
     } else {
          controlsNewSlide = controlsCurrentSlide == 1 ? controlsNumberSlides : controlsCurrentSlide - 1;
     }

     var active = $('#block-views-highlights-front-roll-block .views-row:nth-child(' + controlsCurrentSlide + ')');
     var next =  $('#block-views-highlights-front-roll-block .views-row:nth-child(' + controlsNewSlide + ')');

     active.addClass('last-active');

     next.css({opacity: '0'});
     next.addClass('active');
     next.animate({opacity: '1'}, 1000, function() {
          active.removeClass('active last-active').animate({opacity: '0'}, 1000);
     });

// slide buttons
     var slideactive = $('#block-views-highlights-front-roll-block .buttons .slide-button:nth-child(' + controlsCurrentSlide + ')');
     var slidenext = $('#block-views-highlights-front-roll-block .buttons .slide-button:nth-child(' + controlsNewSlide + ')');
     slideactive.addClass('last-active');

     slidenext.addClass('active');
     slideactive.removeClass('active last-active');

     controlsCurrentSlide = controlsNewSlide;
}



function createCookie(name,value,days) {
     if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
     } else {
          var expires = "";
     }
     document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
}

function eraseCookie(name) {
     createCookie(name,"",-1);
}

function hackXRFLanguages() {
//     alert("language hack in progress");

     //     initialize menu;
//     $("#xrf-project .menu-name-menu-project-menus a").addClass("english");

//          $("#menu-item-27 a").after('<a href="http://ipen-china.org/?l=zn" class="chinese">概述</a>'); /* overview */
//          $("#menu-item-26 a").after('<a href="http://ipen-china.org/results-summary/?l=zn" class="chinese">检测结果概要</a>'); /* Results summary */
//          $("#menu-item-22 a").after('<a href="http://ipen-china.org/products-tested/?l=zn" class="chinese">受检样品</a>'); /* Products tested */
//          $("#menu-item-25 a").after('<a href="http://ipen-china.org/methodology/?l=zn" class="chinese">检测方法</a>'); /* Methodology */
//          $("#menu-item-24 a").after('<a href="http://ipen-china.org/resources/?l=zn" class="chinese">相关资源</a>'); /* Resources */
//          $("#menu-item-23 a").after('<a href="http://ipen-china.org/press/?l=zn" class="chinese">媒体报道</a>'); /* Press */
//          $("#menu-item-68 a").after('<a href="http://ipen-china.org/about-ipen/?l=zn" class="chinese">关于IPEN</a>'); /* About IPEN */

$("#xrf-project .menu-name-menu-project-menus a").each(function() {
tmp = $(this).text();
//alert("menu item: " + tmp);
     if ( tmp == 'Overview') $(this).html("<span class='english'>Overview</span><span class='chinese'>概述</span><span class='russian'>Обзор</span>");
     if ( tmp == 'Results Summary') { $(this).html("<span class='english'>Results Summary</span><span class='chinese'>检测结果概要</span><span class='russian'>краткое изложение результатов</span>"); }
     if ( tmp == 'Products Tested') { $(this).html("<span class='english'>Products Tested</span><span class='chinese'>受检样品</span><span class='russian'>протестированные товары</span>"); }
     if ( tmp == 'Methodology') { $(this).html("<span class='english'>Methodology</span><span class='chinese'>检测方法</span><span class='russian'>методология</span>"); }
     if ( tmp == 'Resources') { $(this).html("<span class='english'>Resources</span><span class='chinese'>相关资源</span><span class='russian'>ресурсы</span>"); }
     if ( tmp == 'Press') { $(this).html("<span class='english'>Press</span><span class='chinese'>媒体报道</span><span class='russian'>пресса</span>"); }
     if ( tmp == 'About IPEN') { $(this).html("<span class='english'>About IPEN</span><span class='chinese'>关于IPEN</span><span class='russian'>об IPEN</span>"); }

     if ( tmp == 'Eastern Europe, Caucuses & Central Asia') { $(this).html("<span class='english'>Eastern Europe, Caucuses & Central Asia</span><span class='chinese'>东欧，高加索，中亚</span><span class='russian'>ВосточнаяЕвропа, КавказиЦентральнаяАзия</span>"); }
     if ( tmp == 'Eastern Europe, Caucuses and Central Asia') { $(this).html("<span class='english'>Eastern Europe, Caucuses & Central Asia</span><span class='chinese'>东欧，高加索，中亚</span><span class='russian'>ВосточнаяЕвропа, КавказиЦентральнаяАзия</span>"); }
     if ( tmp == 'China') { $(this).html("<span class='english'>China</span><span class='chinese'>中国</span><span class='russian'>Китай</span>"); }
     if ( tmp == 'Children’s products in China') { $(this).html("<span class='english'>Children’s products in China</span><span class='chinese'>儿童产品在中国</span><span class='russian'>ТоварыдлядетейвКитае</span>"); }
     if ( tmp == 'Hong Kong Kitchenware Study') { $(this).html("<span class='english'>Hong Kong Kitchenware Study</span><span class='chinese'>香港厨具研究</span><span class='russian'>Исследование кухонного оборудования в Гонг Конге</span>"); }
     if ( tmp == '香港研究') { $(this).html("<span class='english'>香港研究</span><span class='chinese'>香港研究</span><span class='russian'>Исследование, проведенное в Гонг Конге</span>"); }
     if ( tmp == 'Philippines') { $(this).html("<span class='english'>Philippines</span><span class='chinese'>菲律宾</span><span class='russian'>Филиппины</span>"); }
     if ( tmp == 'Children’s products') { $(this).html("<span class='english'>Children’s products</span><span class='chinese'>儿童产品</span><span class='russian'>товарыдлядетей</span>"); }
     if ( tmp == 'Children\'s Products with Low Levels of Concern') { $(this).html("<span class='english'>Children's Products with Low Levels of Concern</span><span class='chinese'>儿童产品的关注水平低</span><span class='russian'>Товарыдлядетей, невызывающиебеспокойства</span>"); }
     if ( tmp == 'Cosmetics') { $(this).html("<span class='english'>Cosmetics</span><span class='chinese'>化妆品</span><span class='russian'>Косметика</span>"); }
     if ( tmp == 'School Supplies') { $(this).html("<span class='english'>School Supplies</span><span class='chinese'>学校用品</span><span class='russian'>школьныепринадлежности</span>"); }
     if ( tmp == 'Impacts in Philippines') { $(this).html("<span class='english'>Impacts in Philippines</span><span class='chinese'>在菲律宾的影响</span><span class='russian'>Результаты проекта на Филиппинах</span>"); }
     if ( tmp == 'XRF Test Results') { $(this).html("<span class='english'>XRF Test Results</span><span class='chinese'>XRF测试结果</span><span class='russian'>результатыXRF-тестирования</span>"); }
});

     $("h2.panel-title:contains('Overview')").html("<span class='english'>Overview</span><span class='chinese'>概述</span><span class='russian'>Обзор</span>");
     $("h2.panel-title:contains('Results Summary')").html("<span class='english'>Results Summary</span><span class='chinese'>检测结果概要</span><span class='russian'>краткое изложение результатов</span>");
     $("h2.panel-title:contains('Products Tested')").html("<span class='english'>Products Tested</span><span class='chinese'>受检样品</span><span class='russian'>протестированные товары</span>");
     $("h2.panel-title:contains('Methodology')").html("<span class='english'>Methodology</span><span class='chinese'>检测方法</span><span class='russian'>методология</span>");
     $("h2.panel-title:contains('Resources')").html("<span class='english'>Resources</span><span class='chinese'>相关资源</span><span class='russian'>ресурсы</span>");
     $("h2.panel-title:contains('Press')").html("<span class='english'>Press</span><span class='chinese'>媒体报道</span><span class='russian'>пресса</span>");
     $("h2.panel-title:contains('About IPEN')").html("<span class='english'>About IPEN</span><span class='chinese'>关于IPEN</span><span class='russian'>об IPEN</span>");

//submenus
     $("h2.panel-title:contains('Eastern Europe, Caucuses & Central Asia Results')").html("<span class='english'>Eastern Europe, Caucuses & Central Asia</span><span class='chinese'>东欧，高加索，中亚</span><span class='russian'>ВосточнаяЕвропа, КавказиЦентральнаяАзия</span>");
     $("h2.panel-title:contains('China')").html("<span class='english'>China</span><span class='chinese'>中国</span><span class='russian'>Китай</span>");
     $("h2.panel-title:contains('Children’s products in China')").html("<span class='english'>Children’s products in China</span><span class='chinese'>儿童产品在中国</span><span class='russian'>ТоварыдлядетейвКитае</span>");
     $("h2.panel-title:contains('Hong Kong Kitchenware Study')").html("<span class='english'>Hong Kong Kitchenware Study</span><span class='chinese'>香港厨具研究</span><span class='russian'>Исследование кухонного оборудования в Гонг Конге</span>");
     $("h2.panel-title:contains('香港研究')").html("<span class='english'>香港研究</span><span class='chinese'>香港研究</span><span class='russian'>Исследование, проведенное в Гонг Конге</span>");
     $("h2.panel-title:contains('Philippines')").html("<span class='english'>Philippines</span><span class='chinese'>菲律宾</span><span class='russian'>Филиппины</span>");
     $("h2.panel-title:contains('Annex 2. Children’s products containing mercury')").html("<span class='english'>Annex 2. Children’s products containing mercury</span><span class='chinese'>Annex 2. Children’s products containing mercury</span><span class='russian'>Приложение 2. Товары для детей,содержащие ртуть</span>");
     $("h2.panel-title:contains('Annex 3. Children’s products containing arsenic')").html("<span class='english'>Annex 3. Children’s products containing arsenic</span><span class='chinese'>Annex 3. Children’s products containing arsenic</span><span class='russian'>Приложение 3. Товары для детей, содержащие мышьяк</span>");
     $("h2.panel-title:contains('Annex 4. Children’s products containing antimony')").html("<span class='english'>Annex 4. Children’s products containing antimony</span><span class='chinese'>Annex 4. Children’s products containing antimony</span><span class='russian'>Приложение 4. Товары для детей, содержащие сурьму</span>");
     $("h2.panel-title:contains('Children's Products with Low Levels of Concern')").html("<span class='english'>Children's Products with Low Levels of Concern</span><span class='chinese'>儿童产品的关注水平低</span><span class='russian'>Товарыдлядетей, невызывающиебеспокойства</span>");
//          $("#page-title:contains('Children’s products')").html("<span class='english'>Children’s products</span><span class='chinese'>儿童产品</span><span class='russian'>товарыдлядетей</span>");
     $("h2.panel-title:contains('Cosmetics')").html("<span class='english'>Cosmetics</span><span class='chinese'>化妆品</span><span class='russian'>Косметика</span>");
     $("h2.panel-title:contains('School Supplies')").html("<span class='english'>School Supplies</span><span class='chinese'>学校用品</span><span class='russian'>школьныепринадлежности</span>");
     $("h2.panel-title:contains('Impacts in Philippines')").html("<span class='english'>Impacts in Philippines</span><span class='chinese'>在菲律宾的影响</span><span class='russian'>Результаты проекта на Филиппинах</span>");
     $("h2.panel-title:contains('XRF Test Results')").html("<span class='english'>XRF Test Results</span><span class='chinese'>XRF测试结果</span><span class='russian'>результатыXRF-тестирования</span>");

//cities china
     $(".field-name-field-city a:contains('Beijing')").html("Beijing 北京");
     $(".field-name-field-city a:contains('Panjin')").html("Panjin 盘锦");
     $(".field-name-field-city a:contains('taobao')").html("www.taobao.com 淘宝网");
     $(".field-name-field-city a:contains('Chongqing')").html("Chongqing 重庆");
     $(".field-name-field-city a:contains('Lanzhou')").html("Lanzhou 兰州");
     $(".field-name-field-city a:contains('Shanghai')").html("Shanghai 上海");
     $(".field-name-field-city a:contains('Ha'erbin')").html("Ha'erbin 哈尔滨");
     $(".field-name-field-city a:contains('Tianjin')").html("Tianjin 东莞");
     $(".field-name-field-city a:contains('Dongguan')").html("Dongguan 北京");
     $(".field-name-field-city a:contains('Hefei')").html("合肥");
     $(".field-name-field-city a:contains('Nanjing')").html("Nanjing 南京");

//cities eecca
     $(".field-name-field-city a:contains('Aprelevka')").html("Aprelevka Апрелевка");
     $(".field-name-field-city a:contains('Kolomna')").html("Kolomna Коломна");
     $(".field-name-field-city a:contains('Moscow')").html("Moscow Москва");
     $(".field-name-field-city a:contains('Sochi')").html("Sochi Сочи");
     $(".field-name-field-city a:contains('Volgograd')").html("Volgograd Волгоград");

//elements
     $(".results .list_sb td.element").html("<span class='english'>Antimony</span><span class='chinese'>锑</span><span class='russian'>сурьма</span>: ");
     $(".results .list_ar td.element").html("<span class='english'>Arsenic</span><span class='chinese'>砷</span><span class='russian'>мышьяк</span>: ");
     $(".results .list_cd td.element").html("<span class='english'>Cadmium</span><span class='chinese'>镉</span><span class='russian'>кадмий</span>: ");
     $(".results .list_cr td.element").html("<span class='english'>Chromium</span><span class='chinese'>铬</span><span class='russian'>хром</span>: ");
     $(".results .list_pb td.element").html("<span class='english'>Lead</span><span class='chinese'>铅</span><span class='russian'>свинец</span>: ");
     $(".results .list_hg td.element").html("<span class='english'>Mercury</span><span class='chinese'>汞</span><span class='russian'>ртуть</span>: ");

//          $(".chinese").hide();
//          $(".english").show();
//          $(".russian").hide();

//          if ( $("#language").val() !== 'en' ) {
//               $(".english").hide();
//               $(".chinese").show();
//          } else {
//               $(".chinese").hide();
//               $(".russian").hide();
//          };

     var mylang = readCookie('xrfresultslang');

     if ( mylang !== null ) {
          // alert('have a cookie');
          if ( mylang == "zn" ) {
               $(".english").hide();
               $(".russian").hide();
               $(".chinese").show();
          } else if ( mylang == "ru" ) {
               $(".english").hide();
               $(".chinese").hide();
               $(".russian").show();
          } else {
               $(".chinese").hide();
               $(".russian").hide();
               $(".english").show();
          }
     } else {
          createCookie('xrfresultslang','en',7);
          $(".english").show();
     }

//     alert("language hack complete");
}

function ToggleNiceMenusforMobile () {
	var winWidth = $( window ).width();
	
	if ( winWidth < 813 ) { // 476
// 		console.log( "have small" );// debug
		// remove nice menus css, but add tmp class for replacement later
		$(".nice-menu-main-menu").addClass("nicemenuDisabled").removeClass("nice-menu-main-menu nice-menu nice-menu-down");
		$('.nicemenuULreset').removeAttr('style'); //style="display: none; visibility: hidden;" <--- removing this hard-coded junk from NiceMenus

		var sharpsButton = $('#sharps_donate_button');
		$('#sharps_donate_button').remove(); // wiggle
		$("#sharps_take_action_button").before( sharpsButton );
		
	} else {
// 		console.log( "have large" );// debug
		$(".nicemenuDisabled").addClass("nice-menu-main-menu nice-menu nice-menu-down").removeClass("nicemenuDisabled");
		$('.nicemenuULreset').attr('style',"display: none; visibility: hidden;");
	}
	
	if ( winWidth < 1220 ) {
		FixSHARPSVideoWidth();
	}
	
	
}

function FixSHARPSVideoWidth () {
// Without this correction, the video is not resizing with changes in the viewport size -- research use of object-fit as alternative
// 	console.log("adjusting movie size for viewport width");// debug
	var sharpsAspect = 0.563;
	var objWidth = $("#trailerposter").width();
	var objHeight = $("#trailerposter").height();
// 	var objWidth = $("#zone-content .content .field-item").width();
// 	var objHeight = Math.floor( objWidth * sharpsAspect );
	$("#sharps_movie iframe").attr( "width", objWidth + "px" );
	$("#sharps_movie iframe").attr( "height", objHeight + "px" );

	if ( objWidth < 1080 ) {
// 		$("slides1").unbind();
// 		$("c1-viewport").unbind();
// 		$("firstflex").unbind();
//		$("victims-slider").unbind();
		$("slides1").attr( "styles", "width: 100%; transition:none; transform: none;");
	}
}



// **********************************************************************
// *
// *	Immediate execution scripts -- document.ready()
// *
// *
// *
// *
// **********************************************************************
$(document).ready(function() {

//alert("HW");
     // Highlight switcher in the banner header -- note that this works with the News type version of this
          // wrap the view content with a DIV to allow all the content to slide together (previously was moving each separately -- aka "the hard way")
//     $('#block-views-highlights-block .views-row-1').addClass('active');
//     slideSwitch();
//    setInterval( slideSwitch, 7000 );

     // Highlight front roll
     enableSwitching = true;
     addControls = true;
     controlsCurrentSlide = 1; controlsNumberSlides = 1; // just init; num of slides set below
     slideDirection = "next"; // because, for some reason, my direction string is not getting passed to frontRollSlideSwitch("prev");
     if ( $('#block-views-highlights-front-roll-block') ) {
          // init
          $('#block-views-highlights-front-roll-block .views-row').append("<div class='text-background'></div>");
          if ( addControls ) {
               $('#block-views-highlights-front-roll-block .view-highlights-front-roll ').prepend("<div class='buttons'></div>");
               $('#block-views-highlights-front-roll-block .buttons').append("<ul class='slide-buttons'></ul>");
               $('#block-views-highlights-front-roll-block .buttons').append("<div class='arrow-buttons'></div>");
               $('#block-views-highlights-front-roll-block .arrow-buttons').append("<div class='arrow-button-left'></div>");
               $('#block-views-highlights-front-roll-block .arrow-buttons').append("<div class='arrow-button-right'></div>");
               $('#block-views-highlights-front-roll-block .arrow-buttons .arrow-button-left').text("<");
               $('#block-views-highlights-front-roll-block .arrow-buttons .arrow-button-right').text(">");
               $('#block-views-highlights-front-roll-block .arrow-buttons .arrow-button-left').click(function() {
                    clearInterval( slideInterval );
                    slideDirection = "prev";
                    frontRollSlideSwitch();
               });
               $('#block-views-highlights-front-roll-block .arrow-buttons .arrow-button-right').click(function() {
                    clearInterval( slideInterval );
                    slideDirection = "next";
                    frontRollSlideSwitch();
               });
               $( '#block-views-highlights-front-roll-block .views-row' ).each(function(){
                    $('#block-views-highlights-front-roll-block .slide-buttons').append("<li class='slide-button'>X</li>");
               });
               controlsNumberSlides = $('.slide-buttons .slide-button').length;
//               alert("num slides: " + controlsNumberSlides);
               $( '#block-views-highlights-front-roll-block .buttons .slide-button:last' ).addClass('active');

               // functions
               $('#block-views-highlights-front-roll-block').hover(
                    function() {
                         $(this).find('.arrow-buttons').animate( { opacity: 1 }, 400 );
                    },
                    function() {
                         $(this).find('.arrow-buttons').animate( { opacity: 0 }, 400 );
                    }
               );
          }
//          $( '#block-views-highlights-front-roll-block .views-row' ).each(function(){
//               something here;
//          });
          $( '#block-views-highlights-front-roll-block .views-row' ).click(function(){
//               gotoLink = $('#block-views-highlights-front-roll-block .views-field-field-related-items .field-name-title a').attr("href");
               gotoLink = $(this).find('.views-field-field-related-items .field-name-title a').attr("href");
//               alert(gotoLink);
               window.location.href = gotoLink;
          });

          controlsCurrentSlide = controlsNumberSlides; // set to last child so that row 1 is first slide displayed

          if ( enableSwitching ) {
               frontRollSlideSwitch();
               slideInterval = setInterval( frontRollSlideSwitch, 5000 );
          } else {
               clearInterval( slideInterval );
          }
     }

     // add multi-column on certain taxonomy views where there is more than one item -- main class is added in the view itself
     // this first solution would work if multicolumns respected divs
     if ( $(".views-taxonomy-terms").length !== 0 ) {
          if ( $(".views-taxonomy-terms .view-content").children().length > 1 ) {
               $(".views-taxonomy-terms .view-content").addClass("multicolumn-2");
               $(".views-taxonomy-terms .view-content .views-row").addClass("multicolumn-fix");
          }
     }
//      if ( $(".views-taxonomy-terms").length !== 0 ) {
//           if ( $(".views-taxonomy-terms .view-content").children().length > 1 ) {
//                $(".views-taxonomy-terms .view-content .views-row").addClass("fake-multicolumn-2");
//           }
//      }

     // Toggle Visibility function
     $('.toggle-visibility').click (function() {
          $(this).next().toggle('slow');
          $(this).toggleClass('expanded');
     });

     //     Documents language hack -- change text for document translations
     var tmpstr = "";
     if ( $('.node-document.view-mode-full .field-name-field-document tr').length > 0 ) {
          $(".field-name-field-document tr span.file a:contains('Arabic')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Arabic' ) ); });
          $(".field-name-field-document tr span.file a:contains('Amharic')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Amharic' ) ); });
          $(".field-name-field-document tr span.file a:contains('Chinese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Chinese' ) ); });
          $(".field-name-field-document tr span.file a:contains('Croatian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Croatian' ) ); });
          $(".field-name-field-document tr span.file a:contains('Czech')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Czech' ) ); });
          $(".field-name-field-document tr span.file a:contains('French')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'French' ) ); });
          $(".field-name-field-document tr span.file a:contains('Georgian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Georgian' ) ); });
          $(".field-name-field-document tr span.file a:contains('German')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'German' ) ); });
          $(".field-name-field-document tr span.file a:contains('Hindi')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Hindi' ) ); });
          $(".field-name-field-document tr span.file a:contains('Italian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Italian' ) ); });
          $(".field-name-field-document tr span.file a:contains('Japanese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Japanese' ) ); });
          $(".field-name-field-document tr span.file a:contains('Korean')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Korean' ) ); });
          $(".field-name-field-document tr span.file a:contains('Portuguese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Portuguese' ) ); });
          $(".field-name-field-document tr span.file a:contains('Russian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Russian' ) ); });
          $(".field-name-field-document tr span.file a:contains('Spanish')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Spanish' ) ); });
          $(".field-name-field-document tr span.file a:contains('Thai')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Thai' ) ); });
          $(".field-name-field-document tr span.file a:contains('Vietnamese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Vietnamese' ) ); });
     }
     if ( $('.node-document.view-mode-news_document .field-name-field-document .field-items').length > 0 ) {
          $(".field-name-field-document .field-item span.file a:contains('Arabic')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Arabic' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Amharic')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Amharic' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Chinese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Chinese' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Croatian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Croatian' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Czech')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Czech' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('French')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'French' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Georgian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Georgian' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('German')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'German' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Hindi')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Hindi' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Italian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Italian' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Japanese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Japanese' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Korean')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Korean' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Portuguese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Portuguese' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Russian')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Russian' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Spanish')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Spanish' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Thai')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Thai' ) ); });
          $(".field-name-field-document .field-item span.file a:contains('Vietnamese')").each( function() { langlabel = $(this).text(); $(this).text( GetLanguageName ( langlabel, 'Vietnamese' ) ); });
     }
     function GetLanguageName ( langlabel, lang ) {
		var arr = langlabel.split( lang );
		var result = "";

		switch ( lang ) {
          case 'Arabic':
          	langstr = "العربية (Arabic)"; break;
          case 'Amharic':
          	langstr = "አማርኛ (Amharic)"; break;
          case 'Chinese':
          	langstr = "中文 (Chinese)"; break;
          case 'Croatian':
          	langstr = "hrvatski jezik (Croatian)"; break;
          case 'Czech':
          	langstr = "čeština (Czech)"; break;
          case 'French':
          	langstr = "français (French)"; break;
          case 'Georgian':
          	langstr = "ქართული (Georgian)"; break;
          case 'German':
          	langstr = "Deutsch (German)"; break;
          case 'Hindi':
          	langstr = "हिंदी (Hindi)"; break;
          case 'Italian':
          	langstr = "italiano (Italian)"; break;
          case 'Japanese':
          	langstr = "日本語 (Japanese)"; break;
          case 'Korean':
          	langstr = "한국어 (Korean)"; break;
          case 'Portuguese':
          	langstr = "português (Portuguese)"; break;
          case 'Russian':
          	langstr = "русский (Russian)"; break;
          case 'Spanish':
          	langstr =  "español (Spanish)"; break;
          case 'Thai':
          	langstr =  "ไทย (Thai)"; break;
          case 'Vietnamese':
          	langstr =  "Tiếng Việt (Vietnamese)"; break;
          default:
          	langstr = lang; // just return input
        }

		for ( var i = 0; i < ( arr.length - 1); i++) {
			result = result + arr[i] + " " + langstr
		}
		result = result + " " + arr[ arr.length - 1 ];

     	return result;
     }

     //     XRF language hack
     if ( $("#xrf-project .menu-name-menu-project-menus a") ) {
          hackXRFLanguages();
     }
     // handler for language picker (HTML block in content -- as of 2013/03/13 this is in a Panels variant for Toxic Products)
     $("#lang-picker a").click(function() {

           if ( $(this).hasClass("zn") ) {
               $(".english").hide();
               $(".russian").hide();
               $(".chinese").show();
               createCookie('xrfresultslang','zn',7);
           } else if ( $(this).hasClass("ru") ) {
               $(".english").hide();
               $(".chinese").hide();
               $(".russian").show();
               createCookie('xrfresultslang','ru',7);
           } else {
               $(".chinese").hide();
               $(".russian").hide();
               $(".english").show();
               createCookie('xrfresultslang','en',7);
           }
     });

     // wrap photos with captions and links based on the elements available via TinyMCE image window
     if ( ( $('.photo-left').length > 0 ) || ( $('.photo-right').length > 0 ) || ( $('.photo-center').length > 0 ) ) {
//     if ( $(".page-node-3874") ) {
     	// do nothing
//     } else {
          $(".photo-left img[title]").wrap('<div class="photo-with-caption float-left"></div>');
          $(".photo-right img[title]").wrap('<div class="photo-with-caption float-right"></div>');
          $(".photo-center img[title]").wrap('<div class="photo-with-caption float-center"></div>');
          $("img[title].photo-left").wrap('<div class="photo-with-caption float-left"></div>');
          $("img[title].photo-right").wrap('<div class="photo-with-caption float-right"></div>');
          $("img[title].photo-center").wrap('<div class="photo-with-caption float-center"></div>');
          $(".photo-with-caption img[title]").addClass("img-with-caption");
          $(".photo-with-caption img[title]").after(function() {
               return '<p class="caption" style="width:' + Math.floor($(this).innerWidth()*.95) +'px">' + $(this).attr("title") + '</p>';
          });
          $("img[longdesc]").wrap(function() {
               if ( $(this).attr("longdesc").substring(0,7) == "http://" ) {
                    return '<a href="' + $(this).attr("longdesc") +'"></a>';
               } else {
                    return;
               }
          });
// 	}
     };

     // create page_TOC if style is present
     if ( $('.add-to-page-toc').length > 0  ) {
//     	if (window.console) console.log('adding TOC');
     		// add a=name links to headings
     		var pageTOCheadings =  [];

			$('.add-to-page-toc').before(function() {
				var r = $(this).text().trim();
				pageTOCheadings.push( r );
				
				return '<a name="' + r + '">';
			});
			
     		// add and build page TOC element
     		builtPageTOC = "";
     		for ( i = 0; i < pageTOCheadings.length; i++ ) {
     			builtPageTOC = builtPageTOC + '<li><a href="#' + pageTOCheadings[i] + '">' + pageTOCheadings[i] + '</a></li>';
     		};
     		builtPageTOC = '<div class="box-page-toc"><h2>On this page</h2><ul>' + builtPageTOC + '</ul></div>';
     		
     		$(".field-name-body:first-child").before( builtPageTOC );
          
     };
     
     if ( $('.addPopup').length > 0 ) {
		$(".addPopup").mouseenter(function() {
//alert("In Popup code");
			$(this).parent().find(".popup-info").fadeIn();
		});
		$(".cancelPopup").mouseleave(function() { /* add to wrapper */
//alert("In cancel code");
			$(".popup-info").fadeOut();
		});

     }
     
	// Add mobile menu -- these classes simply provide this JS easier access to elements and do not affect any of the existing styles
	//  NOTE: The ToggleNiceMenusforMobile() function manipulates the existence and properties of some of these elements to remove
	//         the issues related to NiceMenus function for mobile, and to restore them for larger viewports.
	$('.nice-menu-main-menu').before('<button class="nav-button">Toggle Navigation</button>');
	$('.nice-menu-main-menu').addClass('primary-nav');
	$('.nice-menu-main-menu ul').addClass('nicemenuULreset');
	$('.nicemenuULreset').removeAttr('style'); //style="display: none; visibility: hidden;" <--- removing this hard-coded junk from NiceMenus // debug
	
// console.log("before-script"); // debug
	// Since <button> added dynamically, must bind click using .delegate method (for JQuery 1.4.4 in D7 -- use ,.on for 1.7+)
	// NOTE that .on uses different order of arguments than .delegate
	// DEV NOTES
	// Ended up using Drupal.behaviors, which play more nicely with dynamic elements. However, despite correct z-index ordering, .primary-nav was receiving clicks
	// 		instead of .nav-button. This required a hack to change the z-index of .nav-button *after* its creation. Perhaps this is a Chrome bug?
	$('.nav-button').css("z-index","997");
	$('.primary-nav li').css("z-index","99");
Drupal.behaviors.cc_ipen_drupal = {
  attach: function (context, settings) {
    $('#trailerposter',context)
    	.mouseenter(function(){
			// console.log("enter watch movie");// debug
			$('img#trailerposter').attr("src", "/sites/default/files/clean-room-web-poster-wide-1108-over.jpg");
		 })
    	.mouseleave(function(){
			// console.log("leave watch movie");
			$('img#trailerposter').attr("src", "/sites/default/files/clean-room-web-poster-wide-1108-std.jpg");
		 }),
    $('.nav-button',context).click(function(){
		// console.log("nav button clicked");// debug
		$('.nav-button,.primary-nav').toggleClass('open');
     }),
    $('.primary-nav.nicemenuDisabled li.menuparent > a',context).click(function( e ){
		// console.log("primary nav a clicked");// debug
		e.preventDefault();
		$(this).addClass("clicked");
		if ( $('.nav-button').css("z-index") !== "997" ) {
// 			console.log("hit z-index test"); // debug // only perform this once, else any click on the menu will close it
			$('.nav-button,.primary-nav').toggleClass('open');
		};
//     }),
//     $('h2,h3',context).click(function(){
//       console.log("drupal heading clicked");
    });
  }
};
Drupal.attachBehaviors(document, Drupal.settings);

// console.log("after-script");// debug

	$( window ).resize(function() { // toggle if responsize
		// console.log("Handler for .resize() called.");// debug
		ToggleNiceMenusforMobile();
	});

	// console.log("checking window size.");// debug
	if ( $( window ).width() < 813 ) { // 476 call toggle if the window is already small
		// console.log("already small.");// debug
		$(".slides1").addClass("mobileflex");
		ToggleNiceMenusforMobile();
	};

	FixSHARPSVideoWidth(); // on document ready



	}); // end second ready function -- $(function () {} )


})(jQuery);






;
(function ($) {


	$(document).ready( function() {

// alert("ccimagewidget-script");

// For content types that accept multiple field images, add the ccimages class
	if ( $('.view-mode-full .field-name-field-image .field-item').length > 1 ) {
		$('.field-name-field-image').addClass('ccimages');
	};

// For elements that have a float class blended in (because of TinyMCE styles menu limitations), break out classes
	$('.ccimages-float-left').addClass('ccimages ccfloatleft');
	$('.ccimages-float-right').addClass('ccimages ccfloatright');

//////////////////////////////
//
// CC Image Widget (ccimagewidget)
//
//		Currently works upon unordered lists with class 'ccimages' and Drupal views with class 'ccimages'
//
//		Builds the workings of a slide show, including buttons to navigate. Note that there is no "Play" function; transitions require click events.
//
//////////////////////////////

if ( $('.ccimages').length > 0 ) {


	// global variables
	var settings = {
		slideWidth: 375 + 20,
		numThumbs: 3,
		thumbSize: 100
	}

	// initialization
	$('.ccimages').each( function () {
		//alert("hello ccimage world");
		var extraclass = '';
		if ( $(this).hasClass('ccfloatleft') || $(this).hasClass('ccfloatright') ) {
			extraclass = $(this).hasClass('ccfloatleft') ? 'ccfloatleft' : 'ccfloatright';
		}
		$(this).wrap('<div class="ccimagewidget ' + extraclass + '" />');
		$(this).wrap('<div class="ccimagewrapper" />');
		$(this).parent().append('<div class="caption" />');
		$(this).parent().append('<div class="thumbs" />');
		$(this).wrap('<div class="ccimagesframe" />');
	});
	$('.ccimagewidget .image-field-caption').addClass("slide-caption"); /* drupal views specific */
	// The next two selectors are basically identical, except that one deals with lists ('list-type') and the other deals with DIVs ('div-type), which is the common
	//		way that Drupal Views generates lists
	// ------- lists
	$('.ccimagewrapper li').each( function( index ) {
		var widget = $(this).parentsUntil('.ccimagewidget').parent().first();
		if ( $(this).is(':first-child') ) {		// create settings for each widget instance
			widget.data('widgetsettings', { idx_cur: index, idx_start: index, frame_count: 1, frame_cur: 0, captions: [] } );
			widget.addClass('list-type');
// 			console.log (widget);
		}
		$(this).addClass('slide item-' + index);
		var buttonHTML = '<div class="button item-' + index + '"><p>' + index + '</p>';
		$(this).parentsUntil('.ccimagewidget').find('.thumbs').append(buttonHTML);
		// create the thumbnail images
		var baseimagepath = $('.ccimagewidget li.slide.item-' + index + ' img').attr('src');	// get path to slide image upon with thumbnail is based
		var newpath = fixThumbPaths( baseimagepath, 'list-type' );
// 		alert("baseimagepath: " + baseimagepath);
		$('.ccimagewidget.list-type .thumbs .item-' + index).attr('style','background-image: url(' + newpath + ')');
// 		alert("newpath: " + newpath);
		// set captions
		widget.data('widgetsettings').captions.push( "blank caption" ); // set caption value to ensure each caption[index] has a value
		var newcaption = $(this).find('.slide-caption').html() ;
		if ( ( newcaption === undefined ) || ( newcaption === null ) ){
			var captionintitle = $('.ccimagewidget li.slide.item-' + index + ' img[title]').attr('title');
			if ( ( captionintitle === undefined ) || ( captionintitle === null ) ) {
				newcaption = "";
			} else {
				newcaption = captionintitle;
			}
		}
		widget.data('widgetsettings').captions[ index - widget.data('widgetsettings').idx_start ] = newcaption;
		changeCaption( widget, widget.data('widgetsettings').idx_start );
	});
	// ------- divs
	//  (drupal views specific)
	$('.ccimagewrapper .field-item').each( function( index ) {
		var widget = $(this).parentsUntil('.ccimagewidget').parent().first();
		if ( $(this).is(':first-child') ) {		// create settings for each widget instance
			widget.data('widgetsettings', { idx_cur: index, idx_start: index, frame_count: 1, frame_cur: 0, captions: [] } );
			widget.addClass('div-type');
		}
		$(this).addClass('slide item-' + index);
		var buttonHTML = '<div class="button item-' + index + '"><p>' + index + '</p>';
		$(this).parentsUntil('.ccimagewidget').find('.thumbs').append(buttonHTML);
		// create the thumbnail images
		var baseimagepath = $('.ccimagewidget div.slide.item-' + index + ' img').attr('src');	// get path to slide image upon with thumbnail is based
		var newpath = fixThumbPaths( baseimagepath, 'div-type' );
// 		alert("baseimagepath: " + baseimagepath);
		$('.ccimagewidget.div-type .thumbs .item-' + index).attr('style','background-image: url(' + newpath + ')');
// 		alert("newpath: " + newpath);
		widget.data('widgetsettings').captions.push( $(this).find('.slide-caption').html() );
		changeCaption( widget, widget.data('widgetsettings').idx_start );
	});
	// end
	$('.ccimagewrapper .ccimages').wrap('<div class="ccslidewrapper" />');
	$('.ccimagewrapper .caption').wrap('<div class="captionwrapper" />');
	$('.ccimagewrapper .thumbs').wrap('<div class="thumbwrapper" />');
	$('.ccimagewrapper .thumbs').wrap('<div class="thumbbuttonwrapper" />');
	if ( $('.ccimages').children().length > settings.numThumbs ) {
// 		alert("numThumbs exceeded");
		$('.ccimagewrapper .thumbwrapper').prepend('<div class="button thumb-prev" />');
		$('.ccimagewrapper .thumbwrapper').append('<div class="button thumb-next" />');
		$('.ccimagewrapper .thumbwrapper .thumb-prev').text("<");
		$('.ccimagewrapper .thumbwrapper .thumb-next').text(">");
	}
	$('.ccimagewrapper .ccimagesframe').prepend('<div class="button image-prev slide-control" />');
	$('.ccimagewrapper .ccimagesframe').append('<div class="button image-next slide-control" />');
	$('.ccimagewrapper .ccimagesframe .image-prev').text("<");
	$('.ccimagewrapper .ccimagesframe .image-next').text(">");
	// set current slide
	$('.ccimagewrapper ul.ccimages li:first-child').addClass("current");
	$('.ccimagewrapper .ccimages .field-item:first-child').addClass("current"); /* drupal views specific */
	$('.ccimagewrapper .thumbs div:first-child').addClass("current");
	// set index data
	// start ccimages with slideshow


	// functions
	$('.ccimagewrapper .button').click( function () {
		var widget = $(this).parentsUntil('.ccimagewidget').parent().first();
		if ( $(this).hasClass('thumb-prev') || $(this).hasClass('thumb-next') ) {
			//handle next set of thumbnails
			animateSlideThumbs( widget, $(this).attr('class'), settings );
		} else if ( $(this).hasClass('image-prev') || $(this).hasClass('image-next') ) {
			//handle next slides
			animateSlideImages( widget, $(this).attr('class') );
		} else {
			// select the correct slide
			var classes = $(this).attr('class').split(/\s+/);
			for (var i=0; i < classes.length; i++) {
				if (classes[i].indexOf("item") != -1) {
					var foundItem = true;
					break;
				}
			}
			if (foundItem) {
				var t_index = classes[i].split(/-/); t_index = t_index[1]; // current item index; note that this will not be an array offset for any widget except the first one
				widget.data("widgetsettings").idx_cur = t_index; // set widget to index of button
				widget.find('.current').removeClass("current");
				$(this).addClass("current");
				widget.find('.' + classes[i]).addClass("current");
				changeSlide( widget, t_index );
			}
		}
	});

	$('.ccimagewidget').hover(
		function () {
			$(this).find('.slide-control').animate( { opacity: 1 }, 400 );
		},
		function () {
			$(this).find('.slide-control').animate( { opacity: 0 }, 400 );
		}
	);

}; // end if ( .ccimages )

/*********************************************************
*	animateSlideThumbs ( obj, btnClasses )
*
*	Uses the widget contained in obj, and the classes of the button clicked in btnClasses
*	to calculate what part of the thumbnail DIV should be visible.
*
*/
function animateSlideThumbs ( obj, btnClasses ) {
//	alert("animating");
	var widgetdata = obj.data('widgetsettings');
	var numSlides = obj.find('.thumbs').children().length;		// how many slides?
	var numFrames = Math.ceil(numSlides / settings.numThumbs);	// round up to include slides in final frame
	widgetdata.frame_count = numFrames; 	// repeatedly stores this basic value, but it won't be used much and is easier to set here
	var myframe = widgetdata.frame_cur;		// what is the current frame index?
	var newframe = 0;						// init newindex

	var classes = btnClasses.split(/\s+/);
	for (var i=0; i < classes.length; i++) {
		if ( (classes[i].indexOf("thumb-prev") != -1) || ( classes[i].indexOf("thumb-next") != -1 ) ) {
			var foundItem = true;
			break;
		}
	}
	if (foundItem) {
//		alert( classes[i] );
// 		obj.addClass("debug-thumbs");
		obj.find('.current').prev().addClass("just-checking-thumb");
		if ( classes[i] == "thumb-prev" ) {
			newframe = ( myframe == 0 ) ? 0 : myframe - 1;
		} else { // thumb-next
			newframe = ( myframe == numFrames - 1 ) ? numFrames - 1  : myframe + 1;		// adjust offset, first frame is 0
		}
//		alert("newframe: "+ newframe);
		setThumbnailFrame ( obj, newframe );		// this is where the thumbnail is actually animated; separate fn because
													//    the slide image buttons will also affect the thumb frame
	}
};

/*********************************************************
*	setThumbnailFrame ( obj, frame )
*
*	Uses the widget contained in obj, and the thumbnail frame
*	to animate the thumbnails to the correct frame.
*
*/
function setThumbnailFrame ( obj, frame ) {
	var widgetdata = obj.data('widgetsettings');
	widgetdata.frame_cur = frame;		// set widget frame index to the new frame
	var newposition = '' + ( -1 * frame * (settings.thumbSize * settings.numThumbs + 48) ); 	// constant at end is a correction for padding, margin, etc.
	obj.find('.thumbs').animate( { 'left': newposition } );
};

/*********************************************************
*	animateSlideImages ( obj, btnClasses )
*
*	Uses the widget contained in obj, and the classes of the button clicked in btnClasses
*	to find the index of the new slide and change classes to make it the current slide.
*	NOTE: Buttons' actions currently wrap around the list of slides, rather than stop at the ends.
*
*/
function animateSlideImages ( obj, btnClasses ) {
//	alert("animating images");
	var classes = btnClasses.split(/\s+/);
	for (var i=0; i < classes.length; i++) {
		if ( (classes[i].indexOf("image-prev") != -1) || ( classes[i].indexOf("image-next") != -1 ) ) {
			var foundItem = true;
			break;
		}
	}
	if (foundItem) {
		// select new image and thumb for this widget
		var widgetdata = obj.data('widgetsettings');
		var currentindex = widgetdata.idx_cur;		// get currently stored index for this widget
		var currentframe = widgetdata.frame_cur;		// get currently stored index for this widget
		var myindex = currentindex;					// make copy because myindex is changed later
		var myindexstart = widgetdata.idx_start;	// get stored starting index for widget
		var newindex = 0; var newframe = 0;			// init newindex, newframe
		// need to adjust index, since these are not array offsets
		var numSlides = obj.find('.thumbs').children().length;		// how many slides?
		// switch for prev or next button
// 		alert("currentindex: "+ currentindex);
// 		alert("currentframe: "+ currentframe);
		if ( classes[i] == "image-prev" ) {
			newindex = ( myindex == myindexstart ) ? myindexstart + numSlides - 1 : --myindex;
		} else { // image-next
			newindex = ( myindex == ( myindexstart + numSlides - 1 ) ) ? myindexstart : ++myindex;
		}
		newframe = Math.floor( (newindex - myindexstart) / settings.numThumbs );
// 		alert("newindex: "+ newindex);
// 		alert("newframe: "+ newframe);
		// change classes to select new slide and deselect old one
		obj.find(".item-"+currentindex).removeClass("current");
		obj.find(".item-"+newindex).addClass("current");
		obj.data('widgetsettings').idx_cur = newindex;
		// go to new slide
		changeSlide( obj, newindex );
		// adjust thumbnail frame
		if ( currentframe != newframe ) {
			setThumbnailFrame ( obj, newframe );
		}
	}
};
/*********************************************************
*	changeSlide ( obj, slide_idx )
*
*	Uses the widget contained in obj, and the thumbnail frame
*	to animate the thumbnails to the correct frame.
*
*/
function changeSlide ( obj, slide_idx ) {
	var widgetdata = obj.data('widgetsettings');
	var myindexstart = widgetdata.idx_start;	// get stored starting index for widget
	var newposition = '' + ( -1 * (slide_idx - myindexstart) * settings.slideWidth + 0) ; 	// constant at end is a correction for padding, margin, etc.
	obj.find('.ccimages').animate( { 'left': newposition } );
	changeCaption( obj, slide_idx );
};
/*********************************************************
*	changeCaption ( obj, slide_idx )
*
*	Uses the widget contained in obj and the slide index
*	to change and animate the captions for the new/current slide.
*
*/
function changeCaption ( obj, slide_idx ) {
 	var widgetdata = obj.data('widgetsettings');
 	var myindexstart = widgetdata.idx_start;	// get stored starting index for widget
	var cap_idx = slide_idx - myindexstart;
// 	alert("cap_idx: " + cap_idx);
	var mycaption = widgetdata.captions[cap_idx];	// get stored caption for index, correcting for index offset
// 	alert("mycaption: " + mycaption);
	var widgetcaption = obj.find('.caption');
	widgetcaption.html(mycaption);
//	obj.find('.ccimages').animate( { 'left': newposition } );
};
/*********************************************************
*	fixThumbPaths ( bpath )
*
*	Uses the widget contained in obj, and the thumbnail frame
*	to animate the thumbnails to the correct frame.
*
*/
function fixThumbPaths ( bpath, widgettype ) {
	if ( widgettype == 'list-type') {
		var fileext = '';
		if ( bpath.indexOf('sites/default/files') != -1 ) {
			if ( ( bpath.indexOf("large_") != -1 ) ) {
				// have IMCE thumbnail path
				//get file extension
				if ( ( bpath.indexOf(".jpg") != -1 ) || ( bpath.indexOf(".png") != -1 ) || ( bpath.indexOf(".gif") != -1 ) ||  ( bpath.indexOf(".JPG") != -1 ) || ( bpath.indexOf(".PNG") != -1 ) || ( bpath.indexOf(".GIF") != -1 ) ) {
					fileext = bpath.substring( bpath.length-4, bpath.length );
					bpath = bpath.substring(0,bpath.length-4);						// trim file extension (assumes jpg, png, gif)
				}
				var dptext = bpath.split(/large_/);
				bpath = dptext[0] + 'wthumb_' + dptext[1] + '_100' + fileext;
			} else {
				// not sure what we have, but likely this is an error -- how to handle??
				// assuming that this is a file that has no "large_" thumbnail, such as one who is already the right size or perhaps smaller
				return bpath;
			}
		} else { // working with a drupal content path
			if ( ( bpath.indexOf(".jpg") != -1 ) || ( bpath.indexOf(".png") != -1 ) || ( bpath.indexOf(".gif") != -1 ) ) {
				bpath = bpath.substring(0,bpath.length-4);						// trim file extension (assumes jpg, png, gif)
			}
			if ( ( bpath.indexOf("_425") != -1 ) || ( bpath.indexOf("_200") != -1 ) ) {
				bpath = bpath.substring(0,bpath.length-4);						// trim file size
			}
			bpath = bpath + "_200.jpg";
		}
	} else if ( widgettype == 'div-type' ) {
//		var tttest = "http://stage.ipen-china.org/sites/default/files/styles/medium_375/public/field/image/ggbridge_from_air.jpg";
		var nntext = bpath.split(/medium_375/);
		bpath = nntext[0] + 'thumbnail' + nntext[1];
		nntext = bpath.split(/\?/);
		bpath = nntext[0];
// 		alert("bpath: " + bpath);
	}
	return bpath;
};

//////////////////////////////
//
// end ccimagewidget
//
//////////////////////////////



	}); // document.ready function




})(jQuery);


;
