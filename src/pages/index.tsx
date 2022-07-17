import { css, Grid, Typography, useTheme } from '@mui/material';
import { PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../components/seo';

const IndexPage = (props: PageProps) => {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      alignItems={'center'}
      alignContent={'center'}
      padding={'16px'}
      css={css`
        height: 100vh;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          height: inherit;
        }
      `}
    >
      <SEO {...props} />
      <Grid item>
        <Typography
          // css={css`
          //   margin-top: 0;
          // `}
          variant="h3"
        >
          Tech guy.
        </Typography>
        {/* <h3>{frontmatter.date}</h3> */}
        {/* <Typography
          css={css`
            * {
              padding: 0;
              margin: 0;
            }
          `}
          variant="subtitle1"
        >
          A Software Engineer has experience in developing websites and servers.
          I learned to program primarily self-taught but I also graduated from a
          code boot camp, from the learning journey I learn how to solve
          problems with the right paradigm and critical thinking, and in
          developing new technology or application I need an aptitude to learn
          and adapt which I believe I have.
        </Typography> */}
      </Grid>
      {/* <Grid item>
        <Typography variant="h3">Algorithm</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Softwware</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Softwware</Typography>
      </Grid> */}
    </Grid>
  );
};

export default IndexPage;
