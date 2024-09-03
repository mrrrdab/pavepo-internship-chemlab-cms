'use strict';

/**
 * catalog-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::catalog-image.catalog-image');
