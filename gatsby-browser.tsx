import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import {
  AppBar,
  Container,
  css,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  useTheme,
} from '@mui/material';
import { Global } from '@emotion/react';
// import './src/styles/global.css';
import { colors, globalCss, materialUiTheme } from './src/styles/theme';
import ResponsiveHeader from './src/components/responsive-header';
import { Helmet } from 'react-helmet';

export const wrapRootElement: GatsbyBrowser['wrapPageElement'] = ({
  props,
  element,
}) => {
  return (
    <>
      <Global styles={globalCss} />
      <ThemeProvider theme={materialUiTheme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Brando Juberd</title>
          <link rel="canonical" href="https://brandojuberd.com" />
        </Helmet>
        <CssBaseline />
        <Grid
          {...props}
          container
          // css={css`
          //   background-color: ${colors.red};
          // `}
        >
          <ResponsiveHeader />
          <Grid
            item
            md={6}
            container
            justifyContent={'center'}
            alignItems={'center'}
            css={css`
              background-color: ${materialUiTheme.palette.background.default};
              width: 100%;
            `}
          >
            {element}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
