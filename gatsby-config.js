/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://www.dorinkozmetika.hu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`, // EZ OLDJA MEG AZ ÚJRATÖLTÉSI PROBLÉMÁT
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
}
