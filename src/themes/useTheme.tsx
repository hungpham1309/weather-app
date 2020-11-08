import { useContext, useMemo, useRef, useCallback, useEffect } from "react";
import { ThemeContext } from "./context";
import darkThemeVariables from "./dark";
import lightThemeVariables from "./light";
import commonThemeVariables from "./common";

export const useTheme = () => {
  const { theme, setTheme: baseSetTheme } = useContext(ThemeContext);
  const frameId = useRef<any>(null);

  useEffect(
    () => () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    },
    []
  );

  const setTheme = useCallback(
    (t: "dark" | "light") => {
      frameId.current = requestAnimationFrame(() => {
        baseSetTheme(t);
      });
    },
    [baseSetTheme]
  );

  const themeVariables = useMemo(
    () => ({
      ...(theme === "dark" ? darkThemeVariables : lightThemeVariables),
      ...commonThemeVariables,
    }),
    [theme]
  );

  return { theme, setTheme, themeVariables };
};
