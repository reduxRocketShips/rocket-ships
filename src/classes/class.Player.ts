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

    createShip(color: string, x: number, y: number, hp: number) {
        const newShip = new Ship(color, x, y, hp);
        this.ships = [...this.ships, newShip]
    }

    removeDeadShips() {
        this.ships.forEach((ship) => {
            if (!ship.status) {
                // delete the ship
            }
        });
    }

    eliminateOutliers() {
        return null;
    }
}
