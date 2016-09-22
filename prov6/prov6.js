function slider() {
		var div = document.querySelectorAll("section:nth-of-type(1) > div");
		var pp = document.querySelectorAll("section:nth-of-type(1) > span > p");
		var counter = 0;
		var verteta;

		(function() {
			for (var i = 0; i < div.length; i++) {
				if (counter !== i) {
					div[i].classList.add("meek");
					pp[i].classList.remove("pip");
				}
			}

			div[counter].classList.remove("meek");
			pp[counter].classList.add("pip");
		})();

		function shkaClick(e) {
			if(e.target.tagName === "P") {
				clearInterval(inte);
				var q = e.target.getAttribute("data-nr");
				counter = q;

				for (var i = 0; i < div.length; i++) {
					if (counter !== i) {
						div[i].classList.add("meek");
						pp[i].classList.remove("pip");
					}
				}

				div[counter].classList.remove("meek");
				pp[counter].classList.add("pip");
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
					div[i].classList.add("meek");
					pp[i].classList.remove("pip");
				}
			}

			div[counter].classList.remove("meek");
			pp[counter].classList.add("pip");
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
					div[i].classList.add("meek");
					pp[i].classList.remove("pip");
				}
			}

			div[counter].classList.remove("meek");
			pp[counter].classList.add("pip");
			verteta = true;
			inte = setInterval(playSlider, 8000);
		}

		function playSlider() {
			if (counter === div.length) {
				counter = 0;
			}
			for (var i = 0; i < div.length; i++) {
				if (counter !== i) {
					div[i].classList.add("meek");
					pp[i].classList.remove("pip");
				}
			}

			div[counter].classList.remove("meek");
			pp[counter].classList.add("pip");
			counter++;
			verteta = false;
		}
		
		var inte = setInterval(playSlider, 8000);
		document.querySelector("section:nth-of-type(1) > span").addEventListener("click", shkaClick, false);
		document.querySelector("section:nth-of-type(1) > p:nth-of-type(1)").addEventListener("click", lPlay, false);
		document.querySelector("section:nth-of-type(1) > p:nth-of-type(2)").addEventListener("click", rPlay, false);
	}

	function scro() {
		var stt = document.body.scrollTop || document.documentElement.scrollTop;
		var sec = document.querySelectorAll("section");
		var an = document.querySelectorAll("nav > div > h2");
		for (var i = 0; i < sec.length; i++) {
			if (stt >= sec[i].offsetTop && stt < sec[i].offsetTop + sec[i].offsetHeight) {
				an[i].classList.add("ga");
			} else if (stt >= sec[i].offsetTop + sec[i].offsetHeight || stt < sec[i].offsetTop) {
				an[i].classList.remove("ga");
			}
		}
		if (window.innerWidth >= 650) {

			var pik = document.querySelectorAll("section:nth-of-type(1) > div");
			for (var i = 0; i < pik.length; i++) {
				pik[i].style.top = stt/5 + "px";
			}

		} else if (window.innerWidth < 650) {

		}

		if (stt > 400) {
			document.getElementById("up").style.opacity = "1";
			document.getElementById("up").style.zIndex = "1";
		} else {
			document.getElementById("up").style.opacity = "0";
			document.getElementById("up").style.zIndex = "-1";
		}
	}

	function scrollTo(element, to, duration) {
	  	if (duration <= 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 15;

		setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to || element.scrollTop + window.innerHeight === element.scrollHeight) return;
			scrollTo(element, to, duration - 15);
		}, 10);
	}
	function shuk(e) {
		if (e.target.tagName == "H2") {
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

	function menu() {
		if (window.innerWidth < 650) {
			var mee = document.querySelector("nav");
			if (mee.dataset.open === "no") {
				mee.style.height = "100vh";
				mee.style.opacity = "1";
				document.querySelector("nav > div").classList.add("del");
				document.querySelector("body > span").classList.add("flap");
				mee.dataset.open = "yes";
			} else {
				mee.style.height = "0px";
				mee.style.opacity = "0";
				document.querySelector("nav > div").classList.remove("del");
				document.querySelector("body > span").classList.remove("flap");
				mee.dataset.open = "no";
			}
		}
	}

	function nis() {
		var allP = document.querySelectorAll("section");
		var ppp = 0;
		setInterval(function() {
			document.querySelector("section:nth-of-type(2) > div:nth-of-type(1) > div > p").innerHTML = "";
			if (ppp == allP.length) ppp = 0;
			var sling = allP[ppp].getAttribute("data-tx");
			var count = 0;
			var set = setInterval(function() {
				if (count == sling.length - 1) clearInterval(set);
				var io = sling.charAt(count);
				document.querySelector("section:nth-of-type(2) > div:nth-of-type(1) > div > p").innerHTML += io;
				count++;
				//console.log(count);
			}, 100);
			ppp++;
		}, 9000);
	}

	function tjet(e) {
		if (e.target.tagName == "H5") {
			var ki = e.target.getAttribute("data-r"),
				qek = document.querySelectorAll("section:nth-of-type(2) > div:nth-of-type(2) > div"),
				bot = document.querySelectorAll("section:nth-of-type(2) > div:nth-of-type(2) > span > h5");
			for (var i = 0; i < qek.length; i++) {
				if (i != ki) {
					qek[i].classList.add("hekk");
					bot[i].classList.remove("pak");
				}
			}
			qek[ki].classList.remove("hekk");
			e.target.classList.add("pak");
		}
	}

	function vaAjax() {
		var ajax;
		if(window.XMLHttpRequest) {
			ajax = new XMLHttpRequest();
		}
		return ajax;
	}
	function more(e) {
		var target = e.target,
			ki = target.getAttribute("data-load");
		target.style.display = "none";
		var ajaxito = vaAjax();
		ajaxito.onreadystatechange = function() {
			if(ajaxito.readyState==4 && ajaxito.status==200) {
				target.parentNode.innerHTML += ajaxito.responseText;
			}
		}
		ajaxito.open("POST", ki, false);
		ajaxito.send(null);
	}

	function pup(e) {
		if (e.target.tagName === "I" && e.target.classList.contains("fa-external-link")) {
			var div = document.createElement("div");
			div.className = "mfoto";

			var img = document.createElement("img");
			img.src = e.target.getAttribute("data-li");
			div.appendChild(img);

			var bod = document.querySelector("body");
			bod.insertBefore(div, bod.firstChild);
			if (div) {
				div.addEventListener("click", function() {
					div.parentNode.removeChild(div);
				}, false);
			}
		}
	}

	var moveForce = 20; // max popup movement in pixels
	var rotateForce = 10; // max popup rotation in deg
	function leviz(e) {
		if (window.innerWidth >= 650) {
		    var docX = window.innerHeight;
		    var docY = window.innerWidth;
		    
		    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
		    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
		    
		    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
		    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
		    
		    var delta = document.getElementById("delta");
		    delta.style.left =  moveX + "px";
		    delta.style.top =  moveY + "px";
		    delta.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
		}
	}
	function upp(scrollDuration) {
		var scrollStep = -window.scrollY / (scrollDuration / 15);
	    var scrollInterval = setInterval(function(){
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval);
	    },15);
	}

	function rando() {
		var r = Math.floor(Math.random() * 255),
			g = Math.floor(Math.random() * 255),
			b = Math.floor(Math.random() * 255);
		document.getElementById("up").style.color = "rgb(" + r + "," + g + "," + b + ")";
	}

	//COOKIES
	//COOKIES
	//COOKIES

	function setCookies(name, value, path, expires) {
		value = escape(value);

		if (!expires) {
			var now = new Date();
			now.setMonth(now.getMonth() + 6);
			expires = now.toUTCString();
		}

		if (path) path = ";Path=" + path;

		document.cookie = name + "=" + value + ";expires=" + expires + path;
	}

	function getCookieValue(name) {
		var value = document.cookie,
			cookieStartsAt = value.indexOf(" " + name + "=");

		if (cookieStartsAt == -1) {
			cookieStartsAt = value.indexOf(name + "=");
		}

		if (cookieStartsAt == -1) {
			value = null;
		} else {
			cookieStartsAt = value.indexOf("=", cookieStartsAt) + 1;
			var cookieEndsAt = value.indexOf(";", cookieStartsAt);

			if (cookieEndsAt == -1) cookieEndsAt = value.length;

			value = unescape(value.substring(cookieStartsAt, cookieEndsAt));
		}
		return value;
	}

	function cook() {
		var lastVisit = getCookieValue("lastVisited");
		if (!lastVisit) {
			var d = new Date();
			d.setMonth(d.getMonth() + 6);
			setCookies("lastVisited", d.toUTCString());
		}
	}

	function cokk(e) {
		var keycode = e.keycode ? e.keycode : e.which;
        if(keycode == 81) {
        	document.getElementById("cokk").classList.toggle("sh");
        }
	}


function allt() {
	slider();
	document.addEventListener("scroll", scro, false);
	document.querySelector("nav > div").addEventListener("click", shuk, false);
	document.querySelector("body > span").addEventListener("click", menu, false);
	var ing = document.querySelectorAll("nav > div > h2");
	for (var i = 0; i < ing.length; i++) {
		ing[i].addEventListener("click", menu, false);
	}
	document.querySelector("section:nth-of-type(2) > div:nth-of-type(2) > span").addEventListener("click", tjet, false);
	var ino = document.querySelectorAll("section:nth-of-type(2) > div:nth-of-type(2) > div > h5");
	for (var i = 0; i < ino.length; i++) {
		ino[i].addEventListener("click", more, false);
	}
	document.getElementById("dv3").addEventListener("click", pup, false);
	document.addEventListener("mousemove", leviz, false);
	document.getElementById("up").addEventListener("click", function(){upp(500)}, false);
	document.addEventListener("keypress", cokk, false);

	var event = document.createEvent('HTMLEvents');
	event.initEvent('scroll', true, false);
	document.dispatchEvent(event);
	nis();
	rando();
	cook();
}

window.addEventListener("load", allt, false);