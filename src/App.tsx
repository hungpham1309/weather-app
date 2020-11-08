import React from "react";
import "./App.css";
import configureStore from "./store";
import { Provider } from "react-redux";
import AppRoute from "./AppRoute";
import ThemeProvider from "./themes/ThemeProvider";
import ErrorBoundary from "./components/base/ErrorBoundary";
import { Helmet } from "react-helmet";

const { store } = configureStore();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>My Weather</title>
      </Helmet>
      <Provider store={store}>
        <ThemeProvider>
          <AppRoute />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
