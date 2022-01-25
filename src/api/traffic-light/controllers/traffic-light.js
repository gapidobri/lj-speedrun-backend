'use strict';

/**
 *  traffic-light controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::traffic-light.traffic-light');
