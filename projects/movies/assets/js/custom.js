/**********************

Custom.js
=============

Author:  Gino Aliaj
Template: Movify - Movies, Series & Cinema HTML Template
Version: 1.0

Author URI: gnodesign.com
***************************/


(function ($) {
    "use strict";

    
    
    /*----------------------------------------------------
      LOADING PAGE
    ----------------------------------------------------*/
    $(window).on('load', function () {
        var loading = $('.loading');
        loading.delay(2000).fadeOut(2000);        
    }); // end of window load function




    $(document).ready(function () {
                
        /*----------------------------------------------------
          STICKY HEADER
        ----------------------------------------------------*/    
        if ( $('header').hasClass('sticky') ) {

            $("header.sticky").clone(true).addClass('cloned').insertAfter("header.sticky").removeClass('header-transparent text-white');

            var stickyHeader = document.querySelector(".sticky.cloned");
            var stickyHeaderHeight = $("header.sticky").height();
            
            var headroom = new Headroom(stickyHeader, {
                "offset": stickyHeaderHeight + 100,
                "tolerance": 0
            });

            // disabling on devices
            $(window).bind("load resize", function (e) {

                var winWidth = $(window).width();

                if (winWidth > 1200) {
                    headroom.init();
                } else if (winWidth < 1200) {
                    headroom.destroy();
                }
            });

        }
        
        
        
        
        /*----------------------------------------------------
           MAIN MENU FOR RESPONSIVE MODE
         ----------------------------------------------------*/
        if ($("nav#main-mobile-nav").length > 0) {
            function mmenuInit() {
                if ( $(window).width() <= '1024' ) {

                    // Clone the main menu, remove all unneeded classes and insert on top
                    $("#main-menu").clone().addClass("mmenu-init").prependTo("#main-mobile-nav").removeAttr('id').removeClass('navbar-nav mx-auto').find('li').removeAttr('class').find('a').removeAttr('class data-toggle aria-haspopup aria-expanded').siblings('ul.dropdown-menu').removeAttr('class');

                    var main_menu = $( 'nav#main-mobile-nav' );

                    main_menu.mmenu({
                        extensions: [ 'fx-menu-zoom', 'position-right' ],
                        counters: true
                    }, {
                        offCanvas: {
                            //pageNodetype: "main",
                            pageSelector: ".wrapper"
                        }
                    });


                    var menu_toggler = $("#mobile-nav-toggler");
                    var menu_API = main_menu.data( "mmenu" );

                    menu_toggler.on( "click", function() {
                       menu_API.open();
                    });

                    menu_API.bind( "open:finish", function() {
                       setTimeout(function() {
                          menu_toggler.addClass( "is-active" );
                       }, 100);
                    });

                    menu_API.bind( "close:finish", function() {
                       setTimeout(function() {
                          menu_toggler.removeClass( "is-active" );
                       }, 100);
                    });
                }
            }


            mmenuInit();

            $(window).resize(function () {
                mmenuInit();
            });
        }
        
        
        
        
        /*----------------------------------------------------
           BUTTON EFFECT
         ----------------------------------------------------*/
        var button = $('.btn-effect');

        $(button).on('click', function (e) {

            // Remove any old one
            $('.ripple').remove();

            // Setup
            var posX = $(this).offset().left,
                posY = $(this).offset().top,
                buttonWidth = $(this).width(),
                buttonHeight = $(this).height();

            // Add the element
            $(this).prepend("<span class='ripple'></span>");


            // Make it round!
            if (buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }

            // Get the center of the element
            var x = e.pageX - posX - buttonWidth / 2;
            var y = e.pageY - posY - buttonHeight / 2;


            // Add the ripples CSS and start the animation
            $('.ripple').css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });
        
        
        
        
        /*----------------------------------------------------
           BACK TO TOP
         ----------------------------------------------------*/
        var pxShow=100;
        var scrollSpeed=500;
        
        $(window).scroll(function () {
            if ($(window).scrollTop() >= pxShow) {
                $("#backtotop").addClass('visible');
            } else {
                $("#backtotop").removeClass('visible');
            }
        });
        
        $('#backtotop a').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, scrollSpeed);
            return false;
        });
        
        
        
        
        /*----------------------------------------------------
          GENERAL SEARCH FORM
        ----------------------------------------------------*/
        var search_btn = $( '.extra-nav .toggle-search' );
        var general_searchform = $( '.general-search-wrapper' );
        var search_close = $( '.general-search-wrapper .toggle-search' );
        
        search_btn.on( 'click', function(){
            general_searchform.addClass('open');
        });
        
        search_close.on( 'click', function(){
            general_searchform.removeClass('open');
        });
        
        
        
        
        /*----------------------------------------------------
          REVOLUTION SLIDER
        ----------------------------------------------------*/
            
        /* ----- Home Page 1 ----- */
        if ($("#fullscreen-slider").length > 0) {
            var tpj = jQuery;
            var revapi24;
            
            tpj(document).ready(function () {
                if (tpj("#fullscreen-slider").revolution == undefined) {
                    revslider_showDoubleJqueryError("#fullscreen-slider");
                } else {
                    revapi24 = tpj("#fullscreen-slider").show().revolution({
                        sliderType: "standard",
						jsFileLocation:"assets/revolution/js/",
                        sliderLayout: "fullscreen",
                        dottedOverlay: "none",
                        delay: 9000,
                        spinner: 'spinner2',
                        navigation: {
                            keyboardNavigation: "on",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "off",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "vertical",
                                drag_block_vertical: false
                            },
                            bullets: {
                                enable: true,
                                hide_onmobile: true,
                                hide_under: 1024,
                                style: "uranus",
                                hide_onleave: false,
                                direction: "vertical",
                                h_align: "right",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 0,
                                space: 20,
                                tmp: '<span class="tp-bullet-inner"></span>'
                            }
                        },
                        viewPort: {
                            enable: true,
                            outof: "wait",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1200, 992, 768, 480],
                        visibilityLevels: [1200, 992, 768, 480],
                        gridwidth: [1200, 992, 768, 480],
                        lazyType: "single",
                        parallax: {
                            type: "scroll",
                            origo: "enterpoint",
                            speed: 400,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        },
                        disableProgressBar: "on",
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "on",
                        stopAfterLoops: 1,
                        stopAtSlide: 1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
                
                //if(revapi24) revapi24.revSliderSlicey();
            });
        };
        
        
        /* ----- Home Page 2 ----- */
        if ($("#fullwidth-slider").length > 0) {
            var tpj = jQuery;
            var revapi24;
            
            
            tpj(document).ready(function () {
                if (tpj("#fullwidth-slider").revolution == undefined) {
                    revslider_showDoubleJqueryError("#fullwidth-slider");
                } else {
                    revapi24 = tpj("#fullwidth-slider").show().revolution({
                        sliderType: "hero",
						jsFileLocation:"assets/revolution/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        spinner: 'off',
                        navigation: {},
                        viewPort: {
                            enable: true,
                            outof: "wait",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1200, 992, 768, 480],
                        visibilityLevels: [1200, 992, 768, 480],
                        gridwidth: [1200, 992, 768, 480],
                        gridheight: [600, 600, 500, 400],
                        lazyType: "none",
                        parallax: {
                            type: "scroll",
                            origo: "enterpoint",
                            speed: 400,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        },
                        disableProgressBar: "on",
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "on",
                        stopAfterLoops: 1,
                        stopAtSlide: 1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
                
                //if(revapi24) revapi24.revSliderSlicey();
            });
            
        };
        
        
        /* ----- Home Page 3 ----- */
        if ($("#hero-slider").length > 0) {
            var tpj = jQuery;
            var revapi24;
            
            
            tpj(document).ready(function () {
                if (tpj("#hero-slider").revolution == undefined) {
                    revslider_showDoubleJqueryError("#hero-slider");
                } else {
                    revapi24 = tpj("#hero-slider").show().revolution({
                        sliderType: "hero",
						jsFileLocation:"assets/revolution/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        spinner: 'off',
                        navigation: {},
                        viewPort: {
                            enable: true,
                            outof: "wait",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1200, 992, 768, 480],
                        visibilityLevels: [1200, 992, 768, 480],
                        gridwidth: [1200, 992, 768, 480],
                        gridheight: [700, 700, 600, 500],
                        lazyType: "none",
                        parallax: {
                            type: "scroll",
                            origo: "enterpoint",
                            speed: 400,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        },
                        disableProgressBar: "on",
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "on",
                        stopAfterLoops: 1,
                        stopAtSlide: 1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
                
                //if(revapi24) revapi24.revSliderSlicey();
            });
            
        };
        
        
        /* ----- Home Page 4 ----- */
        if ($("#hero-slider2").length > 0) {
            var tpj = jQuery;
            var revapi24;
            
            
            tpj(document).ready(function () {
                if (tpj("#hero-slider2").revolution == undefined) {
                    revslider_showDoubleJqueryError("#hero-slider2");
                } else {
                    revapi24 = tpj("#hero-slider2").show().revolution({
                        sliderType: "hero",
						jsFileLocation:"assets/revolution/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        spinner: 'off',
                        navigation: {},
                        viewPort: {
                            enable: true,
                            outof: "wait",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1200, 992, 768, 480],
                        visibilityLevels: [1200, 992, 768, 480],
                        gridwidth: [1200, 992, 768, 480],
                        gridheight: [700, 700, 600, 500],
                        lazyType: "none",
                        parallax: {
                            type: "scroll",
                            origo: "enterpoint",
                            speed: 400,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        },
                        disableProgressBar: "on",
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "on",
                        stopAfterLoops: 1,
                        stopAtSlide: 1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
                
                //if(revapi24) revapi24.revSliderSlicey();
            });
            
        };
        
        
        
        
        /*----------------------------------------------------
          POPUP FORMS
        ----------------------------------------------------*/
        $(".signUpClick").on('click' , function() {  
            $('.signin-wrapper, .forgetpassword-wrapper').fadeOut(300);
            $('.signup-wrapper').delay(300).fadeIn();
        });
        
        $(".signInClick").on('click' , function() {  
            $('.forgetpassword-wrapper, .signup-wrapper').fadeOut(300);
            $('.signin-wrapper').delay(300).fadeIn();
        });
        
        $(".forgetPasswordClick").on('click' , function() { 
            $('.signup-wrapper, .signin-wrapper').fadeOut(300);
            $('.forgetpassword-wrapper').delay(300).fadeIn();
        });
        
        $(".cancelClick").on('click' , function() { 
            $('.forgetpassword-wrapper, .signup-wrapper').fadeOut(300);
            $('.signin-wrapper').delay(300).fadeIn();
        });
        
        
        
        
        /*----------------------------------------------------
          MAGNIFIC POP UP
        ----------------------------------------------------*/
        $('body').magnificPopup({
            type: 'image',
            delegate: 'a.mfp-gallery',

            fixedContentPos: true,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: true,

            removalDelay: 0,
            mainClass: 'mfp-fade',

            gallery:{
                enabled:true
            },

            callbacks: {
                buildControls: function() {
                     this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                }
            }
        });
        
        
        // Init for popup-with-zoom-anim class
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
        
        
        // Init for images
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            image: {
                verticalFit: true
            }
        });
        
        
        // Init for image gallery
        $('.image-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            fixedContentPos: true,
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            retina: {
                ratio: 1,
                replaceSrc: function (item, ratio) {
                    return item.src.replace(/\.\w+$/, function (m) {
                        return '@2x' + m;
                    });
                }
            }

        });
        
        
        // Init for youtube, vimeo and google maps
        $('.play-video, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
        
        
        
        
        /*----------------------------------------------------
          OWL CAROUSEL
        ----------------------------------------------------*/
        
        /***** Latest Movies *****/
        
        var latest_movies = $( 'section.latest-movies .latest-movies-slider');
        
        latest_movies.owlCarousel({
            loop: true,
            margin: 15,
            autoplay: false, //change this to true if you want the slider to auto play
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items: 1,
                    stagePadding: 10
                },
                600:{
                    items: 3
                },
                1000:{
                    items: 4
                }
            }
        });
        
        
        /***** Latest TV Shows *****/
        
        var latest_tvshows = $( 'section.latest-tvshows .latest-tvshows-slider');
        
        latest_tvshows.owlCarousel({
            loop: true,
            margin: 15,
            autoplay: false, //change this to true if you want the slider to auto play
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items: 1,
                    stagePadding: 10
                },
                600:{
                    items: 3
                },
                1000:{
                    items: 4
                }
            }
        });
        
        
        /***** Latest Releases *****/
        
        var latest_releases = $( '.latest-releases-slider');
        
        latest_releases.owlCarousel({
            loop: true,
            margin: 30,
            stagePadding: 20,
            autoplay: false, //change this to true if you want the slider to auto play
            nav: false,
            dots: false,
            responsive:{
                0:{
                    items: 1,
                },
                600:{
                    items: 2,
                },
                1000:{
                    items: 3,
                },
                1200:{
                    items: 4,
                },
                1500:{
                    items: 5,
                }
            }
        });
        
        
        /***** Recommended Movies & TV Shows *****/
        
        var recommended = $( 'section.recommended-movies .recommended-slider');
        
        recommended.owlCarousel({
            loop: true,
            margin: 15,
            autoplay: false, //change this to true if you want the slider to auto play
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items: 1,
                    stagePadding: 10
                },
                600:{
                    items: 3
                },
                1000:{
                    items: 4
                }
            }
        });
        
        
        /***** Testimonials *****/
        
        var testimonials = $( '.testimonial-slider');
        
        testimonials.owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true, //change this to true if you want the slider to auto play
            nav: false,
            dots: true,
            items: 1,
        });
        
        /*----------------------------------------------------
          INITIALIZE COUNT UP
        ----------------------------------------------------*/
        var counter_up = $('section.counter');
        
        counter_up.on('inview', function (event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.counter-item').each(function () {
                    var $this = $(this);
                    $('.counter-item').countTo({
                        speed: 3000,
                        refreshInterval: 50
                    });
                });
                $(this).unbind('inview');
            }
        });
        
        
        
        
        /*----------------------------------------------------
          PARALLAX
        ----------------------------------------------------*/
        if("ontouchstart"in window){
            document.documentElement.className=document.documentElement.className+" touch";
        }
        
        function parallaxBG() {
            $('.parallax').prepend('<div class="parallax-overlay"></div>');
            
            $(".parallax").each(function () {
                var attrImage = $(this).attr('data-background');
                var attrColor = $(this).attr('data-color');
                var attrOpacity = $(this).attr('data-color-opacity');
                if (attrImage !== undefined) {
                    $(this).css('background-image', 'url(' + attrImage + ')');
                }
                if (attrColor !== undefined) {
                    $(this).find(".parallax-overlay").css('background-color', '' + attrColor + '');
                }
                if (attrOpacity !== undefined) {
                    $(this).find(".parallax-overlay").css('opacity', '' + attrOpacity + '');
                }
            });
        }
        parallaxBG();

        if (!$("html").hasClass("touch")) {
            $(".parallax").css("background-attachment", "fixed");
        }

        function backgroundResize() {
            var windowH = $(window).height();
            $(".parallax").each(function (i) {
                var path = $(this);
                var contW = path.width();
                var contH = path.height();
                var imgW = path.attr("data-img-width");
                var imgH = path.attr("data-img-height");
                var ratio = imgW / imgH;
                var diff = 100;
                diff = diff ? diff : 0;
                var remainingH = 0;
                
                if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
                    remainingH = windowH - contH;
                }
                imgH = contH + remainingH + diff;
                imgW = imgH * ratio;
                if (contW > imgW) {
                    imgW = contW;
                    imgH = imgW / ratio;
                }
                path.data("resized-imgW", imgW);
                path.data("resized-imgH", imgH);
                path.css("background-size", imgW + "px " + imgH + "px");
            });
        }
        $(window).resize(backgroundResize);
        $(window).focus(backgroundResize);
        backgroundResize();

        function parallaxPosition(e) {
            var heightWindow = $(window).height();
            var topWindow = $(window).scrollTop();
            var bottomWindow = topWindow + heightWindow;
            var currentWindow = (topWindow + bottomWindow) / 2;

            $(".parallax").each(function (i) {
                var path = $(this);
                var height = path.height();
                var top = path.offset().top;
                var bottom = top + height;
                
                if (bottomWindow > top && topWindow < bottom) {
                    var imgH = path.data("resized-imgH");
                    var min = 0;
                    var max = -imgH + heightWindow;
                    var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow;
                    top = top - overflowH;
                    bottom = bottom + overflowH;
                    var value = 0;
                    
                    if ($('.parallax').is(".titlebar")) {
                        value = min + (max - min) * (currentWindow - top) / (bottom - top) * 2;
                    } else {
                        value = min + (max - min) * (currentWindow - top) / (bottom - top);
                    }
                    var orizontalPosition = path.attr("data-oriz-pos");
                    orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                    $(this).css("background-position", orizontalPosition + " " + value + "px");
                }
            });
        }

        if (!$("html").hasClass("touch")) {
            $(window).resize(parallaxPosition);
            $(window).scroll(parallaxPosition);
            parallaxPosition();
        }
        
        
        
        
        /*----------------------------------------------------
          MAILCHIMP
        ----------------------------------------------------*/
        var mailChimp = $('.mailchimp');

        mailChimp.ajaxChimp({
            callback: mailchimpFunction,
            url: "your-mailchimp-url-here" // <==== Replace this with your own mailchimp list URL.  
        });

        // Mailchimp Callback function
        function mailchimpFunction(resp) {

            if (resp.result === 'success') {
                setTimeout(function () {
                    $("form.mailchimp label").removeClass();
                }, 5000);

            } else if (resp.result === 'error') {
                setTimeout(function () {
                    $("form.mailchimp label").removeClass();
                }, 5000);
            }
        }
        
        
        
        
        /*----------------------------------------------------
          TOOLTIP
        ----------------------------------------------------*/
        $('[data-toggle="tooltip"]').tooltip({
           animated: 'fade', 
           container: 'body'
        });
        
        
        
        
        /*----------------------------------------------------
          COUNTDOWN
        ----------------------------------------------------*/
        $("#countdown").countdown('2020/12/12', function(event) {
			var $this = $(this).html(event.strftime(''
                + '<div><span>%D</span> <i>Days</i></div>'
                + '<div><span>%H</span> <i>Hours</i></div> '
                + '<div><span>%M</span> <i>Minutes</i></div> '
                + '<div><span>%S</span> <i>Seconds</i></div>'
            ));
        });
    
        
        
        
        /*----------------------------------------------------
          CONTACT FORM
        ----------------------------------------------------*/
        $("#contact-form").on('submit', function (e) {
            e.preventDefault();

            //Get input field values from HTML form
            var user_name = $("input[name=name]").val();
            var user_email = $("input[name=email]").val();
            var user_subject = $("input[name=subject]").val();
            var user_message = $("textarea[name=message]").val();


            //Input validation
            var proceed = true; //Set proceed as true

            //If empty set border colors red
            if (user_name === "") {
                $("input[name=name]").css('border-color', 'red');
                proceed = false;
            }

            if (user_email === "") {
                $("input[name=email]").css('border-color', 'red');
                proceed = false;
            }

            if (user_message === "") {
                $("textarea[name=message]").css('border-color', 'red');
                proceed = false;
            }

            if (user_subject === "") {
                $("input[name=subject]").css('border-color', 'red');
                proceed = false;
            }


            //Everything it's ok...
            if (proceed) {

                //Data to be sent to server
                var post_data;
                var output;
                post_data = {
                    'user_name': user_name,
                    'user_email': user_email,
                    'user_subject': user_subject,
                    'user_message': user_message
                };

                //Ajax post data to server
                $.post('assets/php/email.php', post_data, function (response) {

                    //Response server message
                    if (response.type === 'error') {
                        $("#contact-result").addClass('error');
                        output = response.text;

                        // Remove any Class after 5 sec
                        setTimeout(function () {
                            $("#contact-result").removeClass();
                        }, 5000);

                    } else {
                        $("#contact-result").removeClass().addClass('valid');
                        output = response.text;

                        // Remove any Class after 5 sec
                        setTimeout(function () {
                            $("#contact-result").removeClass();
                        }, 5000);

                        // If success clear inputs
                        $("input").val('');
                        $("textarea").val('');
                    }

                    $("#contact-result").html(output);
                }, 'json');

            }
        });

        //Reset border colors
        $("input, textarea").on("change keyup", function (event) {
            $("input, textarea").css('border-color', '');
        });
        
        
        
        
        /*----------------------------------------------------
          ISOTOPE
        ----------------------------------------------------*/
        var isotope = $('.isotope');
        
        isotope.imagesLoaded( function() {
            // init Isotope after all images have loaded
            isotope.isotope({
                // options
                itemSelector: '.element',
                transitionDuration: '0.8s',
            });
        });
        
        
        
        
        /*----------------------------------------------------
         GOOGLE ANALYTICS
        ----------------------------------------------------*/
        // Asynchronously Load Google Analytics Script on all pages

        var script = document.createElement('script');
        script.src = "assets/js/google-analytics.js";
        document.body.appendChild(script);
        
        /*----------------------------------------------------
        MOVIES LIST
        ----------------------------------------------------*/
        let movieListHtml="";
        let seriesListHtml="";
        let movieData=[];
        let seriesData=[];

        
        function fetchMovie(imdbID, isSeries, last=false){
            fetch (`https://www.omdbapi.com/?i=${imdbID}&apikey=1f9eb63d&r=json`) .then(function(response) {
            // console.log(response)
            if(response.status!=200){
            movieData=[{"Title":"Vivah","Year":"2006","Rated":"Not Rated","Released":"10 Nov 2006","Runtime":"160 min","Genre":"Drama, Musical, Romance","Director":"Sooraj R. Barjatya","Writer":"Aash Karan Atal, Sooraj R. Barjatya, Raghvendra Singh","Actors":"Shahid Kapoor, Amrita Rao, Anupam Kher","Plot":"Poonam, a traditionally brought-up young woman, is to marry Prem, a groom chosen by her uncle. Poonam and Prem's faith and love are to be tested however, when an accident occurs and Poonam might be scarred for life.","Language":"Hindi","Country":"India","Awards":"1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BZjNjZWViNTYtYzAzZC00OTY2LWIzMTMtNTcxNzQzNzNiYjc4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"}],"Metascore":"N/A","imdbRating":"6.6","imdbVotes":"9,615","imdbID":"tt0494290","Type":"movie","DVD":"07 Aug 2012","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Army of the Dead","Year":"2021","Rated":"R","Released":"21 May 2021","Runtime":"148 min","Genre":"Action, Crime, Horror","Director":"Zack Snyder","Writer":"Zack Snyder, Shay Hatten, Joby Harold","Actors":"Dave Bautista, Ella Purnell, Ana de la Reguera","Plot":"Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.","Language":"English, Spanish, German, French","Country":"United States","Awards":"3 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"},{"Source":"Rotten Tomatoes","Value":"67%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"5.7","imdbVotes":"157,151","imdbID":"tt0993840","Type":"movie","DVD":"21 May 2021","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Fundamentals of Caring","Year":"2016","Rated":"TV-MA","Released":"24 Jun 2016","Runtime":"97 min","Genre":"Comedy, Drama","Director":"Rob Burnett","Writer":"Rob Burnett, Jonathan Evison","Actors":"Craig Roberts, Paul Rudd, Selena Gomez","Plot":"A man suffering a family loss enrolls in a class about care-giving that changes his perspective on life.","Language":"English","Country":"United States","Awards":"4 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTA1Mjc4ODI0NzReQTJeQWpwZ15BbWU4MDQ3MzAwMjkx._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.3","imdbVotes":"68,628","imdbID":"tt2452386","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Shutter Island","Year":"2010","Rated":"R","Released":"19 Feb 2010","Runtime":"138 min","Genre":"Mystery, Thriller","Director":"Martin Scorsese","Writer":"Laeta Kalogridis, Dennis Lehane","Actors":"Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo","Plot":"In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.","Language":"English, German","Country":"United States","Awards":"11 wins & 66 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"68%"},{"Source":"Metacritic","Value":"63/100"}],"Metascore":"63","imdbRating":"8.2","imdbVotes":"1,225,928","imdbID":"tt1130884","Type":"movie","DVD":"08 Jun 2010","BoxOffice":"$128,012,934","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Se7en","Year":"1995","Rated":"R","Released":"22 Sep 1995","Runtime":"127 min","Genre":"Crime, Drama, Mystery","Director":"David Fincher","Writer":"Andrew Kevin Walker","Actors":"Morgan Freeman, Brad Pitt, Kevin Spacey","Plot":"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 29 wins & 43 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"8.6","imdbVotes":"1,549,320","imdbID":"tt0114369","Type":"movie","DVD":"19 Dec 2000","BoxOffice":"$100,125,643","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Sanam Teri Kasam","Year":"2016","Rated":"Not Rated","Released":"05 Feb 2016","Runtime":"154 min","Genre":"Drama, Musical, Romance","Director":"Radhika Rao, Vinay Sapru","Writer":"Radhika Rao, Vinay Sapru","Actors":"Harshvardhan Rane, Mawra Hocane, Vijay Raaz","Plot":"After being disowned by her family, an awkward librarian relies on the help of her brooding neighbour.","Language":"Hindi","Country":"India","Awards":"1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ3ZTJkYjItNTRhOC00ZjQ2LTgxMzgtZjE3NDY0NTlhYjcxXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"0%"}],"Metascore":"N/A","imdbRating":"7.5","imdbVotes":"12,354","imdbID":"tt5255710","Type":"movie","DVD":"22 May 2017","BoxOffice":"$22,121","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Matrix Resurrections","Year":"2021","Rated":"R","Released":"22 Dec 2021","Runtime":"148 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski","Writer":"Lana Wachowski, David Mitchell, Aleksandar Hemon","Actors":"Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II","Plot":"Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.","Language":"English, French","Country":"United States, United Kingdom, Australia","Awards":"2 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"5.9","imdbVotes":"64,629","imdbID":"tt10838180","Type":"movie","DVD":"22 Dec 2021","BoxOffice":"$13,200,000","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Imitation Game","Year":"2014","Rated":"PG-13","Released":"25 Dec 2014","Runtime":"114 min","Genre":"Biography, Drama, Thriller","Director":"Morten Tyldum","Writer":"Graham Moore, Andrew Hodges","Actors":"Benedict Cumberbatch, Keira Knightley, Matthew Goode","Plot":"During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.","Language":"English, German","Country":"United Kingdom, United States","Awards":"Won 1 Oscar. 49 wins & 163 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.0","imdbVotes":"727,670","imdbID":"tt2084970","Type":"movie","DVD":"31 Mar 2015","BoxOffice":"$91,125,683","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Gone Girl","Year":"2014","Rated":"R","Released":"03 Oct 2014","Runtime":"149 min","Genre":"Drama, Mystery, Thriller","Director":"David Fincher","Writer":"Gillian Flynn","Actors":"Ben Affleck, Rosamund Pike, Neil Patrick Harris","Plot":"With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 64 wins & 188 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.1","imdbVotes":"924,443","imdbID":"tt2267998","Type":"movie","DVD":"13 Jan 2015","BoxOffice":"$167,767,189","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"John Wick: Chapter 3 - Parabellum","Year":"2019","Rated":"R","Released":"17 May 2019","Runtime":"130 min","Genre":"Action, Crime, Thriller","Director":"Chad Stahelski","Writer":"Derek Kolstad, Shay Hatten, Chris Collins","Actors":"Keanu Reeves, Halle Berry, Ian McShane","Plot":"John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.","Language":"English, Russian, Japanese, Indonesian, Mandarin, Italian, Arabic, Latin","Country":"United States","Awards":"18 wins & 28 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.4","imdbVotes":"316,561","imdbID":"tt6146586","Type":"movie","DVD":"23 Aug 2019","BoxOffice":"$171,015,687","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Don't Breathe","Year":"2016","Rated":"R","Released":"26 Aug 2016","Runtime":"88 min","Genre":"Crime, Horror, Thriller","Director":"Fede Alvarez","Writer":"Fede Alvarez, Rodo Sayagues","Actors":"Stephen Lang, Jane Levy, Dylan Minnette","Plot":"Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems.","Language":"English","Country":"United States, Hungary","Awards":"7 wins & 21 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"7.1","imdbVotes":"258,794","imdbID":"tt4160708","Type":"movie","DVD":"29 Nov 2016","BoxOffice":"$89,217,875","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Army of Thieves","Year":"2021","Rated":"TV-MA","Released":"29 Oct 2021","Runtime":"127 min","Genre":"Action, Comedy, Crime","Director":"Matthias Schweighöfer","Writer":"Zack Snyder, Shay Hatten","Actors":"Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee","Plot":"A prequel, set before the events of Army of the Dead, which focuses on German safecracker Ludwig Dieter leading a group of aspiring thieves on a top secret heist during the early stages of the zombie apocalypse.","Language":"English, French, German, Czech, Portuguese","Country":"Germany, United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BZGRlODFlNTItZWFhZS00NjU5LTliNDUtNjUxMGJhMGZhYjFmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"68%"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"6.4","imdbVotes":"60,494","imdbID":"tt13024674","Type":"movie","DVD":"29 Oct 2021","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Don't Breathe 2","Year":"2021","Rated":"R","Released":"13 Aug 2021","Runtime":"98 min","Genre":"Action, Drama, Horror","Director":"Rodo Sayagues","Writer":"Fede Alvarez, Rodo Sayagues","Actors":"Stephen Lang, Madelyn Grace, Brendan Sexton III","Plot":"The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom (Stephen Lang) lives in quiet solace until his past sins catch up to him.","Language":"English","Country":"United States, Serbia","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BNWRmNzQ0N2QtZmJlYS00MWQ4LTlhY2ItODNmY2JkNGYyZTRlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"6.1","imdbVotes":"38,360","imdbID":"tt6246322","Type":"movie","DVD":"N/A","BoxOffice":"$32,638,038","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Bird Box","Year":"2018","Rated":"R","Released":"21 Dec 2018","Runtime":"124 min","Genre":"Horror, Sci-Fi","Director":"Susanne Bier","Writer":"Eric Heisserer, Josh Malerman","Actors":"Sandra Bullock, Trevante Rhodes, John Malkovich","Plot":"Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.","Language":"English","Country":"United States","Awards":"5 wins & 9 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"},{"Source":"Rotten Tomatoes","Value":"64%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"6.6","imdbVotes":"311,524","imdbID":"tt2737304","Type":"movie","DVD":"21 Dec 2018","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Jab We Met","Year":"2007","Rated":"Not Rated","Released":"26 Oct 2007","Runtime":"138 min","Genre":"Comedy, Drama, Romance","Director":"Imtiaz Ali","Writer":"Imtiaz Ali","Actors":"Shahid Kapoor, Kareena Kapoor, Tarun Arora","Plot":"A depressed wealthy businessman finds his life changing after he meets a spunky and care-free young woman.","Language":"Hindi","Country":"India","Awards":"13 wins & 20 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYmIzYmY4MGItM2I4YS00OWZhLWFmMzQtYzI2MWY1MmM3NGU1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"50,896","imdbID":"tt1093370","Type":"movie","DVD":"29 May 2015","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Orphan","Year":"2009","Rated":"R","Released":"24 Jul 2009","Runtime":"123 min","Genre":"Horror, Mystery, Thriller","Director":"Jaume Collet-Serra","Writer":"David Leslie Johnson-McGoldrick, Alex Mace","Actors":"Vera Farmiga, Peter Sarsgaard, Isabelle Fuhrman","Plot":"A husband and wife who recently lost their baby adopt a 9-year-old girl who is not nearly as innocent as she appears.","Language":"English, American Sign , Estonian","Country":"United States, Canada, Germany, France","Awards":"1 win & 7 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTBjMjY0ODEtZGVkMy00MjUyLTlkMjAtNDBmNzVjOTk0NzQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"56%"},{"Source":"Metacritic","Value":"42/100"}],"Metascore":"42","imdbRating":"7.0","imdbVotes":"206,572","imdbID":"tt1148204","Type":"movie","DVD":"27 Oct 2009","BoxOffice":"$41,596,251","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Matrix Reloaded","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss","Plot":"Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.","Language":"English, French","Country":"United States","Awards":"8 wins & 34 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.2","imdbVotes":"553,837","imdbID":"tt0234215","Type":"movie","DVD":"14 Oct 2003","BoxOffice":"$281,576,461","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss","Plot":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.","Language":"English","Country":"United States, Australia","Awards":"Won 4 Oscars. 42 wins & 51 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"8.7","imdbVotes":"1,819,156","imdbID":"tt0133093","Type":"movie","DVD":"15 May 2007","BoxOffice":"$171,479,930","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"John Wick","Year":"2014","Rated":"R","Released":"24 Oct 2014","Runtime":"101 min","Genre":"Action, Crime, Thriller","Director":"Chad Stahelski, David Leitch","Writer":"Derek Kolstad","Actors":"Keanu Reeves, Michael Nyqvist, Alfie Allen","Plot":"An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.","Language":"English, Russian, Hungarian","Country":"United States, United Kingdom, China","Awards":"5 wins & 10 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.4","imdbVotes":"588,025","imdbID":"tt2911666","Type":"movie","DVD":"03 Feb 2015","BoxOffice":"$43,037,835","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Searching","Year":"2018","Rated":"PG-13","Released":"31 Aug 2018","Runtime":"102 min","Genre":"Drama, Mystery, Thriller","Director":"Aneesh Chaganty","Writer":"Aneesh Chaganty, Sev Ohanian","Actors":"John Cho, Debra Messing, Joseph Lee","Plot":"After his teenage daughter goes missing, a desperate father tries to find clues on her laptop.","Language":"English","Country":"United States, Russia","Awards":"6 wins & 10 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"7.6","imdbVotes":"155,825","imdbID":"tt7668870","Type":"movie","DVD":"13 Nov 2018","BoxOffice":"$26,020,957","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Anand","Year":"1971","Rated":"Not Rated","Released":"12 Mar 1971","Runtime":"122 min","Genre":"Drama, Musical","Director":"Hrishikesh Mukherjee","Writer":"Hrishikesh Mukherjee, Gulzar, D.N. Mukherjee","Actors":"Rajesh Khanna, Amitabh Bachchan, Sumita Sanyal","Plot":"The story of a terminally ill man who wishes to live life to the fullest before the inevitable occurs, as told by his best friend.","Language":"Hindi","Country":"India","Awards":"9 wins & 1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BNTMzNGFlYmUtMTA0Ny00MzE1LTk1NjAtNjIxYzczZmQxNzk2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"}],"Metascore":"N/A","imdbRating":"8.2","imdbVotes":"33,052","imdbID":"tt0066763","Type":"movie","DVD":"29 Oct 2016","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"John Wick: Chapter 2","Year":"2017","Rated":"R","Released":"10 Feb 2017","Runtime":"122 min","Genre":"Action, Crime, Thriller","Director":"Chad Stahelski","Writer":"Derek Kolstad","Actors":"Keanu Reeves, Riccardo Scamarcio, Ian McShane","Plot":"After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.","Language":"English, Italian, Russian","Country":"United States, Italy, Hong Kong, Canada","Awards":"4 wins & 10 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.5","imdbVotes":"401,942","imdbID":"tt4425200","Type":"movie","DVD":"13 Jun 2017","BoxOffice":"$92,029,184","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"The Matrix Revolutions","Year":"2003","Rated":"R","Released":"05 Nov 2003","Runtime":"129 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss","Plot":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.","Language":"English, French","Country":"United States","Awards":"5 wins & 36 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"35%"},{"Source":"Metacritic","Value":"47/100"}],"Metascore":"47","imdbRating":"6.8","imdbVotes":"484,161","imdbID":"tt0242653","Type":"movie","DVD":"06 Apr 2004","BoxOffice":"$139,313,948","Production":"N/A","Website":"N/A","Response":"True"},{"Title":"Zodiac","Year":"2007","Rated":"R","Released":"02 Mar 2007","Runtime":"157 min","Genre":"Crime, Drama, Mystery","Director":"David Fincher","Writer":"James Vanderbilt, Robert Graysmith","Actors":"Jake Gyllenhaal, Robert Downey Jr., Mark Ruffalo","Plot":"Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.","Language":"English","Country":"United States","Awards":"4 wins & 72 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.7","imdbVotes":"507,173","imdbID":"tt0443706","Type":"movie","DVD":"29 Aug 2006","BoxOffice":"$33,080,084","Production":"N/A","Website":"N/A","Response":"True"}]
            seriesData=[{"Title":"Dark","Year":"2017–2020","Rated":"TV-MA","Released":"01 Dec 2017","Runtime":"60 min","Genre":"Crime, Drama, Mystery","Director":"N/A","Writer":"Baran bo Odar, Jantje Friese","Actors":"Louis Hofmann, Karoline Eichhorn, Lisa Vicari","Plot":"A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.","Language":"German","Country":"Germany, United States","Awards":"8 wins & 21 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"}],"Metascore":"N/A","imdbRating":"8.8","imdbVotes":"334,624","imdbID":"tt5753856","Type":"series","totalSeasons":"3","Response":"True"},{"Title":"Brooklyn Nine-Nine","Year":"2013–2021","Rated":"TV-14","Released":"17 Sep 2013","Runtime":"22 min","Genre":"Comedy, Crime","Director":"N/A","Writer":"Dan Goor, Michael Schur","Actors":"Andy Samberg, Stephanie Beatriz, Terry Crews","Plot":"Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.","Language":"English","Country":"United States","Awards":"Won 2 Primetime Emmys. 14 wins & 118 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"}],"Metascore":"N/A","imdbRating":"8.4","imdbVotes":"275,693","imdbID":"tt2467372","Type":"series","totalSeasons":"8","Response":"True"},{"Title":"A Series of Unfortunate Events","Year":"2017–2019","Rated":"TV-PG","Released":"13 Jan 2017","Runtime":"50 min","Genre":"Adventure, Comedy, Drama","Director":"N/A","Writer":"N/A","Actors":"Neil Patrick Harris, Patrick Warburton, Malina Weissman","Plot":"After the loss of their parents in a mysterious fire, the three Baudelaire children face trials and tribulations attempting to uncover dark family secrets.","Language":"English","Country":"United States","Awards":"Nominated for 6 Primetime Emmys. 19 wins & 45 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzMjA3OTgxOV5BMl5BanBnXkFtZTgwMjAwMDU5NjM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"57,725","imdbID":"tt4834206","Type":"series","totalSeasons":"3","Response":"True"},{"Title":"Breaking Bad","Year":"2008–2013","Rated":"TV-MA","Released":"20 Jan 2008","Runtime":"49 min","Genre":"Crime, Drama, Thriller","Director":"N/A","Writer":"Vince Gilligan","Actors":"Bryan Cranston, Aaron Paul, Anna Gunn","Plot":"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.","Language":"English, Spanish","Country":"United States","Awards":"Won 16 Primetime Emmys. 153 wins & 239 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOWNlMjBjZTUtNThiNy00OTkxLThiZTQtNTEyZDliZTM3N2Q0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.4/10"},{"Source":"Rotten Tomatoes","Value":"96%"}],"Metascore":"N/A","imdbRating":"9.4","imdbVotes":"1,636,741","imdbID":"tt0903747","Type":"series","totalSeasons":"5","Response":"True"},{"Title":"Sherlock","Year":"2010–2017","Rated":"TV-14","Released":"24 Oct 2010","Runtime":"88 min","Genre":"Crime, Drama, Mystery","Director":"N/A","Writer":"Mark Gatiss, Steven Moffat","Actors":"Benedict Cumberbatch, Martin Freeman, Una Stubbs","Plot":"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.","Language":"English","Country":"United Kingdom, United States","Awards":"Won 9 Primetime Emmys. 92 wins & 184 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.1/10"}],"Metascore":"N/A","imdbRating":"9.1","imdbVotes":"864,997","imdbID":"tt1475582","Type":"series","totalSeasons":"4","Response":"True"}]
            return true;

            }
            return response.json();
          }).then(function(data) {
              if(isSeries){
                    // console.log(data); 
                seriesData.push(data)
                // console.log(JSON.stringify(seriesData))
                // console.log(seriesData)
                if(last){
                    setTimeout(() => {
                        renderMovies(seriesData, true)                    
                    }, 3000);
                }      
              } else {
                // console.log(data); 
                movieData.push(data)
                // console.log(JSON.stringify(movieData))
                // console.log(movieData)
                if(last){
                    setTimeout(() => {
                        renderMovies(movieData, false)                    
                    }, 3000);
                }
            }
          });

        }

        let movieIDs=["tt0494290","tt5255710","tt1130884","tt0443706","tt0114369","tt2452386","tt2084970","tt0993840","tt13024674","tt2267998","tt0066763","tt1148204","tt2737304","tt4160708","tt6246322","tt0133093","tt0234215","tt0242653","tt10838180","tt2911666","tt4425200","tt6146586","tt7668870","tt1093370"]
        let seriesIDs=["tt5753856","tt2467372","tt4834206","tt0903747","tt1475582"]
        movieIDs.map((val,i,arr)=>{
                let singleMovieList;
                if(arr.length-1==i){fetchMovie(val,false,true)}else{fetchMovie(val,false)}
            })

        seriesIDs.map((val,i,arr)=>{
            let singleMovieList;
            if(arr.length-1==i){fetchMovie(val,true,true)}else{fetchMovie(val,true, false)}
        })            
        

        function renderMovies(arr, isSeries){
   
            if(window.location.href.includes('movie-detail')){return true;}

            arr.filter(function(val) {
                if (val.Title === undefined) {
                  return false; // skip
                }
                return true;
              }).map((val,i,arr)=>{
                // console.log(val)
                var strVar="";
                strVar += `                    <div class=\"col-lg-4 col-md-6 col-sm-12\">`;
                strVar += `                        <div class=\"movie-box-2 mb30\">`;
                strVar += `                            <div class=\"listing-container\">`;
                strVar += `                                <div class=\"listing-image\">`;                
                strVar += `                                    <div class=\"stars\">`;
                strVar += `                                        <div class=\"rating\">`;
                strVar += `                                            <i class=\"fa fa-star\"><\/i>`;
                strVar += `                                            <span>${val.imdbRating}</span><span style="margin-left:0"> / 10 ( <span style="margin-left:0">${val.imdbVotes}</span> )</span>`
                strVar += `                                        <\/div>`;
                strVar += `                                    <\/div>`;
                strVar += `                                    <img src=\"${val.Poster}\" alt=\"\">`;
                strVar += `                                <\/div>`;
                strVar += `                                <div class=\"listing-content\">`;
                strVar += `                                    <div class=\"inner\">`;
                strVar += `                                        <h2 class=\"title\">${val.Title}<\/h2>`;
                strVar += `                                        <p>${val.Plot}<\/p>`;
                strVar += `                                        <a href=\"movie-detail.html?id=${val.imdbID}" class=\"btn btn-main btn-effect\">details<\/a>`;
                strVar += `                                    <\/div>`;
                strVar += `                                <\/div>`;
                strVar += `                            <\/div>`;
                strVar += `                        <\/div>`;
                strVar += `                    <\/div>`;

            if(isSeries){
                seriesListHtml+=strVar;
            }else{
                movieListHtml+=strVar;
            }
            })

            movieListHtml.split("\n").slice(1).join("\n")    
            if(isSeries){
                document.getElementById('seriesHolder').innerHTML=seriesListHtml;
            }else{
                document.getElementById('moviesHolder').innerHTML=movieListHtml;
            }
            // console.log(movieListHtml)
        }

        // renderMovies()
        
        /*----------------------------------------------------
        MOVIES DETAILS
        ----------------------------------------------------*/

        let movieSingle=[];

        if(window.location.href.includes("movie-detail")){
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const imbdID = urlParams.get('id')
            setTimeout(() => {
                getMovieData(imbdID)
                
            }, 1000);
        }

        function getMovieData(id){
          
            // alert(id)
            movieSingle=movieData.filter(val=>{
                return val.imdbID === id
            })
            if(movieSingle.length==0){
                movieSingle=seriesData.filter(val=>{
                    return val.imdbID === id
                })          
            console.log(movieSingle[0])

            return setMovieData(movieSingle[0], true);
            }

            console.log(movieSingle[0])
            setMovieData(movieSingle[0])
        }

        function setMovieData(val, isSeries=false){
            if(isSeries){
                document.getElementById('runtime').innerHTML=`${val.totalSeasons} seasons`;
            }else{
                document.getElementById('runtime').innerHTML=val.Runtime;
            }
            document.getElementById('movieTitle').innerHTML=val.Title;
            document.getElementById('rated').innerHTML=val.Rated;
            document.getElementById('genre').innerHTML=val.Genre;
            document.getElementById('releaseDate').innerHTML=val.Released;
            document.getElementById('release2').innerHTML=val.Released;
            document.getElementById('reviewRating').innerHTML=val.imdbRating;
            document.getElementById('imdbVotes').innerHTML=val.imdbVotes;
            document.getElementById('plot').innerHTML=val.Plot;
            document.getElementById('director').innerHTML=val.Director;
            document.getElementById('writer').innerHTML=val.Writer;
            document.getElementById('country').innerHTML=val.Country;
            document.getElementById('boxOffice').innerHTML=val.BoxOffice;
            document.getElementById('language').innerHTML=val.Language;
            document.getElementById('production').innerHTML=val.Production;
            document.getElementById('type').innerHTML=val.Type;
            document.getElementById('imagePoster').src=val.Poster;
            castRender(val.Actors.split(","))
            otherReviewRenderer(val.Ratings)

            
        }

        function castRender(arr){

            let castStr="";
            arr.map((val)=>{
                
                castStr+=`<li style="margin-left:20px">`
                castStr+=`                                <h6 class="name">${val}</h6>`
                castStr+=`                        </li>`
                
            })
            document.getElementsByClassName('cast-wrapper')[0].innerHTML=castStr;
        }

        function otherReviewRenderer(arr){

            let castStr="";
            arr.map((val)=>{
                
                castStr+=`<li style="margin-left:20px; list-style: none">`
                castStr+=`                                <h6 class="name">${val.Source}: <span>${val.Value}</span></h6>`
                castStr+=`                        </li>`
                
            })
            document.getElementById('otherReviews').innerHTML=castStr;
        }

  /*----------------------------------------------------
        MOVIES/SERIES NAV SLIDER
    ----------------------------------------------------*/

