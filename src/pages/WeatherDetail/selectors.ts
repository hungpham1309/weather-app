import { GlobalState } from "services/typings/redux";
import { stateContext, initialLocationState } from "./state";

export const locationStateSelector = (
  state: GlobalState,
  { id }: { id: string }
) => state[stateContext][id] || initialLocationState;
