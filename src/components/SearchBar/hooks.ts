import { useCallback, useEffect, useMemo } from "react";
import { getType } from "typesafe-actions";
import useDispatch from "hooks/useDispatch";
import useSelector from "hooks/useSelector";
import searchLocationActions from "./actions";
import { searchLocationStateSelector } from "./selectors";

export const useSearchLocation = () => {
  const dispatch = useDispatch();

  const dispatchSearchLocation = useCallback(
    (query: string) => {
      dispatch(searchLocationActions.request(query));
    },
    [dispatch]
  );

  const dispatchResetAction = useCallback(
    () => dispatch(searchLocationActions.reset()),
    [dispatch]
  );

  useEffect(
    () => () => {
      dispatchResetAction();
    },
    [dispatchResetAction]
  );

  const { action, error, data } = useSelector(searchLocationStateSelector);

  const loading = useMemo(
    () => getType(searchLocationActions.request) === action,
    [action]
  );

  return {
    data,
    error,
    loading,
    dispatchSearchLocation,
  };
};
