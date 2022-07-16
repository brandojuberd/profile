import { css, Grid, Typography, useTheme } from '@mui/material';
import * as React from 'react';

const IndexPage = () => {
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
      <Grid item>
        <Typography
          // css={css`
          //   margin-top: 0;
          // `}
          variant="h3"

        >
          About Me
        </Typography>
        {/* <h3>{frontmatter.date}</h3> */}
        <Typography
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
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
