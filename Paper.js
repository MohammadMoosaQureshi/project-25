class paper {
	constructor(x,y){
		var option={
			isStatic:true,
			restitution:0.3,
			friction:0,
			density:1.2	
			}
	 this.body = Bodies.rectangle(x,y,50,50,option)
	 this.width=50;
	 this.height=50;
	 this.image = loadImage("paper.png");
	 World.add(world,this.body);
	}
	display(){
	  var pos= this.body.position;
	  pos.x = mouseX;
	  pos.y = mouseY;
	  var angle = this.body.angle
	  
	  push()
	  translate(pos.x,pos.y);
	  rotate(angle);
	  ImageMode(CENTER)
	  image(this.image,0,0,this.width,thi.height)
	  pop();  
	}
  }