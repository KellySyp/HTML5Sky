//Adds particle when the mouse moves.
class particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.w = 10;
		this.h = 10;
		this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
		this.time = 50;
	}
	render(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	
	destroy(){
		if(this.time <= 0){
			particles.splice(particles.indexOf(this),1);
		}
	}
};