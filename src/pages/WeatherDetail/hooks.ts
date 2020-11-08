import { useCallback, useEffect, useMemo } from "react";
import { getType } from "typesafe-actions";
import useDispatch from "hooks/useDispatch";
import useSelector from "hooks/useSelector";
import locationActions from "./actions";
import { locationStateSelector } from "./selectors";

export const useLocation = (id: string) => {
  const dispatch = useDispatch();

  const dispatchGetLocation = useCallback(
    (id: string) => {
      dispatch(locationActions.request(id));
    },
    [dispatch]
  );

  const dispatchResetAction = useCallback(
    () => dispatch(locationActions.reset()),
    [dispatch]
  );

  useEffect(
    () => () => {
      dispatchResetAction();
    },
    [dispatchResetAction]
  );

  const { action, error, data } = useSelector((state) =>
    locationStateSelector(state, { id })
  );

  const loading = useMemo(
    () => getType(locationActions.request) === action,
    [action]
  );

  return {
    data,
    error,
    loading,
    dispatchGetLocation,
  };
};
