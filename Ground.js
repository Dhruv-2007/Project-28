class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      this.ground = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.ground);

    }

    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }