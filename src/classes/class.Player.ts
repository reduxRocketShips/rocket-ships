import { Ship } from "./class.Ship";
export class Player {
    ships: Ship[] | [];
    color: string;

    constructor(color: string, ships: Ship[] = []){
        this.ships = ships;
        this.color = color;
    }

    get canContinue() {
        return this.ships.length > 0;
    }
}
