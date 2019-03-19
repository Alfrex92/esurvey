import { css } from "styled-components";

const size = {
  small: 400,
  med: 760,
  large: 1140
};

export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const spaceS = ".5rem";
export const spaceM = "1rem";
export const spaceL = "2rem";

export const mainColor = "#ff9100";
export const secondaryColor = "#161b21";
export const supportColor = "#ff9100";
