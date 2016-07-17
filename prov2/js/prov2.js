$.extend( $.easing,
{
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    }
});

/**************************************************
***************************************************
***************************************************
***************************************************
***************************************************
***************************************************
***************************************************
**************************************************/

$(function () {
	
	$(window).scroll(function () {

        //Nese fundi i webfaqes qe shihet eshte me i madh ose i  barabart me fillimin e sectionit
        //dhe nese fundi i webfaqes qe shihet eshte me i vogel se fillimi i sectionit dhe lartsia e sectionit
        //ateher varsisht se sa numer eshte sectioni ne renditje,
        //psh nese eshte sectioni i 3 ateher A-se se 3 i vendoset kjo css

	    var st = $(window).scrollTop();

	    $('#page section').each(function (index) {

	        var offsetTop = $(this).offset().top,
	            h = $(this).height();
	        if (st >= offsetTop && st < offsetTop + h) {
	            $('nav a').eq(index).css({
	                'border-bottom-width': '1px',
	                'border-top-width': '1px',
	                'color': '#fff'
	            });
	        } else {
	            $('nav a').eq(index).css({
	                'border-bottom-width': '0',
	                'border-top-width': '0',
	                'color': '#000'
	            });
	        }
	    });

	    if ($(window).scrollTop() > 240) {
	            $('nav').css({opacity: "0.7"});
	        }
	        else {
	        	$('nav').css({opacity: "1"})
	        }

        //Nese fundi i webfaqes qe shihet eshte me i madh se fundi i objektit
        //atehet objektit i vendoset qekjo css

        $('.contain > div').each( function(i){
                
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_object = $(this).offset().top /*+ $(this).height()*/;
                
            if( bottom_of_window > bottom_of_object ){
                    
                $(this).css({
                    transform: "scale(1)",
                    opacity: "1"
                });
                        
            }
                
        }); 

        if ($(window).scrollTop() > 800) {
                $('section:nth-of-type(4) h6').fadeIn("slow");
            }
            else {
                $('section:nth-of-type(4) h6').fadeOut("slow");
            }

	}).trigger('scroll');

    //Kur te klikon me t qu te qaj section dmth cilen A ta klikon
    //psh e klikon A e 3 t qon te sectioni i 3

	$('nav a').click(function () {
    /* click has no index argument compared to each() function 
    so we have to get it with index() */
    var index = $(this).index(),
        $target = $('#page section').eq(index); // find the target section
    //animate scrolling to the target section
    $('html, body').stop(true, true).animate({
	        scrollTop: $target.offset().top
	    }, 'slow');
	    return false;
	});

    $('section:nth-of-type(4) h6').click(function() {
        $('html, body').stop(true, true).animate({
            scrollTop: 0
        }, 'slow');
    })
	

	/**************************************************
	***************************************************
	**************************************************/

    //Menuja per telefon me e qit edhe me hek

    $('.gip > .rot .fa, nav > .gip > a').click(function() {
        $('nav').toggleClass("shoh");
        $('nav >.gip > .rot > .fa').toggleClass("fa-bars").toggleClass("fa-times");
    })



    /**************************************************
    ***************************************************
    **************************************************/

    //Slider

    $('#slider ul').css({ marginLeft: "-" + 100 + "%" });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: 100 + "%"
        }, 800, 'easeInOutCirc', function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: "-" + 100 + "%"
        }, 800, 'easeInOutCirc', function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        if(!$("#slider ul").is(":animated")) {
            moveLeft();
            clearInterval(interval);
            interval = setInterval(function () {
                moveRight();
            }, 8000);
            if($('#msg').length > 0) {
                $('#msg').html("");
            }
            showText("#msg", "Hello, World!", 0, 50);
        }
    });

    $('.control_next').click(function () {
        if(!$("#slider ul").is(":animated")) {
            moveRight();
            clearInterval(interval);
            interval = setInterval(function () {
                moveRight();
            }, 8000);
            if($('#msg').length > 0) {
                $('#msg').text("");
            }
            showText("#msg", "Hello, World!", 0, 50);
        }
    });


    var interval = setInterval(function () {
            moveRight();
            if($('#msg').length > 0) {
                $('#msg').text("");
            }
            showText("#msg", "Hello, World!", 0, 50);
        }, 8000);

    showText("#msg", "Hello, World!", 0, 100);

    /**************************************************
    ***************************************************
    **************************************************/

    $('.contain > div > a').live("click", function(e) {
        
          e.preventDefault();
        
            var image_href = $(this).attr("href");
            var image_tit = $(this).attr("title");

            if ($('.lightbox').length > 0) { // #lightbox exists

                $('.lightbox img').attr('src', image_href);

                $('.lightbox p').text(image_tit);

                $('.lightbox').fadeIn();
            }

            else { //#lightbox does not exist - create and insert (runs 1st time only)

                var lightbox = 
                '<div class="lightbox">' +
                    '<img src="' + image_href +'" />' +
                    '<p>' + image_tit +'</p>' +
                '</div>';

                $('body').append(lightbox);
            }

    });

    $('.lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
        $('.lightbox').fadeOut();
    });

    //Per me e qit edhe me hek divin ku kallxxon sa vizitor jan

    $('body').keypress(function(ev) {
        var keycode =(ev.keycode ? ev.keycode : ev.which);
        if(keycode == 81) {
            $('.count').toggleClass("dit");
        };
    })

});

/**************************************************
***************************************************
***************************************************
***************************************************
***************************************************
***************************************************
***************************************************
**************************************************/

//For showing letters one by ane

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

    /* For random colors

    var colours = ["#FDF200", "#1FDA9A", "#28ABE3"], idx;
    idx = Math.floor(Math.random() * colours.length);
    $('nav > h1').css({
    	"color": colours[idx]
    });*/