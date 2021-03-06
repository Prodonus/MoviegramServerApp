// Initializes the `subscription` service on path `/subscription`
const createService = require('feathers-mongoose');
const createModel = require('../../models/subscription.model');
const hooks = require('./subscription.hooks');
const filters = require('./subscription.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'subscription',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/subscription', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('subscription');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
