import { all, fork } from "redux-saga/effects";

const getRootSaga = () =>
  function* rootSaga() {
    const sagas = [
      ...require("./components/SearchBar/sagas").default,
      ...require("./pages/WeatherDetail/sagas").default,
    ].map(fork);
    yield all(sagas);
  };

export default getRootSaga;
