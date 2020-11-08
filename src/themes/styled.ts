import baseStyled, {
  ThemedStyledInterface,
  ThemedStyledProps as BaseThemedStyledProps,
} from "styled-components";
import light from "./light";
import dark from "./dark";
import common from "./common";

const theme = { ...common, ...light, ...dark };

export type ThemeVariables = typeof theme;

export type ThemedStyledProps<P = {}> = BaseThemedStyledProps<
  P,
  ThemeVariables
>;

const styled = baseStyled as ThemedStyledInterface<ThemeVariables>;

export default styled;
