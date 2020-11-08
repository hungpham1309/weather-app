import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  position,
  typography,
  border,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  PositionProps,
  TypographyProps,
  BorderProps,
} from "styled-system";

const Box = styled.div<
  SpaceProps &
    LayoutProps &
    ColorProps &
    FlexboxProps &
    PositionProps &
    TypographyProps &
    BorderProps
>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${position}
  ${typography}
  ${border}
`;

export default Box;
