import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  css,
  Grid,
  IconButton,
  Slide,
  Slider,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import _ from 'lodash';
import { grey } from '@mui/material/colors';

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
  right: 8,
  // left: 'calc(50% - 15px)',
  '&:hover': {
    background: theme.palette.mode === 'light' ? grey[400] : grey[400],
  },
}));

export default function ResponsiveHeader() {
  const theme = useTheme();

  const [scrollDir, setScrollDir] = useState('scrolling down');
  const [gridSize, setGridSize] = useState(6);
  const [slide, setSlide] = useState<{
    checked: boolean;
    direction: 'down' | 'right';
  }>({ direction: 'down', checked: true });
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [area, setArea] = useState({
    height: 100,
    width: 50,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [title, setTitle] = useState(['BRANDO', 'JUBERD']);
  const [className, setClassName] = useState('');
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
    // if (width === 50) {
    //   setWidth(10);
    // } else {
    //   setWidth(50);
    // }
    const el = document.getElementById('responsive-header');
    function setOpenTitle() {
      // if(!isClose)
      setTitle(['Brando', 'Juberd']);
      el?.removeEventListener('animationend', setOpenTitle, false);
    }
    function setCloseTitle() {
      // if(isClose)
      setTitle(['B']);
      el?.removeEventListener('animationstart', setCloseTitle, false);
    }
    if (el?.classList.contains('navbarClose')) {
      el?.classList.remove('navbarClose');
      el?.classList.add('navbarOpen');
      setIsClose(false);
      el?.addEventListener('animationend', setOpenTitle, false);
      // elContainer?.classList.remove('contentContainerAnimation');
      // elContainer?.classList.add('contentContainerAnimationBack');
    } else {
      // window.scrollTo(0, 0);
      // window.scrollTo(0, elContainer?.clientHeight || 0);
      setIsClose(true);
      el?.classList.remove('navbarOpen');
      el?.classList.add('navbarClose');
      el?.addEventListener('animationstart', setCloseTitle, false);
      // elContainer?.classList.remove('contentContainerAnimationBack');
      // elContainer?.classList.add('contentContainerAnimation');
    }
  }
  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset;
  //     const innerHeight = window.innerHeight;
  //     const twentyPercent = innerHeight * 0.2;

  //     const change = (scrollY / innerHeight) * 100;

  //     setArea({
  //       height: 100 - change,
  //       width: 50 + change,
  //     });
  //     // setTransform({
  //     //   x: 0 - scrollY,
  //     //   y: scrollY,
  //     // });

  //     console.log({
  //       scrollY,
  //       innerHeight,
  //       clientHeight: document.documentElement.clientHeight,
  //       slide,
  //       transform,
  //     });
  //     // if (scrollY > innerHeight / 4) {
  //     //   setGridSize(12);
  //     //   setSlide({
  //     //     ...slide,
  //     //     direction: "down",
  //     //     checked: true
  //     //   })
  //     // } else {
  //     //   setGridSize(6);
  //     //   setSlide({
  //     //     ...slide,
  //     //     direction: "right",
  //     //     checked: true
  //     //   })
  //     // }
  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       if (lastScrollY > 200) {
  //         setClassName(`responsiveHeaderAnimation`);
  //       } else {
  //         setClassName(``)
  //       }
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   console.log(scrollDir, lastScrollY);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scrollDir]);

  // useEffect(() => {
  //   window.addEventListener('scroll', setHeader, { passive: false });
  //   // const element = document.getElementById('responsive-header');
  //   // element?.addEventListener('animationstart', animationListener, false);
  //   // element?.addEventListener('animationend', animationListener, false);
  //   // element?.addEventListener('animationiteration', animationListener, false);
  // }, []);

  function detectScroll() {
    const el = document.getElementById('responsive-header');
    var windowHeight = window.innerHeight;
    // var windowOuterHeight = window.outerHeight;
    // var screenTop = window.screenTop;
    // var scrollY = window.scrollY;
    var elementTop = el?.getBoundingClientRect().top || 0;
    var elementVisible = 800;
    // console.log({
    //   windowHeight,
    //   elementTop,
    //   // screenTop,
    //   // scrollY,
    //   elementVisible,
    //   cal: windowHeight + elementTop,
    // });

    // if (elementVisible > windowHeight + elementTop) {
    //   // el?.offsetHeight;
    //   el?.classList.add('responsiveHeaderAnimation');
    //   // el?.classList.remove("responsiveHeaderAnimationBack");
    // } else {
    //   // el?.offsetHeight;
    //   el?.classList.remove('responsiveHeaderAnimation');
    //   // el?.classList.add("responsiveHeaderAnimationBack");
    // }
  }
  function setHeader(this: Window, e: Event) {
    e.preventDefault();
    e.stopPropagation();
    console.log({
      note: 'wheel moved',
    });
    const el = document.getElementById('responsive-header');
    const elContainer = document.getElementById('content-container');

    if (el?.classList.contains('responsiveHeaderAnimation')) {
      // el?.classList.remove('responsiveHeaderAnimation');
      // el?.classList.add('responsiveHeaderAnimationBack');
      // elContainer?.classList.remove('contentContainerAnimation');
      // elContainer?.classList.add('contentContainerAnimationBack');
    } else {
      // window.scrollTo(0, 0);
      // window.scrollTo(0, elContainer?.clientHeight || 0);

      el?.classList.remove('responsiveHeaderAnimationBack');
      el?.classList.add('responsiveHeaderAnimation');

      elContainer?.classList.remove('contentContainerAnimationBack');
      elContainer?.classList.add('contentContainerAnimation');
    }
    // }
  }

  return (
    <Grid
      item
      container
      alignItems={'center'}
      alignContent={'center'}
      direction={'row-reverse'}
      // md={gridSize}
      id={'responsive-header'}
      className={className}
      // height={gridSize === 6 ? '100vh' : 'inherit'}
      css={css`
        background-color: ${theme.palette.primary.main};
        z-index: 1;
        height: 100vh;
        width: 50%;
        // position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        padding: 1rem;
        text-align: center;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          position: static;
          height: inherit;
          width: 100%;
        }
      `}
    >
      <Grid
        item
        container
        justifyContent={isClose ? 'center' : 'flex-start'}
        direction={isClose ? 'row' : 'row-reverse'}
      >
        {title.map((text, i) => (
          <Grid item xs={12} key={i}>
            <Typography
              color="grey.A100"
              variant="h1"
              lineHeight={'73%'}
              fontFamily={'Arial, Helvetica, sans-serif;'}
              css={css`
                text-align: center;
                font-size: 3.5rem;
                @media (min-width: ${theme.breakpoints.values.sm}px) {
                  font-size: 6rem;
                }
                @media (min-width: ${theme.breakpoints.values.md}px) {
                  text-align: ${isClose ? 'center' : 'right'};
                  font-size: 6rem;
                }
                @media (min-width: 1126px) {
                  text-align: ${isClose ? 'center' : 'right'};
                  font-size: 8rem;
                }
                @media (min-width: 1260px) {
                  text-align: ${isClose ? 'center' : 'right'};
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
          // // background-color: ${theme.palette.background.default};
          // // flex-direction: row-reverse;
          // @media (max-width: ${theme.breakpoints.values.md}px) {
          //   // flex-direction: row;
          //   justify-content: center;
          // }
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
            // flex-direction: row-reverse;
            margin-top: 1rem;
            @media (max-width: ${theme.breakpoints.values.md}px) {
              flex-direction: row;
              justify-content: center;
            }
          `}
          justifyContent={isClose ? 'center' : 'flex-start'}
          direction={isClose ? 'row' : 'row-reverse'}
        >
          {thirdPartyLinks.map((linkObj, i) => (
            <Grid item key={i}>
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
                {isClose ? '' : linkObj.label}
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
      {}
      <Puller
        // variant="contained"
        css={css`
          @media (max-width: ${theme.breakpoints.values.md}px) {
            display: none;
          }
        `}
        color="tertiary"
        draggable
        onClick={handleClickPuller}
        // onDrag={(e) => {
        //   handleDragPuller(e);
        // }}
        // onDragEnd={handlerDragEndPuller}
      />
    </Grid>
  );
}
