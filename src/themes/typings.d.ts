// import original module declarations
import "styled-components";
import { ThemeVariables } from "./styled";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeVariables {}
}
