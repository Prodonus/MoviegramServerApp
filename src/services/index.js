const users = require('./users/users.service.js');
const moviefeeds = require('./moviefeeds/moviefeeds.service.js');
const videos = require('./videos/videos.service.js');
const subscription = require('./subscription/subscription.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(moviefeeds);
  app.configure(videos);
  app.configure(subscription);
};
