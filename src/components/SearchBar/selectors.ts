import { GlobalState } from "services/typings/redux";
import { stateContext, initialState } from "./state";

export const searchLocationStateSelector = (state: GlobalState) =>
  state[stateContext] || initialState;
