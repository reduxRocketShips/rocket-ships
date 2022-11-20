import { X_LOWER_BOUNDARY, X_UPPER_BOUNDARY, Y_LOWER_BOUNDARY, Y_UPPER_BOUNDARY } from "../utils/combat";

export class Projectile {
    coordinates: number[];
    hp: number;
    target: number[];
    waypoint: number[];
    range: number;

  // number is arbitrarily chosen, will change as game is developed
  constructor(coordinates: number[], hp: number, range: number = 5) {
    this.coordinates = coordinates;
    this.hp = hp;
    this.target = [0, 0];
    this.waypoint = [0, 0];
    this.range = range;
  }

  // plotCourse(coordinates: number[]){
  // create waypoint based on target.
  // }

  // How are we thinking about travel ? Are we currently just teleporting to target, or moving incrementally to the target?

  // what is the purpose of range?

  // deal with hitting the edge of the map.

  // current solution. If a projectile is out of bounds, outside code will delete the instance from gameState.
  get outOfBounds() {
    return (
      this.coordinates[0] > X_UPPER_BOUNDARY ||
      this.coordinates[0] < X_LOWER_BOUNDARY ||
      this.coordinates[1] > Y_UPPER_BOUNDARY ||
      this.coordinates[1] < Y_LOWER_BOUNDARY
    );
  }

  get status() {
    return;
  }

  get slope() {
    return (
      (this.coordinates[1] - this.target[1]) /
      (this.coordinates[0] - this.target[0])
    );
  }

  setTarget(xy: number[]) {
    // an array of numbers [1, 2]
    this.target = xy;
  }

  move(waypoint: number[]) {
    this.coordinates = waypoint;
    return waypoint;
  }

  changeHp(change: number) {
    this.hp -= change;
    return this.hp;
  }
}