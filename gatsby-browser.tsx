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
import SEO from './src/components/seo';

export const wrapRootElement: GatsbyBrowser['wrapPageElement'] = ({
  props,
  element,
}) => {
  return (
    <>
      <Global styles={globalCss} />
      <ThemeProvider theme={materialUiTheme}>
        {/* <SEO/> */}
        <CssBaseline />
        <Grid
          {...props}
          container
          css={css`
            height: auto;
          `}
        >
          <ResponsiveHeader />
          {/* <Grid
            item
            // md={6}
            container
            justifyContent={'center'}
            alignItems={'center'}
            css={css`
              background-color: ${materialUiTheme.palette.background.default};
              // background-color: red;
              width: 50%;
              right: 0;
            `}
            id="content-container"
          >
            {element}
          </Grid> */}
        </Grid>
      </ThemeProvider>
    </>
  );
};
