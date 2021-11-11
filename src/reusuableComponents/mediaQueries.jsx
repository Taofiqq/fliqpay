export const breakpoints = {
  // specifying breakpoints for mobile devices, ipad, tablets and small screent
  xs: 320,
  sm: 387,
  md: 589,
  lg: 783,
};

// function to use the media queries breakpoints in any other components. Passing the Object keys from the breakpoints object to specify the particular breakpoints we want to make use off
export const mediaQueries = (key) => {
  return (style) => `@media(max-width: ${breakpoints[key]}px) {${style}}`;
};
