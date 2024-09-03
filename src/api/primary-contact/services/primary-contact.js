'use strict';

/**
 * primary-contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::primary-contact.primary-contact');
