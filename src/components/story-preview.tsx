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
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PageProps } from 'gatsby';
import { SanityStoryNode } from '../interfaces/sanity-node.interface';

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
  return (
    <Grid item container>
      {/* {JSON.stringify(node, null, 2)} */}
      <Grid item xs={12}>
        <Typography variant="h3">{sanityNode.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">{new Date(sanityNode._createdAt).toISOString().split('T')[0]}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{previewText}</Typography>
      </Grid>
    </Grid>
  );
}
