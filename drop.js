class Drop{
    constructor(x, y){
        var options = {
            friction : 1,
            restitution : 0.1,
            density : 1,
            isStatic : false
        }
        this.x = x; 
        this.y = y;
        this.body = Bodies.circle(x, y, 2.5, options);

        World.add(world, this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, 5, 5);
        pop();
    }

    rePos(){
        if(this.body.position.y > windowHeight){
            Matter.Body.setPosition(this.body, {x: random(0, windowWidth), y:random(0,windowHeight)});
        }
    }
}