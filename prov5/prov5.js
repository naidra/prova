function slider() {
	var div = document.querySelectorAll("section:nth-of-type(1) > div");
	var pp = document.querySelectorAll("span#span > div");
	var counter = 0;
	var verteta = true;


	function shkaClick(e) {
		if (e.target.classList.contains("de")) {
			clearInterval(inte);
			var q = e.target.getAttribute("data-dr");
			counter = q;

			for (var i = 0; i < div.length; i++) {
				if (counter !== i) {
					div[i].classList.remove("me");
					pp[i].classList.remove("ge");
				}
			}

			div[counter].classList.add("me");
			pp[counter].classList.add("ge");
			verteta = true;
			inte = setInterval(playSlider, 8000);
		}
	}

	function lPlay() {
		if (verteta === false) {counter = counter -2}
		else {counter--;}
		clearInterval(inte);
		if (counter < 0) counter = div.length -1;
		for (var i = 0; i < div.length; i++) {
			if (counter !== i) {
				div[i].classList.remove("me");
				pp[i].classList.remove("ge");
			}
		}

		div[counter].classList.add("me");
		pp[counter].classList.add("ge");
		verteta = true;
		inte = setInterval(playSlider, 8000);
	}
	function rPlay() {
		if (verteta === false) {counter = counter;}
		else {counter++;}
		clearInterval(inte);
		if (counter >= div.length) counter = 0;
		for (var i = 0; i < div.length; i++) {
			if (counter !== i) {
				div[i].classList.remove("me");
				pp[i].classList.remove("ge");
			}
		}

		div[counter].classList.add("me");
		pp[counter].classList.add("ge");
		verteta = true;
		inte = setInterval(playSlider, 8000);
	}

	function playSlider() {
		if (verteta === true) counter++;
		if (counter === div.length) counter = 0;
		for (var i = 0; i < div.length; i++) {
			if (counter !== i) {
				div[i].classList.remove("me");
				pp[i].classList.remove("ge");
			}
		}

		div[counter].classList.add("me");
		pp[counter].classList.add("ge");
		counter++;
		verteta = false;
	}
	
	var inte = setInterval(playSlider, 8000);
	document.getElementById("span").addEventListener("click", shkaClick);
	document.getElementById("nje").addEventListener("click", lPlay, false);
	document.getElementById("dy").addEventListener("click", rPlay, false);
}
function scro() {

	var stt = document.body.scrollTop || document.documentElement.scrollTop,
		sect = document.querySelectorAll("section"),
		pe = document.querySelectorAll("body > div:nth-of-type(1) > p");
	for(var i = 0; i < sect.length; i++) {
		if (stt >= sect[i].offsetTop && stt < sect[i].offsetTop + sect[i].offsetHeight) {
			pe[i].className = "pf";
		} else if (stt < sect[i].offsetTop || stt >= sect[i].offsetTop + sect[i].offsetHeight) {
			pe[i].className = "";
		}
	}

}

// easing functions http://goo.gl/5HLl8
Math.easeInCirc = function (t, b, c, d) {
	t /= d;
	return -c * (Math.sqrt(1 - t*t) - 1) + b;
};
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};

Math.inOutQuintic = function(t, b, c, d) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

function scrollTo(to, callback, duration) {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  function move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }
  function position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInCubic(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}
function shuk(e) {
	if (e.target.tagName === "P") {
		var dej = document.querySelectorAll('section');
		var ku = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
		var je = dej[ku].offsetTop;
  		scrollTo(je, null, 600);
	}
}
function neo(e) {
	if (e.target.className == "ka") {
		var tri = document.querySelectorAll("div#triplle > div[data-da]"),
			da = Array.prototype.indexOf.call(e.target.parentNode.parentNode.children, e.target.parentNode);
		if (e.target.parentNode.className == "open") {
			for (var i = 0; i < tri.length; i++) {
				tri[i].className = "";
			}
		} else {
			for (var i = 0; i < tri.length; i++) {
				if (da != i) {
					tri[i].className = "";
				}
			}
			tri[da].className = "open";
		}
	}
}

function zgidh() {
	var r = Math.floor(Math.random() * 7);
	document.getElementById("choose").className = "n" + r;
}

function izz() {
	var im = document.querySelector("section:nth-of-type(1) > div > img"),
		width = im.clientWidth,
		height = im.clientHeight,
		imgRatio = width/height,
		cropHeight = Math.floor(window.innerWidth/imgRatio);
	document.querySelector("section:nth-of-type(1)").style.height = cropHeight-10 + "px";
}

function alle() {
	slider();
	izz();
	document.addEventListener("scroll", scro, false);
	document.querySelector("body > div:nth-of-type(1)").addEventListener("click", shuk);
	document.getElementById("triplle").addEventListener("click", neo);
	document.getElementById("choose").addEventListener("click", zgidh);

	var event = document.createEvent('HTMLEvents');
	event.initEvent('scroll', true, false);
	document.dispatchEvent(event);
	window.addEventListener("resize", izz);

}

window.addEventListener("load", alle, false);