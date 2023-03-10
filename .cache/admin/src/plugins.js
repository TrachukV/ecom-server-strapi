
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import graphql from '../../../node_modules/@strapi/plugin-graphql/strapi-admin.js';
import strapiGoogleAuth from '../../../node_modules/strapi-google-auth/strapi-admin.js';
import importExportEntries from '../../../node_modules/strapi-plugin-import-export-entries/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import vercelDeploy from '../../../node_modules/strapi-plugin-vercel-deploy/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'graphql': graphql,
  'strapi-google-auth': strapiGoogleAuth,
  'import-export-entries': importExportEntries,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'vercel-deploy': vercelDeploy,
};

export default plugins;
