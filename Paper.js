class Paper{
	constructor(x,y,radius){
		var options = {
			restitution: 0.3,
			friction: 0.5,
			density: 3
            }
            
		this.x = x;
		this.y = y;
		this.r = radius;
		this.body = Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);

		this.image = loadImage("sprites/paper.png");

	}
	display(){

		var paperpos = this.body.position;		

		push();
		translate(paperpos.x, paperpos.y);
		imageMode(CENTER);
		strokeWeight(3);
		image(this.image,0,-this.r*2,this.r*7,this.r*7);
		pop();	


	}

}
