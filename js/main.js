//Starts game when everything is loaded.
var width = 600;
var height = 500;

$(document).ready(function() {
	
	$(window).resize(function () {
		 location.reload();
	});
	
	width = window.innerWidth;
	height = window.innerHeight;
	
	gameArea.start();
	
	$(document).mousemove(function(e){
		makeParticles(e.pageX, e.pageY);
	});
	
	$(document).keydown(function(e){
		console.log(e.keyCode);
		makeShape();
	});
});

//Default canvas attributes.
const gameArea = {
	canvas: document.createElement("canvas"),
	start: function() {
		//This creates the canvas.
		//The advantage to creating the canvas here instead of creating a <canvas> tag on the body is that you can use the width and height variables in your code. It's also cool to have an no html imo.
		this.canvas.width = width;
		this.canvas.height = height;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.update();
	},
	update: function() {
		//Updates on every frame refresh. This is the key to HTML5/Canvas animation
		requestAnimationFrame(this.update.bind(this));
		updateGameArea();
	},
	clear: function() {
		//This wipes the entire screen clear. 
		//If you are new to HTML5 game dev, the screen is constantly being cleared and redrawn.
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

var particles = [];
var shapes = [];

//This is where all the magic happens!!
function updateGameArea() {
	gameArea.clear();
	ctx = gameArea.context;
	
	shapes.forEach(function(shape){
		shape.render(ctx);
		shape.time--;
		shape.destroy();
	});
	
	particles.forEach(function(particle){
		particle.render(ctx);
		particle.time--;
		particle.destroy();
	});
}

function makeParticles(x,y){
	particles.push(new particle(x,y));
}

function makeShape(){
	var x = Math.floor(Math.random() * width);
	var y = Math.floor(Math.random() * height);
	var w = Math.floor(Math.random() * 499)+1;
	var h = Math.floor(Math.random() * 499)+1;
	shapes.push(new shape(x,y,w,h));
}