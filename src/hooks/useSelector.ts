import { useSelector as useReduxSelector } from "react-redux";
import { GlobalState } from "services/typings/redux";

const useSelector = <TState = GlobalState, TSelected = unknown>(
  selector: (state: TState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => {
  return useReduxSelector<TState, TSelected>(selector, equalityFn);
};

export default useSelector;
