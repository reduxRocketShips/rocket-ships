import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


/*
gameState

  ships

  shots

  players

  //stretch
  obstacles

  powerups

  aliens

*/

/*
 class Ship {
  constructor () {
    this.owner : string =
    this.coordinates : []
    this.hp : int
    this.color : string // related to the owner
  }

 class player {
  this.ships : shipInterface[]
 }

shipInterface {
  owner : string,
  coordinates : int[],
  hp : int
}

shotInterface {
  coordinates : int[],
}
*/
