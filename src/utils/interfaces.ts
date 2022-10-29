interface shipInterface {
   owner: playerInterface;
   coordinates: number[];
   color: string;
}

interface projectileInterface {
   id: number;
   coordinates: number[];
   hp: number;
}

interface playerInterface {
   ships: shipInterface[];
   color: string;
}

export interface actionInterface {
   type: string;
   item: string;
   value: shipInterface[] | projectileInterface[];
}
