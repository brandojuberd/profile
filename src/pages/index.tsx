import { css, Grid, Typography, useTheme } from '@mui/material';
import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../components/seo';
import StoryPreview from '../components/story-preview';
import { SanityStoryNode } from '../interfaces/sanity-node.interface';

type IndexPageProps = PageProps<{
  // data: {
  allSanityStory: {
    nodes: SanityStoryNode[];
  };
  // }
}>;

const IndexPage = (props: IndexPageProps) => {
  const { data } = props;
  const theme = useTheme();

  console.log({
    data,
  });

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
      {data.allSanityStory.nodes.map((node) => {
        return <StoryPreview sanityNode={node} />;
      })}
      {data.allSanityStory.nodes.map((node) => {
        return <StoryPreview sanityNode={node} />;
      })}
      {/* <Grid item>
        <Typography
          // css={css`
          //   margin-top: 0;
          // `}
          variant="h3"
        >
          Tech guy.
        </Typography>
      </Grid> */}
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

export const query = graphql`
  query MyQuery {
    allSanityStory(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        _createdAt
        _id
        body {
          _key
          children {
            _key
            text
            marks
            _type
          }
          list
          style
          _type
          _rawChildren(resolveReferences: { maxDepth: 10 })
        }
        title
        banner {
          asset {
            url
            resize(aspectRatio: 1, width: 500, height: 500) {
              src
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
