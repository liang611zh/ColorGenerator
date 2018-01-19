var css =  document.querySelector("h3");
var pickerA = document.getElementById("color1");
var pickerB = document.getElementById("color2");
var bg = document.getElementById("bgc");
var turnOn = false;
var timer;

function randomGenerate(){

	pickerA.value="#" + Math.random().toString(16).slice(2, 8);
	pickerB.value="#" + Math.random().toString(16).slice(2, 8);
	changeColor();
}

function changeColor(){
	bg.style.background=
	"linear-gradient(to right, "
	 + pickerA.value 
	 +", " 
	 + pickerB.value
	 +")"; /* Standard syntax */
	 css.textContent = "Current color:" + bg.style.background.toString().slice(25,-1);
}

function runColor(){
	turnOn=true;
	if(turnOn){
		timer=setInterval(function(){ 
			randomGenerate()
	}, 400);
	}
}

function stopColor(){
	if(turnOn){
		clearInterval(timer);
	}
	turnOn=false;
}

pickerA.addEventListener("input", changeColor);
pickerB.addEventListener("input", changeColor);