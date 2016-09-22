<?php

	if(!isset($_COOKIE["lastVisited"])) {
		$counter_name = "counter.txt";
	    if (!file_exists($counter_name)) {
			$f = fopen($counter_name, "w");
			fwrite($f,"0");
			fclose($f);
		} else {
			// Read the current value of our counter file
			$f = fopen($counter_name,"r");
			$counterVal = fread($f, filesize($counter_name));
			fclose($f);

			$counterVal++;
			$f = fopen($counter_name, "w");
			fwrite($f, $counterVal);
			fclose($f);
		}
	}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Boni Gurë-punues</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" href="img/ed.png" type="img/x-icon">
		<link rel="stylesheet" type="text/css" href="font-awesome-4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="prov6.css">
		<script src="prov6.js"></script>
	</head>
	<body id="body">
		<span><div></div></span>
		<nav data-open="no">
			<div>
				<h2 data-ku="0">Ballina</h2>
				<h2 data-ku="1">Permbajtja</h2>
				<h2 data-ku="2">Kontakti</h2>
			</div>
		</nav>
		<section data-tx="Punojmë mure prej guri.">
			<div class="meek">
				<img src="img/par.jpg">
				<div></div>
				<h2>Gurë-punues</h2>
			</div>
			<div>
				<img src="img/dyt.jpg">
				<div></div>
				<h2>Boni</h2>
			</div>
			<div>
				<img src="img/tret.jpg">
				<div></div>
				<h2>Gurë-punues</h2>
			</div>
			<div>
				<img src="img/kater.jpg">
				<div></div>
				<h2>Boni</h2>
			</div>
			<p><i class="fa fa-angle-double-left"></i></p>
			<p><i class="fa fa-angle-double-right"></i></p>
			<span>
				<p data-nr="0" class="pip"></p>
				<p data-nr="1"></p>
				<p data-nr="2"></p>
				<p data-nr="3"></p>
			</span>
		</section>
		<section data-tx="Punojmë shkallë prej guri.">
			<div>
				<div id="delta">
					<p>Boni Gurë-punues.</p>
				</div>
			</div>
			<div id="dv3">
				<span>
					<h5 class="pak" data-r="0">Shkallë</h5>
					<h5 data-r="1">Mure</h5>
					<h5 data-r="2">Oborre</h5>
				</span>
				<div>
					<div><img src="img/shkall1.jpg"><i data-li="img/shkall1.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/shkall2.jpg"><i data-li="img/shkall2.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/shkall3.jpg"><i data-li="img/shkall3.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/shkall4.jpg"><i data-li="img/shkall4.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/shkall5.jpg"><i data-li="img/shkall5.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/shkall6.jpg"><i data-li="img/shkall6.jpg" class="fa fa-external-link"></i></div>
					<h5 data-load="load1.html">Më shumë</h5>
				</div>
				<div class="hekk">
					<div><img src="img/mur1.jpg"><i data-li="img/mur1.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/mur2.jpg"><i data-li="img/mur2.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/mur3.jpg"><i data-li="img/mur3.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/mur4.jpg"><i data-li="img/mur4.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/mur5.jpg"><i data-li="img/mur5.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/mur6.jpg"><i data-li="img/mur6.jpg" class="fa fa-external-link"></i></div>
					<h5 data-load="load2.html">Më shumë</h5>
				</div>
				<div class="hekk">
					<div><img src="img/oborr1.jpg"><i data-li="img/oborr1.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/oborr2.jpg"><i data-li="img/oborr2.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/oborr3.jpg"><i data-li="img/oborr3.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/oborr4.jpg"><i data-li="img/oborr4.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/oborr5.jpg"><i data-li="img/oborr5.jpg" class="fa fa-external-link"></i></div>
					<div><img src="img/oborr6.jpg"><i data-li="img/oborr6.jpg" class="fa fa-external-link"></i></div>
					<h5 data-load="load3.html">Më shumë</h5>
				</div>
			</div>
			<div id="cokk">
				<?php
					$counter_name = "counter.txt";
					$f = fopen($counter_name,"r");
					$counterVal = fread($f, filesize($counter_name));
					echo "<p>Faqja u vizitua <span>".$counterVal."</span> herë.</p>";
					fclose($f);
				?>
			</div>
		</section>
		<section data-tx="Punojmë fontana prej guri etj.">
			<div>
				<span>
					<p>044-632-604 / 049-632-604</p>
					<p>044-255-716 / 049-292-942</p>
					<a href="https://www.facebook.com/Boni-Gure-Punues-632588020206093/?fref=ts" target="_blank"><i class="fa">&#xf09a;</i></a>
				</span>
			</div>
			<i id="up" class="fa fa-long-arrow-up"></i>
		</section>
	</body>
</html>