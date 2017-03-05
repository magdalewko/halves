function moveMe(circle){
	
	var moon = circle;
	//var boxy = document.getElementsByClassName("box");
	var rightmoon = moon.getElementsByClassName("box1Right")[0];
	var leftmoon = moon.getElementsByClassName("box1Left")[0];
	var kernel = moon.getElementsByClassName("circle")[0];	
	kernel.style.width = "220px";
	kernel.style.height = "220px";
	//kernel.style.borderRadius = "240px";
	kernel.style.transform = "translateX(-10px) translateY(-50px)";
	kernel.style.webkitTransition = "all 0.4s ease-out";
	
	
	//rightmoon.style.backgroundColor ="pink";
	rightmoon.style.opacity = "0.9";
	rightmoon.style.transform = "translateY(60px)";
	rightmoon.style.transform += "rotate(60deg)";
	rightmoon.style.webkitTransition = "all 0.4s ease-out";
	
	
	leftmoon.style.opacity = "0.9";
	leftmoon.style.transform = "translateY(60px)";
	leftmoon.style.transform += "rotate(-60deg)";
	leftmoon.style.webkitTransition = "all 0.4s ease-out";
	
	kernel.getElementsByTagName("p")[0].style.opacity="1";
	kernel.style.opacity="0.5";
	//kernel.innerHTML = document.getElementsByClassName("letters")[0].innerHTML;
		
}

function moveMeOut(circle){
	
	var moon = circle;
	//var boxy = document.getElementsByClassName("box");
	var rightmoon = moon.getElementsByClassName("box1Right")[0];
	var leftmoon = moon.getElementsByClassName("box1Left")[0];
	var kernel = moon.getElementsByClassName("circle")[0];
	
	kernel.style.width = "200px";
	kernel.style.height = "200px";
	//kernel.style.borderRadius = "240px";
	kernel.style.transform = "translateX(10px) translateY(50px)";
	kernel.style.webkitTransition = "all 0.4s ease-out";
	

	//rightmoon.style.backgroundColor ="pink";
	rightmoon.style.opacity = "0.5";
	rightmoon.style.transform = "translateY(-60px)";
	rightmoon.style.transform += "rotate(-60deg)";
	rightmoon.style.webkitTransition = "all 0.4s ease-out";
	
	
	leftmoon.style.opacity = "0.5";
	leftmoon.style.transform = "translateY(-60px)";
	leftmoon.style.transform += "rotate(60deg)";
	leftmoon.style.webkitTransition = "all 0.4s ease-out";
	//text styling
	kernel.getElementsByTagName("p")[0].style.opacity="0";
	//kernel.getElementsByTagName("p")[0].style.transform="rotate(45deg)";
	kernel.style.width="150px";
	kernel.style.height="150px";
	kernel.style.borderRadius="200px";
	kernel.style.opacity="0.2";
}






