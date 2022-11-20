import { Projectile } from "./class.Projectile";

export class Ship extends Projectile {
  color: string;
  shots: Projectile[];

  constructor(
    color: string,
    x: number,
    y: number,
    hp: number,
  ) {
    super(x, y, hp);
    this.color = color;
    this.shots = [];
  }

  shoot(x: number, y: number) {
      
      // initialize a projectile with this.coordinates + offset
        // coordinates: [x,y]
        // this.normalizedVector = .x (changeX) , .y (changeY)
        // one movement = xCoord + xChange * speed , yCoord + yChange * speed

    const shotVector = this.vector(x, y);
    const shotX = this.x + shotVector.x;
    const shotY = this.y + shotVector.y;
    const singleShot: Projectile = new Projectile(shotX, shotY, 1, shotVector);
      
    this.shots.push(singleShot);
    return singleShot;
  }
  // we need separate rules for ship and projectile
}