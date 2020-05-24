class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,400,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(204, 204, 0);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}