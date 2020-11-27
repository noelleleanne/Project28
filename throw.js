class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
        }
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }
    launch(body){
       this.body.bodyA = body;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48,22,8);
        strokeWeight(7);
 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    
}