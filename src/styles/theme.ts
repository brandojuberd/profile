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
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    // color: ${colors.fontWhite};
  }

  .responsiveHeaderAnimation {
    // height: 100vh;
    animation-duration: 1s;
    animation-name: moveToTop;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
  }
  .responsiveHeaderAnimationBack {
    // height: 100vh;
    animation-duration: 1s;
    animation-name: moveToLeft;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
  }
  @keyframes moveToTop {
    0% {
      // height: 100%;
      height: 100vh;
      width: 50%;
      position: sticky;
      z-index: 1
      top: 0;
    }
    99%{
      position: sticky;
      z-index: 1
      top: 0;
    }
    100% {
      height: 21rem;
      // height: 100vh;
      // height: 20%;
      width: 100%;
      position: sticky;
      top: 0;
    }
  }

  @keyframes moveToLeft {
    0% {
      height: 21rem;
      // height: 100vh;
      // height: 20%;
      width: 100%;
      position: sticky;
      // top: 0;
      // position: absolute;
      z-index: 1
    }
    99%{
      z-index: 1
      position: sticky;
      // position: absolute;
    }
    100% {
      z-index: 1
      height: 100vh;
      // height: 100%;
      position: sticky;
      width: 50%;
    }
  }

  .contentContainerAnimation {
    // height: 100vh;
    animation-duration: 1s;
    animation-name: toFull;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
  }
  .contentContainerAnimationBack {
    // height: 100vh;
    animation-duration: 1s;
    animation-name: toHalf;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
  }

  @keyframes toFull{
    0% {
      width: 50%;
      position: absolute;
      right: 0;
    }
    90%{
      position: absolute;
    }
    100% {
      width: 100%;
      right: 0;
    }
  }

  @keyframes toHalf{
    0% {
      width: 100%;
      float: right;
      position: absolute;
      // right: 0;
    }
    99%{
      position: absolute;
    }
    100% {
      width: 50%;
      float: right;
      // right: 0;
    }
  }

  .navbarClose{
    animation-duration: 0.5s;
    animation-name: toClose;
    animation-fill-mode: forwards;
  }
  @keyframes toClose{
    0% {
      width: 50%;
    }
    100% {
      width: 10%;
    }
  }

  .navbarOpen{
    animation-duration: 0.5s;
    animation-name: toOpen;
    animation-fill-mode: forwards;
  }
  @keyframes toOpen{
    0% {
      width: 10%;
    }
    100% {
      width: 50%;
    }
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
      main: '#f5f5f5',
      light: '#f5f5f5',
      dark: '#f5f5f5',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    text: {
      primary: '#303030',
      // primary: "rgba(0,0,0,0.6)"
    },
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