if(!window.location.href.includes('movie-detail'))    
{
const navBtns = document.querySelectorAll("nav.slider li");
const activeState = document.querySelector("nav.slider span");

const updateActiveState = function (e) {
  activeState.classList.add('d-block');
  let selectedEl = e.target;
  let activeEl = document.querySelector(".active");

  if (activeEl !== selectedEl) {
    //Get selected element properties
    let width = selectedEl.offsetWidth;
    let position = selectedEl.offsetLeft;

    //Set active element properties
    activeState.style.width = `${width}px`;
    activeState.style.left = `${position}px`;

    //Toggle active class
    activeEl.classList.remove("active");
    selectedEl.classList.add("active");
  }
};

//Add event listeners
for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", updateActiveState);
}

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('nav.slider').addClass('sticky')
    } else{
        $('nav.slider').removeClass('sticky')
    }
});

document.getElementById('seriesHolder').style.display="none";

document.getElementById('movies').addEventListener('click',(e)=>{
    document.getElementById('seriesHolder').style.display="none";
    document.getElementById('moviesHolder').style.display="flex";
})

document.getElementById('series').addEventListener('click',(e)=>{
    document.getElementById('moviesHolder').style.display="none";
    document.getElementById('seriesHolder').style.display="flex";
})
}
    }); //end of document ready function

})(jQuery);