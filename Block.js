class Block
{
	constructor(x,y,width,height)
	{
		var options={
			//isStatic:true,
			restitution:0.4,
			friction:0,
			
			}
		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}