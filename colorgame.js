var numofsquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easy = document.getElementById("easybtn");
var hard = document.getElementById("hardbtn");
var modebutton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modebutton.length; i++){
		modebutton[i].addEventListener("click",function(){
			modebutton[0].classList.remove("selected");
			modebutton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numofsquares = 3 : numofsquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	//squares[i].style.background = colors[i];

	//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedcolor = this.style.background;
			//compare color to pickedColor
			if(clickedcolor === pickedcolor) {
				messagedisplay.textContent = "Correct!";
				changeColors(clickedcolor);
				head.style.background = clickedcolor;
				resetbutton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messagedisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset() {
	colors = generateRandomColor(numofsquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	head.style.background = "steelblue";
	messagedisplay.textContent = "";
	resetbutton.textContent = "NEW COLORS";
}

/*easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numofsquares = 3;
	colors = generateRandomColor(numofsquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = pickColor;
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numofsquares = 6;
	colors = generateRandomColor(numofsquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickColor;
		squares[i].style.display = "block";
	}
});*/

resetbutton.addEventListener("click",function(){
	reset();
});

function changeColors(color)
{
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];
}

function generateRandomColor(n) {
	var a =[];
	for(var i = 0; i < n; i++){
		a.push(randomColor());
	}
	return a;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}