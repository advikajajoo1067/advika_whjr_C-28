class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }

    fly(){
        this.Sling.bodyA=null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}