import { createTheme, css } from '@mui/material';

export const colors = {
  primary: '#00288f',
  red: 'ff0000',
  fontBlack: '#121212',
  fontWhite: '#f5f5f5',
};

export const globalCss = css`
  html,
  body,
  div {
    padding: 0;
    margin: 0;
    // color: ${colors.fontWhite};
  }
`;

export const materialUiTheme = createTheme({
  typography: {
    h1: {
      fontSize: '4.5rem',
      // fontFamily: ""
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    tertiary: {
      main: "#f5f5f5",
      light: "#f5f5f5",
      dark: "#f5f5f5",
      contrastText: "rgba(0,0,0,0.87)"
    },
    text: {
      primary: "#303030"
      // primary: "rgba(0,0,0,0.6)"
    }
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    tertiary: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}