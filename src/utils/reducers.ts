

const stateInterface = {
    ships: shipInterface[],
    players: playerInterface[],
    shots: shotInterface[],
}



const reducer = (state, action) => {

    switch (action.type) {
        case 'MOVE_SHIP':
            return {
                ...state,
                ships: {
                    ...state.ships,
                    [action.ship] : action.value
                }
            }
            
            break;
    
        default:
            break;
    }

}