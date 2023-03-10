module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'http://bugsmakersteam.pp.ua:1337',
    app: {
        keys: ['randomKey1', 'randomKey2'],
    },
     settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', '*'),
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Access-Control-Expose-Headers',
        'Content-Disposition',
        'X-Download-Options'
      ]
    },
  },
   // webhooks: {
   //populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    //
    //cron: {
      //  enabled: env.bool('CRON_ENABLED', false),
    //},

});