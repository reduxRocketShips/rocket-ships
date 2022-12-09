import { Projectile } from "./class.Projectile";

export class Ship extends Projectile {
  color: string;
  shots: Projectile[];

  constructor(
    color: string,
    x: number,
    y: number,
    hp: number,
    vectorCoordinates: { x: number; y: number } = { x: 0, y: 0 },
    range: number = 5
  ) {
    super(x, y, hp, vectorCoordinates, range);
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
