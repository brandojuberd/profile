import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Button,
  Chip,
  Container,
  css,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const thirdPartyLinks = [
  {
    icon: <GitHubIcon/>,
    link: 'https://github.com/brandojuberd',
    label: 'GitHub',
  },
  {
    icon: <LinkedIn/>,
    link: 'https://www.linkedin.com/in/brandojuberd',
    label: 'LinkedIn',
  },
];

export default function ResponsiveHeader() {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      alignItems={'center'}
      alignContent={'center'}
      direction={'row-reverse'}
      md={6}
      css={css`
        background-color: ${theme.palette.primary.main};
        height: 100vh;
        width: 100%;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        padding: 1rem;
        text-align: center;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          position: static;
          height: inherit;
          padding: 1rem;
          // flex-direction: column;
          // justify-content: space-evenly;
        }
        @media (min-width: ${theme.breakpoints.values.md}px) {
          text-align: right;
        }
      `}
    >
      <Grid item container justifyContent={'space-evenly'}>
        {['BRANDO', 'JUBERD'].map((text) => (
          <Grid item xs={12}>
            <Typography
              color="grey.A100"
              variant="h1"
              lineHeight={'73%'}
              fontFamily={'Arial, Helvetica, sans-serif;'}
              css={css`
                @media (max-width: 336px) {
                  font-size: 9rem;
                }
                @media (min-width: ${theme.breakpoints.values.md}px) {
                  font-size: 6rem;
                }
                @media (min-width: 1126px) {
                  font-size: 8rem;
                }
                @media (min-width: 1260px) {
                  font-size: 9rem;
                }
              `}
            >
              {text}
            </Typography>
          </Grid>
        ))}

        {/* <Grid item md={12}>
          <Typography
            color="grey.A100"
            variant="h1"
            lineHeight={'73%'}
            fontFamily={'Arial, Helvetica, sans-serif;'}
            css={css`
              @media (min-width: 1260px) {
                font-size: 9rem;
              }
              @media (min-width: ${theme.breakpoints.values.md}px) {
                font-size: 8rem;
              }
            `}
          >
            JUBERD
          </Typography>
        </Grid> */}
      </Grid>
      <Grid
        item
        container
        css={css`
          // background-color: ${theme.palette.background.default};
          flex-direction: row-reverse;
          @media (max-width: ${theme.breakpoints.values.md}px) {
            flex-direction: row;
            justify-content: center;
          }
        `}
      >
        <Grid
          item
          container
          // justifyContent={'space-evenly'}
          margin="4px"
          padding="4px"
          xs={12}
          // spacing={1}
          borderRadius={'4px'}
          css={css`
            // background-color: ${theme.palette.background.default};
            flex-direction: row-reverse;
            margin-top: 1rem;
            @media (max-width: ${theme.breakpoints.values.md}px) {
              flex-direction: row;
              justify-content: center;
            }
          `}
        >
          {thirdPartyLinks.map((linkObj) => (
            <Grid item>
              <Button
                variant="contained"
                color="tertiary"
                startIcon={linkObj.icon}
                css={css`
                  margin: 3px;
                  border-radius: 30px;
                `}
                href={linkObj.link}
                target="_blank"
                // la={linkObj.label}
              >
                {linkObj.label}
              </Button>
            </Grid>
          ))}

          {/* <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              css={css`
                margin: 3px;
                border-radius: 30px;
              `}
            >
              GitHub
            </Button>
          </Grid> */}

          {/* <Chip
          onKeyUp={() => {
            console.log('clicked');
          }}
          icon={<LinkedIn />}
          label="LinkedIn"
          color="tertiary"
        /> */}
          {/* <Chip icon={<Medium />}  label="Medium" color="tertiary" /> */}
        </Grid>
      </Grid>
      {/* <Typography color="secondary" variant="h1</Typography> */}
    </Grid>
  );
}
