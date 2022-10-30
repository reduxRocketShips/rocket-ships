export interface shipInterface {
   owner: playerInterface;
   coordinates: number[];
   color: string;
}

export interface projectileInterface {
   id: number;
   coordinates: number[];
   hp: number;
}

export interface playerInterface {
   ships: shipInterface[];
   color: string;
}

export interface actionInterface {
   type: string;
   item: string;
   value: shipInterface[] | projectileInterface[];
}

export interface HeaderProps {
   player1: playerInterface;
   player2: playerInterface;
 }
