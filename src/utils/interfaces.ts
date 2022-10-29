 
export interface shipInterface {
    owner: playerInterface;
    coordinates: Array<number>;
    color: string;

 }

 export interface shotInterface {
    id: number;
    coordinates: Array<number>;
    hp: number;

 }


 export interface playerInterface {
    ships: Array<shipInterface>;
    color: string;
 }


 export interface actionInterface {
    type: string;
    item: string;
    value: Array<any>;
 }