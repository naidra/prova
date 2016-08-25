(function() {
	function slider() {
		var div = document.querySelectorAll("section:nth-of-type(1) > div.fu");
		var pp = document.querySelectorAll("section:nth-of-type(1) > div:nth-of-type(5) > p");
		var counter = 0;
		var verteta;

		function shkaClick(e) {
			if(e.target.tagName === "P") {
				clearInterval(inte);
				var q = e.target.getAttribute("data-nr");
				counter = q;

				for (var i = 0; i < div.length; i++) {
					if (counter !== i) {
						div[i].classList.add("hide");
						pp[i].classList.add("pshow");
					}
				}

				div[counter].classList.remove("hide");
				pp[counter].classList.remove("pshow");
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
					div[i].classList.add("hide");
					pp[i].classList.add("pshow");
				}
			}

			div[counter].classList.remove("hide");
			pp[counter].classList.remove("pshow");
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
					div[i].classList.add("hide");
					pp[i].classList.add("pshow");
				}
			}

			div[counter].classList.remove("hide");
			pp[counter].classList.remove("pshow");
			verteta = true;
			inte = setInterval(playSlider, 8000);
		}

		function playSlider() {
			if (counter === div.length) {
				counter = 0;
			}
			for (var i = 0; i < div.length; i++) {
				if (counter !== i) {
					div[i].classList.add("hide");
					pp[i].classList.add("pshow");
				}
			}

			div[counter].classList.remove("hide");
			pp[counter].classList.remove("pshow");
			counter++;
			verteta = false;
		}
		
		var inte = setInterval(playSlider, 8000);
		document.querySelector("section:nth-of-type(1) > div:nth-of-type(5)").addEventListener("click", shkaClick, false);
		document.querySelector("section:nth-of-type(1) > p:nth-of-type(1)").addEventListener("click", lPlay, false);
		document.querySelector("section:nth-of-type(1) > p:nth-of-type(2)").addEventListener("click", rPlay, false);
	}

	function soo() {
		var stt = document.body.scrollTop || document.documentElement.scrollTop;
		document.querySelector(".h66").style.transform = "rotateZ(-" + stt/2 + "deg)";
		if(stt > 300) {
			document.querySelector(".h6u").style.opacity = "1";
			document.querySelector(".h66").style.opacity = "1";
			document.querySelector(".h6u").style.zIndex = "50";
			document.querySelector(".h66").style.zIndex = "50";
		} else {
			document.querySelector(".h6u").style.opacity = "0";
			document.querySelector(".h66").style.opacity = "0";
			document.querySelector(".h6u").style.zIndex = "-1";
			document.querySelector(".h66").style.zIndex = "-1";
		}
		
		
		var sec = document.querySelectorAll("section");
		var an = document.querySelectorAll("nav > div > a");
		if (window.innerWidth >= 650) {
			var pik = document.querySelectorAll("section:nth-of-type(1) > div");
			for (var i = 0; i < pik.length -1; i++) {
				pik[i].style.top = stt/5 + "px";
			}

			if (stt > 300) {
				document.querySelector("nav").style.height = "50px";
				document.querySelector("nav").style.background = "rgba(0,0,0,0.7)";
				document.querySelector("nav > div").style.background = "rgba(0,0,0,0.0)";
			} else {
				document.querySelector("nav").style.height = "80px";
				document.querySelector("nav").style.background = "rgba(0,0,0,0.0)";
				document.querySelector("nav > div").style.background = "rgba(0,0,0,0.7)";
			}
			
			for (var i = 0; i < sec.length; i++) {
				if (stt >= sec[i].offsetTop && stt < sec[i].offsetTop + sec[i].offsetHeight) {
					an[i].style.border = "2px solid #fff";
				} else if (stt >= sec[i].offsetTop + sec[i].offsetHeight || stt < sec[i].offsetTop) {
					an[i].style.border = "2px solid transparent";
				}
			}

			var shiv = document.querySelectorAll("section:nth-of-type(2) > div:nth-of-type(3) > div");
			for (var i = 0; i < shiv.length; i++) {
				if (stt + window.innerHeight > shiv[i].offsetTop + shiv[i].offsetHeight + 250) {
					shiv[i].style.transform = "scale(1)";
				}
			}

		} else if (window.innerWidth < 650) {
			for (var i = 0; i < sec.length; i++) {
				if (stt >= sec[i].offsetTop && stt < sec[i].offsetTop + sec[i].offsetHeight) {
					an[i].style.color = "green";
					an[i].style.borderLeft = "15px solid green";
				} else if (stt >= sec[i].offsetTop + sec[i].offsetHeight || stt < sec[i].offsetTop) {
					an[i].style.color = "#fff";
					an[i].style.borderLeft = "0px solid green";
				}
			}
			var shv = document.querySelectorAll("section:nth-of-type(2) > div:nth-of-type(3) > div");
			for (var i = 0; i < shv.length; i++) {
				if (stt + window.innerHeight > shv[i].offsetTop + shv[i].offsetHeight + 100) {
					shv[i].style.opacity = "1";
					shv[i].style.borderRadius = "0px";
				}
			}
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
	

	function menu() {
		if (window.innerWidth < 650) {
			var mee = document.querySelector("nav");
			if (mee.dataset.open === "no") {
				mee.style.left = "0px";
				document.querySelector("nav > span").classList.add("flap");
				document.querySelector("nav > div").style.transform = "rotateY(0deg)";
				document.querySelector("nav > span > div").style.background = "transparent";
				mee.dataset.open = "yes";
			} else {
				mee.style.left = "-220px";
				document.querySelector("nav > span").classList.remove("flap");
				document.querySelector("nav > div").style.transform = "rotateY(70deg)";
				document.querySelector("nav > span > div").style.background = "green";
				mee.dataset.open = "no";
			}
		}
	}
	function nry() {
		var nav = document.querySelector("nav");
		var dnav = document.querySelector("nav > div");
		if (window.innerWidth < 650) {
			nav.style.background = "#222";
			nav.style.height = "100vh";
			nav.style.width = "220px";
			dnav.style.transform = "translateY(0%)";
			dnav.style.background = "transparent";
		} else if (window.innerWidth >= 650) {
			nav.style.width = "100vw";
			nav.style.left = "0px";
			nav.style.height = "80px";
			nav.style.background = "transparent";
			dnav.style.width = "50%";
			dnav.style.transform = "translateY(-50%)";
			dnav.style.background = "rgba(0,0,0,0.7)";
			var sik = document.querySelectorAll("nav > div > a");
			for (var i = 0; i < sik.length; i++) {
				sik[i].style.border = "2px solid transparent";
			}
		}
	}
	function vaAjax() {
		var ajax;
		if(window.XMLHttpRequest) {
			ajax = new XMLHttpRequest();
		}
		return ajax;
	}

	function more() {
		document.querySelector("section:nth-of-type(2) > button").style.display = "none";
		var ajaxito = vaAjax();
		ajaxito.onreadystatechange = function() {
			if(ajaxito.readyState==4 && ajaxito.status==200) {
				document.querySelector("section:nth-of-type(2) > div:nth-of-type(3)").innerHTML += ajaxito.responseText;
				//trigger scroll
				var event = document.createEvent('HTMLEvents');
				event.initEvent('scroll', true, false);
				document.dispatchEvent(event);
			}
		}
		ajaxito.open("POST", "load.html", true);
		ajaxito.send();
	}
	function pup(e) {
		if (e.target.tagName === "I" && e.target.classList.contains("fa-eye")) {
			e.preventDefault();
			var div = document.createElement("div");
			div.className = "mfoto";
			var bod = document.querySelector("body");
			bod.insertBefore(div, bod.firstChild);

			var img = document.createElement("img");
			img.src = e.target.parentNode.getAttribute("href");
			div.appendChild(img);

			var par = document.createElement("p");
			par.innerText = e.target.parentNode.getAttribute("data-t");
			div.appendChild(par);

			if (div) {
				div.addEventListener("click", function() {
					div.parentNode.removeChild(div);
				}, false);
			}
		}
	}

	function slip() {
		var dee = document.querySelector("div.days"),
			d = new Date(),
			dd = d.getDay(),
			dNames = ["Diele", "Hëne", "Marte", "Mërkure", "Enjte", "Premte", "Shtune"],
			die = d.getHours();
			if (die < 12) dee.innerHTML = "<p>Mirmëngjesi, ju dëshirojmë një të <span>" + dNames[dd] + "</span> të mirë.</p>";
			else if (die >= 12 && die < 19) dee.innerHTML = "<p>Mirëdita, kaloni një të <span>" + dNames[dd] + "</span> të këndshme.</p>";
			else if (die >= 19) dee.innerHTML = "<p>Mirëmbrëma, kaloni një të <span>" + dNames[dd] + "</span> të mirë.</p>";
		setTimeout(function() {
			dee.style.opacity = "0";
			dee.style.left = "100%";
			dee.style.transform = "scale(0.3)";
			setTimeout(function(){dee.style.display = "none";}, 500);
		},3000);
	}

	function nis() {
		var allP = document.querySelectorAll("section");
		var ppp = 0;
		setInterval(function() {
			document.querySelector("section:nth-of-type(2) > div:nth-of-type(2) > p").innerHTML = "";
			if (ppp == allP.length) ppp = 0;
			var sling = allP[ppp].getAttribute("data-tx");
			var count = 0;
			var set = setInterval(function() {
				if (count == sling.length - 1) clearInterval(set);
				var io = sling.charAt(count);
				document.querySelector("section:nth-of-type(2) > div:nth-of-type(2) > p").innerHTML += io;
				count++;
				//console.log(count);
			}, 100);
			ppp++;
		}, 9000);
	}


	function all() {
		
		slider();
		document.addEventListener("scroll", soo, false);
		document.querySelector(".h6u").addEventListener("click", function(){upp(500)}, false);
		document.querySelector("nav > div").addEventListener("click", shuk, false);
		document.querySelector("nav > span").addEventListener("click", menu, false);
		var ali = document.querySelectorAll("nav > div > a");
		for (var i = 0; i < ali.length; i++) {
			ali[i].addEventListener("click", menu, false);
		}
		window.addEventListener("resize", nry, false);
		document.querySelector("section:nth-of-type(2) > button").addEventListener("click", more, false);
		document.addEventListener("click", pup, false);

		var event = document.createEvent('HTMLEvents');
		event.initEvent('scroll', true, false);
		document.dispatchEvent(event);
		slip();
		nis();
	}

	window.addEventListener("load", all, false);
})();