module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
'strapi-google-auth': {
        enabled: true,
    },
'import-export-entries': {
        enabled: true,
    },
 'strapi-plugin-populate-deep': {
        config: {
          defaultDepth: 5, // Default is 5
        }
      },
  'duplicate-button': true,
});
