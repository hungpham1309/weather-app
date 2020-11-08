import { useDispatch as useReduxDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RootAction } from "services/typings/redux";

const useDispatch = () => {
  return useReduxDispatch<Dispatch<RootAction>>();
};

export default useDispatch;
