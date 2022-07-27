import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  css,
  Grid,
  IconButton,
  Slider,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

const thirdPartyLinks = [
  {
    icon: <GitHubIcon />,
    link: 'https://github.com/brandojuberd',
    label: 'GitHub',
  },
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/brandojuberd',
    label: 'LinkedIn',
  },
];

const Puller = styled(Box)(({ theme }) => ({
  width: 6,
  height: 60,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  right: 10,
  // left: 'calc(50% - 15px)',
  '&:hover': {
    background: theme.palette.mode === 'light' ? grey[400] : grey[400],
  },
}));

export default function ResponsiveHeader() {
  const theme = useTheme();

  const [width, setWidth] = useState(50);

  function handleDragPuller(e: React.DragEvent<HTMLDivElement>) {
    const clientWidth = document.documentElement.clientWidth;
    const maxX = clientWidth * 0.5;
    const minX = clientWidth * 0.1;
    let currentX = e.clientX;
    if (currentX > maxX) {
      currentX = maxX;
    } else if (currentX < minX) {
      currentX = minX;
    }
    setWidth((currentX / maxX) * 50);

    const elHeader = document.getElementById('responsive-header');
    console.log({
      maxX,
      currentX,
      width,
      elHeader,
    });
  }

  function handlerDragEndPuller(e: React.DragEvent<HTMLDivElement>) {
    const clientWidth = document.documentElement.clientWidth;
    const maxX = clientWidth * 0.5;
    const minX = clientWidth * 0.1;
    let currentX = e.clientX;
    if (currentX > maxX) {
      currentX = maxX;
    } else if (currentX < minX) {
      currentX = minX;
    }
    setWidth((currentX / maxX) * 50);

    const elHeader = document.getElementById('responsive-header');
    console.log({
      maxX,
      currentX,
      width,
      elHeader,
    });
  }

  function handleClickPuller(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (width === 50) {
      setWidth(10);
    } else {
      setWidth(50)
    }
  }
  return (
    <Grid
      item
      container
      alignItems={'center'}
      alignContent={'center'}
      direction={'row-reverse'}
      // md={6}
      id="responsive-header"
      css={css`
        background-color: ${theme.palette.primary.main};
        height: 100vh;
        width: ${width}%;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        padding: 2rem;
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
        // user-drag: none;
        // user-select: none;
      `}
    >
      <Grid
        item
        container
        justifyContent={'space-evenly'}
        direction={width < 40 ? 'column' : 'row'}
      >
        {width < 40 ? (
          <Typography
            color="grey.A100"
            variant="h1"
            lineHeight={'73%'}
            fontFamily={'Arial, Helvetica, sans-serif;'}
            // css={css`
            //   @media (max-width: 336px) {
            //     font-size: 9rem;
            //   }
            //   @media (min-width: ${theme.breakpoints.values.md}px) {
            //     font-size: 6rem;
            //   }
            //   @media (min-width: 1126px) {
            //     font-size: 8rem;
            //   }
            //   @media (min-width: 1260px) {
            //     font-size: 9rem;
            //   }
            // `}
          >
            B
          </Typography>
        ) : (
          <>
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
          </>
        )}

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
          // flex-direction: row-reverse;
          @media (max-width: ${theme.breakpoints.values.md}px) {
            flex-direction: row;
            justify-content: center;
          }
        `}
        direction={width < 40 ? 'column' : 'row-reverse'}
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
            // flex-direction: row-reverse;
            margin-top: 1rem;
            @media (max-width: ${theme.breakpoints.values.md}px) {
              // flex-direction: row;
              justify-content: center;
            }
          `}
          direction={width < 40 ? 'column' : 'row-reverse'}
        >
          {thirdPartyLinks.map((linkObj) => (
            <Grid item>
              {/* {width < 40 ? (
                <IconButton
                  variant="contained"
                  color="tertiary"
                  startIcon={linkObj.icon}
                  css={css`
                    margin: 3px;
                    border-radius: 30px;
                  `}
                  href={linkObj.link}
                  target="_blank"
                >
                  {linkObj.icon}
                </IconButton>
              ) : ( */}
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
                {width < 40 ? '' : linkObj.label}
              </Button>
              {/* )} */}
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
      <Puller
        // variant="contained"
        color="tertiary"
        draggable
        onClick={handleClickPuller}
        // onDrag={(e) => {
        //   handleDragPuller(e);
        // }}
        // onDragEnd={handlerDragEndPuller}
      />

      {/* <Typography color="secondary" variant="h1</Typography> */}
    </Grid>
  );
}
