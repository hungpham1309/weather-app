import useDispatch from "hooks/useDispatch";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ISearchLocation } from "services/typings/location";
import recentViewedActions from "./actions";
import { recentViewedSelector } from "./selectors";

export const useAddRecentViewed = () => {
  const dispatch = useDispatch();
  const dispatchAddRecentViewed = useCallback(
    (data: ISearchLocation) => {
      dispatch(recentViewedActions.addRecentViewed(data));
    },
    [dispatch]
  );
  return dispatchAddRecentViewed;
};

export const useClearRecentViewed = (id?: number) => {
  const dispatch = useDispatch();
  const dispatchClearRecentViewed = useCallback((id?: number) => {
    dispatch(recentViewedActions.clearRecentViewed(id));
  }, [dispatch]);
  return dispatchClearRecentViewed;
};

export const useRecentViewed = () => {
  return useSelector(recentViewedSelector);
};
