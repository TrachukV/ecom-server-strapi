module.exports = ({ env }) => ({
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
});
