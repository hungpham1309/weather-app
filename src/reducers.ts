import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";

const getRootReducers = (history: History) => {
  const reducers = {
    ...require("./components/SearchBar/reducers").default,
    ...require("./pages/WeatherDetail/reducers").default,
    ...require("./pages/HomePage/components/RecentViewed/reducers").default,
  };
  return combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
};

export default getRootReducers;
