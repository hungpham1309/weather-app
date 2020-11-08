import recentViewedActions from "./actions";
import { initialState, stateContext } from "./state";
import produce from "immer";
import { createReducer } from "typesafe-actions";

const reducers = {
  [stateContext]: createReducer(initialState)
    .handleAction(recentViewedActions.addRecentViewed, (state, action) =>
      produce(state, (draft) => {
        draft.data.push(action.payload);
      })
    )
    .handleAction(recentViewedActions.clearRecentViewed, (state, action) =>
      produce(state, (draft) => {
        const id = action.payload;
        draft.data = !id ? [] : draft.data.filter(({ woeid }) => id !== woeid);
      })
    ),
};

export default reducers;
