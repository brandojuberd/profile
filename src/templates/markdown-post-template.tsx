// import React from 'react';
// import { graphql } from 'gatsby';
// import {
//   css,
//   CssBaseline,
//   Grid,
//   ThemeProvider,
//   Typography,
//   useTheme,
// } from '@mui/material';
// import { MDXProvider } from '@mdx-js/react';
// import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
// import { materialUiTheme } from '../styles/theme';

// export default function MarkdownPostTemplate({
//   data, // this prop will be injected by the GraphQL query below.
// }: {
//   data: {
//     markdownRemark: {
//       frontmatter: { title: string; date: string };
//       html: string;
//     };
//   };
// }) {
//   const theme = useTheme();
//   const { markdownRemark } = data; // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark;
//   return (
//     <Grid
//       item
//       container
//       alignItems={'center'}
//       alignContent={'center'}
//       padding={'16px'}
//       css={css`
//         height: 100vh;
//         @media (max-width: ${theme.breakpoints.values.md}px) {
//           height: inherit;
//         }
//       `}
//     >
//       <Grid item>
//         <h1 css={css`margin-top:0;`}>{frontmatter.title}</h1>
//         {/* <h3>{frontmatter.date}</h3> */}
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//           css={css`
//             * {
//               padding: 0;
//               margin: 0;
//             }
//           `}
//         />
//       </Grid>
//     </Grid>
//   );
// }
// export const pageQuery = graphql`
//   query ($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `;
