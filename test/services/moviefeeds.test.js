const assert = require('assert');
const app = require('../../src/app');

describe('\'moviefeeds\' service', () => {
  it('registered the service', () => {
    const service = app.service('moviefeeds');

    assert.ok(service, 'Registered the service');
  });
});
