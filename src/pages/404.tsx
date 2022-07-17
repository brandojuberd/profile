import * as React from 'react';
import { Link, navigate, PageProps } from 'gatsby';
import { Button, css, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SEO from '../components/seo';
// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = (props: PageProps) => {
  return (
    <Grid item container direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <SEO {...props} title="404 - Not Found" description="Page Not Found"/>
      <Grid item >
        <Typography variant="h1" fontSize={'9rem'}>
          404.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          size="large"
          css={css`
            margin: 3px;
            border-radius: 30px;
            maxwidth: '100px';
            maxheight: '100px';
            minwidth: '100px';
            minheight: '100px';
          `}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
