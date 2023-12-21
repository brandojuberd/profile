import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Brando Juberd`,
    description: 'Personal Website',
    author: 'Brando Juberd',
    siteUrl: `https://www.brandojuberd.com`,
    image: "/icons/icon-512x512.png"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'xqpjc9ae',
    //     dataset: 'production',
    //     // a token with read permissions is required
    //     // if you have a private dataset
    //     token: process.env.SANITY_TOKEN,
    //     watchMode: true,

    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //     graphqlTag: 'default',
    //   },
    // },
    `gatsby-transformer-remark`,
  ],
};

export default config;
