export const ANIMATION = {
  unMounted: {
    opacity: 0,
    y: 300,
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 1.3,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      mass: 1.3,
    },
  },
};
