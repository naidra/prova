(function() {
	function slide2() {

		var slider2 = document.getElementById('iko');
		var originalClass = slider2.getElementsByClassName('pics');
		var sliderNav = document.getElementById('vovo');
		var links = sliderNav.getElementsByTagName('p');
		var counter = 0;

		function whatClicked(e){
			if(e.target.tagName === "P") {
				var current = e.target.getAttribute("data-nr");
				clearInterval(inito);
				counter = current;

				for (var i = 0; i < originalClass.length; i++) {
					if(i != counter) {
						originalClass[i].classList.add("hide");
						links[i].classList.remove("current");
					}
				}

				if (counter === originalClass.length) {
					counter = 0;
				}
				originalClass[counter].classList.remove("hide");
				links[counter].classList.add("current");
				counter++;
				inito = setInterval(playSlider, 5000);
			}
		}

		sliderNav.addEventListener("click", whatClicked, false);
		var inito = setInterval(playSlider, 5000);

		function playSlider() {
			for (var i = 0; i < originalClass.length; i++) {
				originalClass[i].classList.add("hide");
				links[i].classList.remove("current");
			}
			if(counter === originalClass.length) {
				counter = 0;
			}
			originalClass[counter].classList.remove("hide");
			links[counter].classList.add("current");
			counter++;
		}

	}
	
	function $l(qa) {
		return document.querySelector(qa);
	}

	function shi() {
		$l('nav').classList.toggle("rrutllo");
	    $l('body > h1 > .fa').classList.toggle("fa-bars");
	    $l('body > h1 > .fa').classList.toggle("fa-times");
	}
	function fboto(e) {
		e.preventDefault();
		if(e.target.tagName === "I") {
			var myElement = document.createElement('div');
			myElement.className = "mfoto";
			var tarr = $l("body");
			tarr.insertBefore(myElement, tarr.firstChild);

			var myImg = document.createElement('img');
			myImg.src = e.target.parentNode.getAttribute("href");
			myElement.appendChild(myImg);

			var myP = document.createElement('p');
			myP.innerText = e.target.parentNode.getAttribute("data-ss");
			myElement.appendChild(myP);
		}
		if(myElement) {
			myElement.addEventListener("click", function() {
				myElement.parentNode.removeChild(myElement);
			}, false);
		}
	}
	function nalt(scrollDuration) {
	    var scrollStep = -window.scrollY / (scrollDuration / 15);
	    var scrollInterval = setInterval(function(){
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval); 
	    },15);
	}
	function scroo() {
		//document.documentElement eshte HTML
		//document.body eshte body

	    var hht = document.body.offsetHeight;
	    var stt = document.body.scrollTop || document.documentElement.scrollTop;


	    if(stt > 600) {
	    	$l('body > h6').classList.remove("hideup");
	    } else {
	    	$l('body > h6').classList.add("hideup");
	    }
	    var aaa = document.querySelectorAll('nav > div > a');
	    var diid = document.querySelectorAll('section');
		for(var i = 0; i < diid.length; i++) {
			var ell = diid[i].offsetTop;
			if (stt >= ell && stt < ell + diid[i].offsetHeight) {
				var aja = diid[i].getAttribute("data-w");
				aaa[aja].style.color = "#39f";
				aaa[aja].style.borderBottom = "3px solid #39f";
			} else if (stt >= ell + diid[i].offsetHeight || stt < ell) {
				var aja = diid[i].getAttribute("data-w");
				aaa[aja].style.color = "#fff";
				aaa[aja].style.borderBottom = "0px solid #39f";
			}
		}

		if (window.innerWidth < 600) {

			var fofo = document.querySelectorAll('section:nth-of-type(2) > div:nth-of-type(2) > .fofo');
			for(var i = 0; i < fofo.length; i++) {
				var ell = fofo[i].offsetTop;
				if (stt + window.innerHeight >= ell && stt + window.innerHeight > ell + fofo[i].offsetHeight) {
					fofo[i].style.transform = "translateX(-50%) scale(1)";
				} else if (stt + window.innerHeight < ell) {
					fofo[i].style.transform = "translateX(-50%) scale(0)";
				}
			}
			

		} else if (window.innerWidth >= 600) {

			var fofo = document.querySelectorAll('section:nth-of-type(2) > div:nth-of-type(2) > .fofo');
			for(var i = 0; i < fofo.length; i++) {
				var ell = fofo[i].offsetTop;
				if (stt >= ell && stt  > ell + fofo[i].offsetHeight + 300) {
					fofo[i].style.transform = "scale(1)";
				} else if (stt < ell) {
					fofo[i].style.transform = "scale(0)";
				}
			}

		    //$l("section:nth-of-type(3)").style.backgroundPosition = -(stt * 0.2) + 'px';
		    $l("section:nth-of-type(3) div div:nth-of-type(1)").style.left = -(hht - stt - window.innerHeight) + "px";
		    $l("section:nth-of-type(3) div div:nth-of-type(2)").style.right = -(hht - stt - window.innerHeight) + "px";
		    
		    if(stt > 60) {
		    	$l('nav').style.background = "rgba(26,26,26, 1)";
		    	$l('nav').style.height = "50px";
		    } else {
		    	$l('nav').style.background = "rgba(26,26,26, 0)";
		    	$l('nav').style.height = "60px";
		    }
	
			var percent = (document.documentElement.scrollTop + document.body.scrollTop) / 
			(document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

		    $l('.keke').style.width = percent + "%";

		    if(percent < 70) {
		    	$l('.keke').style.background = "#3754E1";
		    } else {
		    	$l('.keke').style.background = "#FB0140";
		    }
		}
	}

	function shuk(e) {
		if (e.target.tagName === "A") {
			e.preventDefault();
			var dej = document.querySelectorAll('section');
			var ku = e.target.getAttribute("data-ku");
			var je = dej[ku].offsetTop;
			if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	  			scrollTo(document.documentElement, je, 600);
	  		} else {
	  			scrollTo(document.body, je, 600);
	  		}
		}
	}
	
	function scrollTo(element, to, duration) {
	  if (duration <= 0) return;
	  var difference = to - element.scrollTop;
	  var perTick = difference / duration * 15;

	  setTimeout(function() {
	    element.scrollTop = element.scrollTop + perTick;
	    if (element.scrollTop === to) return;
	    scrollTo(element, to, duration - 15);
	  }, 10);
	}




	function cllikat() {
		//menyra addeventlistener me foreach call
		var menu = document.querySelectorAll('body > h1, nav > div > a');
		[].forEach.call(menu, function(me) {
			me.addEventListener("click", shi, false );
		});
		//menyra addeventlistener me for loop
		var boto = document.querySelectorAll('section:nth-of-type(2) > div:nth-of-type(2) > .fofo > a');
		for(var i = 0; i < boto.length; i++) {
			boto[i].addEventListener("click", fboto, false );
		}
		document.addEventListener("scroll", scroo, false);
		slide2();
		//njejt me trigger n jquery
		var event = document.createEvent('HTMLEvents');
		event.initEvent('scroll', true, false);
		document.dispatchEvent(event);

		document.querySelector('body > h6').addEventListener("click", function(){nalt(500)}, false);
		document.querySelector('nav > div').addEventListener("click", shuk, false);
	}

	window.addEventListener("load", cllikat, false);

})();//funksion qe ekzekutohet pa e thirr, bahet per mos me tu perzi variablat globale, mrena funksionit jan lokale

