//interfaces
// interface shipInterface {
//     owner: playerInterface;
//     coordinates: number[];
//     color: string;
// }

// interface projectileInterface {
//     id: number;
//     coordinates: number[];
//     hp: number;
// }

// interface playerInterface {
//     ships: shipInterface[];
//     color: string;
// }

export class Projectile {
    coordinates: number[];
    hp: number;
    target: number[];
    waypoint: number[];

    constructor(coordinates: number[], hp: number) {
        this.coordinates = coordinates;
        this.hp = hp;
        this.target = [0,0];
        this.waypoint = [0,0];
    }

    // plotCourse(coordinates: number[]){
        // create waypoint based on target.
    // }

    move(waypoint: number[]){
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

    constructor( color: string, coordinates: number[], hp: number, range: number = 5){
        super(coordinates, hp);
        this.color = color;
        this.range = range;
    }
}

export class Player {
    ships: Ship[];
    color: string;

    constructor(ships: Ship[], color: string){
        this.ships = ships;
        this.color = color;
    }
}
