import {
  X_LOWER_BOUNDARY,
  X_UPPER_BOUNDARY,
  Y_LOWER_BOUNDARY,
  Y_UPPER_BOUNDARY,
} from "./utils/combat";
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

export class Ship extends Projectile {
  color: string;
  range: number;
  shots: Projectile[];

  constructor(
    color: string,
    coordinates: number[],
    hp: number,
    range: number = 5
  ) {
    super(coordinates, hp);
    this.color = color;
    this.range = range;
    this.shots = [];
  }

  shoot(target: number[]) {
    // pass in a target arg [x,y]
    // get the slope with this.coordinates and target
    this.setTarget(target);
    // slope = change in y / change in x
    const shotSlope = this.slope;
    // this would be in place of ratio.
    // we're talking about incremental movement
    // let's add a property of speed? This represents the distance traveled for each iteration
    // slope = [10, 100]
    // travel along our line speed units of distance.

    // WILL FIGURE OUT MATH FOR SHOTSTART
    // https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
    //         The notation used in the diagram is a little off, but the end result is correct.  Trig rations like sine are a function of an angle, not a side length.  Not super important, just confused me at first.
    // Yeah, getting the unit length along with the direction from the line direction is effectively a unit vector.  If you were going to be doing more complicated things, like points in 3d, you'd probably want to move your operations in to unit vectors.
    // Here's a quick overview of the idea:

    // https://www.haroldserrano.com/blog/vectors-in-computer-graphics
    // Actually, on that stack exchange answer, the top answer discusses solving with unit vectors.  When they say "normalize this to u", they are effectively saying "take a vector, keep its direction, but make it's magnitude 1".
    const shotStart = [
      this.coordinates[0] + shotSlope[0],
      this.coordinates[1] + shotSlope[1],
    ];
    // initialize a projectile with this.coordinates + slope
    const singleShot: Projectile = new Projectile(shotStart, 1);
    // set the singleShot's target
    singleShot.setTarget(target);
    this.shots.push(singleShot);
    return singleShot;
  }
  // we need separate rules for ship and projectile
}

export class Player {
  ships: Ship[] | [];
  color: string;

  constructor(color: string, ships: Ship[] = []) {
    this.ships = ships;
    this.color = color;
  }

  get canContinue() {
    return;
  }
}
