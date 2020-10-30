/* eslint-disable prefer-destructuring */
const createMediaQuery = (n: String) => `@media screen and (min-width:${n})`;

const addAliases = (arr: Array<String>, aliases: Array<String>) =>
  aliases.forEach((key: any, i: any) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

const breakpoints: Array<String> = ["426px", "768px", "992px", "1200px"];

const mediaQueries: Array<String> = breakpoints.map(createMediaQuery);

const aliases: Array<String> = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
const font: String = "Google Sans, Helvetica, Arial, sans-serif";

// this font size scaling follows styled-system standard
// however we can't change the standard scaling, theme will always return
// this sequence `[12, 14, 16, 20, 24, 32, 48]` even if we try to shift
// some values between the scales.
const fontSizes: Array<String> = [
  "0.8em",
  "1em",
  "1.25em",
  "1.563em",
  "1.953em",
  "2.441em",
  "3.052em"
];

const light: Number = 300;
const regular: Number = 400;
const medium: Number = 500;
const semibold: Number = 600;
const bold: Number = 700;
const fontWeights: Object = {
  light,
  regular,
  medium,
  semibold,
  bold
};

// in this new spacing standard index `0` stands for 0 margin/padding
const space: Array<Number> = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256, 512];

const shadows: Array<String> = [
  `0 1px 1px 0 rgba(10, 31, 68, 0.08), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 18px 18px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 26px 26px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 3px 32px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`
];

export default {
  bold,
  breakpoints,
  font,
  fontSizes,
  fontWeights,
  light,
  mediaQueries,
  medium,
  regular,
  semibold,
  shadows,
  space
};
