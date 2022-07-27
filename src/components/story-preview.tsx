import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Chip,
  Container,
  css,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PageProps } from 'gatsby';
import { SanityStoryNode } from '../interfaces/sanity-node.interface';
import { StaticImage } from 'gatsby-plugin-image';

type IndexPageProps = {
  sanityNode: SanityStoryNode;
};
export default function StoryPreview(props: IndexPageProps) {
  const { sanityNode } = props;
  const theme = useTheme();

  const [previewText, setPreviewText] = useState('');

  useEffect(() => {
    let text: string = '';
    for (let i = 0; i < sanityNode.body.length; i++) {
      if (text.length > 70) {
        break;
      }
      const body = sanityNode.body[i];
      for (let i = 0; i < body.children.length; i++) {
        const child = body.children[i];
        const words = child.text.split(' ');
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (text.length > 140) {
            text += `...`;
            break;
          } else {
            text += ` ${word}`;
          }
        }
      }
    }
    setPreviewText(text);
  }, [sanityNode]);

  console.log({
    url: window.location.host + sanityNode.banner?.asset?.resize?.src,
  });

  return (
    <Grid item container xs={12}>
      <Card
        css={css`
          margin: ${theme.spacing(1)};
        `}
      >
        <CardActionArea>
          <Grid container padding={2} spacing={2}>
            {/* {JSON.stringify(node, null, 2)} */}
            <Grid
              item
              container
              xs={3}
              // sx={{
              //   height: 'auto',
              //   // maxHeight: { xs: 233, md: 167 },
              //   // maxWidth: { xs: 350, md: 250 },
              // }}
            >
              {sanityNode.banner?.asset?.resize?.src ? (
                <Grid
                  component={'img'}
                  src={'..' + sanityNode.banner?.asset?.resize?.src}
                  height="auto"
                  width="100%"
                />
              ) : (
                <StaticImage
                  src="../images/img-placeholder.png"
                  alt="Default Image Placeholder"
                  css={css`
              height: auto
              width:  100%
            `}
                />
              )}
              {/* {JSON.stringify(
          window.location.host + sanityNode.banner?.asset?.resize?.src,
          null,
          2
        )} */}
            </Grid>
            <Grid item container xs={9}>
              <Grid item xs={12}>
                <Typography variant="h4">{sanityNode.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">
                  {new Date(sanityNode._createdAt).toISOString().split('T')[0]}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{previewText}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
