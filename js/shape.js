//Adds shape when a key is pressed.
class shape {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
		this.time = 500;
	}
	render(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	
	destroy(){
		if(this.time <= 0){
			shapes.splice(shapes.indexOf(this),1);
		}
	}
};