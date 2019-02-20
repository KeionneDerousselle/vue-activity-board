const breakpoints = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}

const getCurrentBreakpoint = () => {
  const breakpointKeys = Object.keys(breakpoints)
  let currentBreakpoint = breakpointKeys[0]

  for (let i = 1; i < breakpointKeys.length; i++) {
    const breakpoint = breakpointKeys[i]
    if (window.innerWidth >= breakpoints[breakpoint]) {
      currentBreakpoint = breakpoint
    }
  }
  return currentBreakpoint
}

export default ({ app }, inject) => {
  inject('getCurrentBreakpoint', getCurrentBreakpoint)
}
