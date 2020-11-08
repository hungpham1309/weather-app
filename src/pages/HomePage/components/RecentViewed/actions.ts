import { ISearchLocation } from "services/typings/location";
import { ActionType, createAction } from "typesafe-actions";

const addRecentViewed = createAction('ADD_RECENT_VIEWED')<ISearchLocation>();

const clearRecentViewed = createAction('CLEAR_RECENT_VIEWED')<number | undefined>();

const recentViewedActions = {
    addRecentViewed,
    clearRecentViewed
}

export default recentViewedActions;

export type RecentViewedAction = ActionType<typeof recentViewedActions>;
