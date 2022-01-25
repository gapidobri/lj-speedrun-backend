'use strict';

/**
 * traffic-light router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::traffic-light.traffic-light');
