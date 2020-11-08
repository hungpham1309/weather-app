import locationActions from "./actions";
import { initialState, stateContext, initialLocationState } from "./state";
import produce from "immer";
import { createReducer } from "typesafe-actions";

const reducers = {
  [stateContext]: createReducer(initialState)
    .handleAction(locationActions.request, (state, action) => {
      const { payload: id, type } = action;
      return produce(state, (draft) => {
        draft[id] = draft[id] || { ...initialLocationState };
        draft[id].action = type;
      });
    })
    .handleAction(locationActions.success, (state, action) => {
      const { payload, type } = action;
      return produce(state, (draft) => {
        draft[payload.woeid] = draft[payload.woeid] || {
          ...initialLocationState,
        };
        draft[payload.woeid].action = type;
        draft[payload.woeid].data = payload;
      });
    })
    .handleAction(locationActions.failure, (state, action) => {
      const {
        payload: { error, id },
        type,
      } = action;
      return produce(state, (draft) => {
        draft[id] = draft[id] || { ...initialLocationState };
        draft[id].action = type;
        draft[id].error = error;
      });
    }),
};

export default reducers;
