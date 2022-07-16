import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async function ({
  actions,
  graphql,
}) {
  const {
    data,
  }: {
    data?: {
      allMarkdownRemark: {
        edges: {
          node: {
            frontmatter: { slug: string };
          };
        }[];
      };
    };
  } = await graphql(`
    query MARKDOWNS {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  data?.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/markdown-post-template.tsx`),
      context: { slug: slug },
    });
  });
};
