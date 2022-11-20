
export class Ship extends Projectile {
    color: string;
    range: number;

    constructor( color: string, coordinates: number[], hp: number, range: number = 5){
        super(coordinates, hp);
        this.color = color;
        this.range = range;
    }

    // we need separate rules for ship and projectile
}