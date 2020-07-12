// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Digital Garden',
  siteUrl: 'https://zigelzi.github.io/',
  pathPrefix: '/digard',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'xu91v1jl',
        dataset: 'digital_garden',
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        token: process.env.SANITY_AUTH_TOKEN,
        overlayDrafts: false,
        watchMode: false,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
