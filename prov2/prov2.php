<?php
    session_start();
	$counter_name = "counter.txt";
	// Check if a text file exists. If not create one and initialize it to zero.
	if (!file_exists($counter_name)) {
	  $f = fopen($counter_name, "w");
	  fwrite($f,"0");
	  fclose($f);
	}
	// Read the current value of our counter file
	$f = fopen($counter_name,"r");
	$counterVal = fread($f, filesize($counter_name));
	fclose($f);
	// Has visitor been counted in this session?
	// If not, increase counter value by one
	if(!isset($_SESSION['hasVisited'])){
	  $_SESSION['hasVisited']="yes";
	  $counterVal++;
	  $f = fopen($counter_name, "w");
	  fwrite($f, $counterVal);
	  fclose($f);
	}
?>
<!doctype html>
<html>
<head><title>Prov2</title></head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="icon" href="img/ed.png" type="img/x-icon" />
<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400italic,700,700italic,300italic,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="prov2.css">
<link rel="stylesheet" type="text/css" href="font-awesome-4.5.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/naknak.js"></script>
<script type="text/javascript" src="js/prov2.js"></script>
<body>
	<nav>
		<h1>LOGO</h1>
		<div class="gip">
			<a href="#">HOME</a>
			<a href="#">About</a>
			<a href="#">Qabout</a>
			<a href="#">Contact</a>
		<span class="rot"><i class="fa fa-bars"></i></span>
		</div>
	</nav>
    <div id="page">
    	<section>
    		<div id="slider">
    		<div class="fit"></div>
    		<p id="msg"></p>
			  <p class="control_next"><i class="fa fa-angle-double-right"></i></p>
			  <p class="control_prev"><i class="fa fa-angle-double-left"></i></p>
			  <ul>
			    <li>
			    	<img src="img/img1.jpg">
			    </li>
			    <li>
			    	<img src="img/img2.jpg">
			    </li>
			    <li>
			    	<img src="img/img3.jpg">
			    </li>
			    <li>
			    	<img src="img/img4.jpg">
			    </li>
			    <li>
			    	<img src="img/img5.jpg">
			    </li>
			    <li>
			    	<img src="img/img6.jpg">
			    </li>
			  </ul>  
			</div>
    	</section>
    	<section>
        <div class="count">
            <p>Web faqja u vizitua <?php echo $counterVal; ?> herë.</p>
        </div>
    	<h4>About</h4>
    		<div class="contain">
    			<div>
    				<img src="img/img1.jpg">
    				<a href="img/img1.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/img2.jpg">
    				<a href="img/img2.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/img3.jpg">
    				<a href="img/img3.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/img4.jpg">
    				<a href="img/img4.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/img5.jpg">
    				<a href="img/img5.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/img6.jpg">
    				<a href="img/img6.jpg"><i class="fa fa-external-link"></i></a>
    			</div>
    		</div>
    	</section>
    	<section>
    		<h4>Qabout</h4>
    		<div class="contain">
    			<div>
    				<img src="img/imgg1.png">
    				<a href="img/imgg1.png"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/imgg2.png">
    				<a href="img/imgg2.png"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/imgg3.png">
    				<a href="img/imgg3.png"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/imgg4.png">
    				<a href="img/imgg4.png"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/imgg5.png">
    				<a href="img/imgg5.png"><i class="fa fa-external-link"></i></a>
    			</div>
    			<div>
    				<img src="img/imgg6.png">
    				<a href="img/imgg6.png"><i class="fa fa-external-link"></i></a>
    			</div>
    		</div>
    	</section>
    	<section></section>
    </div>
</body>
</html>