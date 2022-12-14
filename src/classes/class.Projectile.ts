import { X_LOWER_BOUNDARY, X_UPPER_BOUNDARY, Y_LOWER_BOUNDARY, Y_UPPER_BOUNDARY } from "../utils/combat";

export class Projectile {
    x: number;
    y: number;
    hp: number;
    range: number;
    perTurnRange: number;
    speed: number;
    vectorCoordinates: {x: number, y: number};
    // normalizedVector: {x: number, y: number};

  constructor(x: number, y: number, hp: number, vectorCoordinates: {x: number, y: number} = {x: 0, y: 0} ,range: number = Infinity, speed: number = 1) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.vectorCoordinates = vectorCoordinates;
    this.range = range;
    this.perTurnRange = range;
    this.speed = speed;
    // this.normalizedVector = {x: 0, y: 0};
  }

  get outOfBounds() {
    return (
      this.x > X_UPPER_BOUNDARY ||
      this.x < X_LOWER_BOUNDARY ||
      this.y > Y_UPPER_BOUNDARY ||
      this.y < Y_LOWER_BOUNDARY
    );
  }

  get status() {
    return this.hp > 0 && !this.outOfBounds;
  }


 // https://www.haroldserrano.com/blog/vectors-in-computer-graphics
  vector(x: number, y: number) {
    // get change in x and change in y
    let changeX = x - this.x;
    let changeY = y - this.y;

    let vectorLen = Math.sqrt(changeX**2 + changeY**2);

    let normalizedX = changeX/vectorLen;
    let normalizedY = changeY/vectorLen;

    return {x: normalizedX, y: normalizedY};
  }

  move(waypoint: number[]) {
    this.x += (this.vectorCoordinates.x * this.speed);
    this.y += (this.vectorCoordinates.y * this.speed);
    this.range -= 1;
  }

  changeHp(change: number) {
    this.hp -= change;
    return this.hp;
  }
}