/**************************************************
***************************************************
**************************************************/

$.extend( $.easing,
{
    easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
});

$(function() {
	
	$(window).scroll(function () {

        //Nese fundi i webfaqes qe shihet eshte me i madh ose i  barabart me fillimin e sectionit
        //dhe nese fundi i webfaqes qe shihet eshte me i vogel se fillimi i sectionit dhe lartsia e sectionit
        //ateher varsisht se sa numer eshte sectioni ne renditje,
        //psh nese eshte sectioni i 3 ateher A-se se 3 i vendoset kjo css

	});

	//kur ta prek me t'qu te qaj section



	//Prov edhe kjo
	/*
	$('nav a').click(function() {

		var ind = $(this).index(),
			$target = $('section').eq(ind);

		$('html, body').stop(true, true).animate({
			scrollTop: $target.offset().top
		}, 'slow');

		return false;
	});
	
	$('body > h1, nav > div > a').click(function() {
        $('nav').toggleClass("rrutllo");
        $('body > h1 > .fa').toggleClass("fa-bars").toggleClass("fa-times");
    });

	
    $('.shekk').click(function() {
    	var datta = $(this).data("qkado");
    	$(this).html(datta);
    	alert(datta);
    });
    */

    /**************************************************
    ***************************************************
    **************************************************/

    //Slider

    $('.slider3 ul').css({ marginLeft: "-" + 100 + "%" });
    $('.slider3 ul li:last-child').prependTo('.slider3 ul');

    function moveLeft() {
        $('.slider3 ul').animate({
            left: 100 + "%"
        }, 800, 'easeOutQuint', function () {
            $('.slider3 ul li:last-child').prependTo('.slider3 ul');
            $('.slider3 ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider3 ul').animate({
            left: "-" + 100 + "%"
        }, 800, 'easeOutQuint', function () {
            $('.slider3 ul li:first-child').appendTo('.slider3 ul');
            $('.slider3 ul').css('left', '');
        });
    };

    var interval = setInterval(function () {
            moveRight();
        }, 8000);
    
    $('.control_prev').click(function () {
    	if(!$(".slider3 ul").is(":animated")) {
	        moveLeft();
	        clearInterval(interval);
	        interval = setInterval(function () {
	            moveRight();
	        }, 8000);
	    }
    });

    $('.control_next').click(function () {
    	if(!$(".slider3 ul").is(":animated")) {
	        moveRight();
	        clearInterval(interval);
	        interval = setInterval(function () {
	            moveRight();
	        }, 8000);
	    }
    });
});
