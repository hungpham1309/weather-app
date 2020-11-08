import React, { useState, useMemo, useCallback } from "react";
import { ThemeContext } from "./context";
import Helmet from "react-helmet";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import darkThemeVariables from "./dark";
import lightThemeVariables from "./light";
import commonThemeVariables from "./common";
import { appConfigService } from "../services/appConfigService";

interface Props {}

const ThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<"light" | "dark">(
    appConfigService.getItem("theme")
  );

  const handleThemeChange = useCallback(
    (t: "light" | "dark") => {
      setTheme(t);
      appConfigService.setItem("theme", t);
    },
    [setTheme]
  );

  const themeVariables = useMemo(
    () => ({
      ...(theme === "dark" ? darkThemeVariables : lightThemeVariables),
      ...commonThemeVariables,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      <StyledComponentThemeProvider theme={themeVariables}>
        <Helmet>
          <style>
            {theme === "dark" &&
              `html{scrollbar-face-color:#646464;scrollbar-base-color:#646464;scrollbar-3dlight-color:#646464;scrollbar-highlight-color:#646464;scrollbar-track-color:#000;scrollbar-arrow-color:#000;scrollbar-shadow-color:#646464;scrollbar-dark-shadow-color:#646464}::-webkit-scrollbar-button{display:none}::-webkit-scrollbar-track{background-color:#646464}::-webkit-scrollbar-track-piece{background-color:#000}::-webkit-scrollbar-thumb{height:50px;background-color:#666;border-radius:3px}::-webkit-scrollbar-corner{background-color:#646464}`}
          </style>
        </Helmet>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
