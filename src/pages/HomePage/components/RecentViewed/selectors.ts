import { GlobalState } from "services/typings/redux";
import { stateContext } from "./state";

export const recentViewedSelector = (state: GlobalState) => state[stateContext].data;