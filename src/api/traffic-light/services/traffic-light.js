'use strict';

/**
 * traffic-light service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::traffic-light.traffic-light');
