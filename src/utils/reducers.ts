import { shipInterface, playerInterface, shotInterface, actionInterface } from './interfaces';

interface stateInterface {
    ships: shipInterface [];
    players: playerInterface [];
    shots: shotInterface [];
}


// we'll need to copy the array, then find the index of the ship or shot or player in question, then update that element in the array's copy, then return the copied array.

const initialState: stateInterface = {
    ships: [],
    players: [],
    shots: [],
}


export default function reducer (state: stateInterface, action: actionInterface) {

    switch (action.type) {     
        case 'MOVE':
            return {
                ...state,
                [action.item]: {
                    ...action.value,
                } 
            }

        case 'CHANGE_HEALTH':
            return {
                ...state,
                [action.item]: {
                    ...action.value,
                }
            }


        case 'NEW_GAME':
            return initialState;
    
        default:
            return state;
    }

}