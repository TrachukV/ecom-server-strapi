module.exports = ({ env }) => ({
auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET', 'defaultSecret'),
  },
  apiToken: {
    secret: 'your-secret-key',
    salt: 'your-generated-salt-value'
  },
  transfer: { 
    token: { 
      salt: env("TRANSFER_TOKEN_SALT", 'anotherRandomLongString')
    }
  },
});
