class pingpong {
  constructor(x, y) {
    var options = {
      'restitution':0.5,
      'friction':0.5
    }
    this.body = Bodies.circle(x, y, 8, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.radius = 10;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(pos.x, pos.y, 16, 16);
    pop();
  }
}