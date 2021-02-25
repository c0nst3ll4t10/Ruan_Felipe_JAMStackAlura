import { typographyVariants } from './typographyVariants.js'

const palette = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#ffc107',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#7b14fb',
      contrastText: '#000000',
    },
  },
  footer: {
    main: {
      color: '#120464'
    },
    icon: {
      color: '#28039e'
    }
  },
  header: {
    main: {
      color: '#8728e8'
    }
  },
  tertiary: {
    main: {
      color: '#737B85',
      contrastText: '#FFFFFF',
    },
  },
  modes: {
    light: {},
    dark: {},
  },
}

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  palette,
  typographyVariants,
  breakpoints,
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
  borderRadius: '8px',
  transition: '200ms ease-in-out',
}