class Umbrella{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.x = x; 
        this.y = y;
        this.image = loadImage("images/Walking Frame/walking_7.png");
        this.body = Bodies.circle(x, y, 80, options);

        World.add(world, this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 60, 300, 350);
        pop();
    }
}