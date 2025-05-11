import { executeQuery } from '@datocms/cda-client';

export const performRequest = (query, options) => {
  return executeQuery(query, {
    ...options,
    token: process.env.DATOCMS_API_TOKEN_READONLY,
    environment: process.env.DATOCMS_ENV_PRIMARY,
  });
}