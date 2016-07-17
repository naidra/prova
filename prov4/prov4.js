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
			for (var i = 0; i < div.length; i++) {
				div[i].classList.add("hide");
				pp[i].classList.add("pshow");
			}

			if (counter < 0) counter = div.length -1;
			div[counter].classList.remove("hide");
			pp[counter].classList.remove("pshow");
			verteta = true;
			inte = setInterval(playSlider, 8000);
		}
		function rPlay() {
			if (verteta === false) {counter = counter;}
			else {counter++;}
			clearInterval(inte);
			for (var i = 0; i < div.length; i++) {
				div[i].classList.add("hide");
				pp[i].classList.add("pshow");
			}

			if (counter >= div.length) counter = 0;
			div[counter].classList.remove("hide");
			pp[counter].classList.remove("pshow");
			verteta = true;
			inte = setInterval(playSlider, 8000);
		}

		function playSlider() {
			for (var i = 0; i < div.length; i++) {
				div[i].classList.add("hide");
				pp[i].classList.add("pshow");
			}
			if (counter === div.length) {
				counter = 0;
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
		document.querySelector(".h66").style.transform = "rotateZ(-" + stt + "deg)";
		if(stt > 300) {
			document.querySelector(".h6u").classList.add("sshoh");
			document.querySelector(".h66").classList.add("sshoh");
		} else {
			document.querySelector(".h6u").classList.remove("sshoh");
			document.querySelector(".h66").classList.remove("sshoh");
		}
		
		if (window.innerWidth >= 600) {
			var pik = document.querySelectorAll("section:nth-of-type(1) > div");
			for (var i = 0; i < pik.length -1; i++) {
				pik[i].style.top = stt/5 + "px";
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



	function all() {
		slider();
		document.addEventListener("scroll", soo, false);
		document.querySelector(".h6u").addEventListener("click", function(){upp(500)}, false);

	}

	window.addEventListener("load", all, false);
})();