import express from 'express';

/**
 * Adds middlewares 
 * @param {express.Express} api The express app
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
