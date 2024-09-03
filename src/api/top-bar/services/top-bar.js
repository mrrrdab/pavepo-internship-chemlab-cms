'use strict';

/**
 * top-bar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-bar.top-bar');
