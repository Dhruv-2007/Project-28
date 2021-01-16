class Mango{
	constructor(x,y,r){	
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
			
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("mango.png");
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);

	}

	display(){
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
  }
}
