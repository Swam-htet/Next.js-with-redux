/* Instruments */
import {counterSlice, todoSlice} from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,

}
