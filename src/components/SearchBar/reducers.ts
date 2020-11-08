import searchLocationActions from "./actions";
import { initialState, stateContext } from "./state";
import produce from "immer";
import { createReducer } from "typesafe-actions";

const reducers = {
  [stateContext]: createReducer(initialState)
    .handleAction(searchLocationActions.request, (state, action) =>
      produce(state, (draft) => {
        draft.action = action.type;
      })
    )
    .handleAction(searchLocationActions.success, (state, action) =>
      produce(state, (draft) => {
        draft.action = action.type;
        draft.data = action?.payload || [];
        draft.error = null;
      })
    )
    .handleAction(searchLocationActions.failure, (state, action) =>
      produce(state, (draft) => {
        draft.action = action.type;
        draft.error = action.payload?.error;
      })
    ),
};

export default reducers;


