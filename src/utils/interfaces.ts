 
interface Ship {
    owner: Player,
    coordinates: Array<number>,
    color: string,

 }

 interface Shot {
    coordinates: Array<number>,
    hp: number,

 }


 interface Player {
    ships: Array<Ship>,
    color: string,
 }