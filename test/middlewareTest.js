const assert = require('chai').assert;
const requestTime = require('../config/middleware').addRequestTime;

describe('addRequestTime middleware', function () {
    it('should add a request time property to `req`', function() {
        const req = {};
        requestTime(req);
        assert.ok(req.requestTime > 0);
    }
    )
})
