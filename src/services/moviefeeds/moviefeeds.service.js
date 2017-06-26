// Initializes the `moviefeeds` service on path `/moviefeeds`
const createService = require('feathers-mongoose');
const createModel = require('../../models/moviefeeds.model');
const hooks = require('./moviefeeds.hooks');
const filters = require('./moviefeeds.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'moviefeeds',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/moviefeeds', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('moviefeeds');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
