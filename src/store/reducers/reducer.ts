import {  combineReducers } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addFromSaga} from "../actions/action";

export interface CounterState {
  count: number;
}

export interface State {
  counter: CounterState;
}

const initialState: State = {
  counter: { count: 0 }
};

const counterReducer = reducerWithInitialState(initialState.counter)
  .case(addFromSaga, (state, { num }) => {
    console.log(num);
    return {
      ...state,
      count: state.count + num
    };
  })
  .build();

export const reducer = combineReducers<State>({
  counter: counterReducer
});
