'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (lastQueryDate, handler) {
  (0, _axios2.default)({
    method: 'get',
    url: _constants.TYPEFORM_RESPONSES_URL + '?since=' + lastQueryDate.toISOString(),
    headers: {
      'Authorization': 'Bearer ' + _constants.TYPEFORM_KEY
    }
  }).then(function (_ref) {
    var _ref$data = _ref.data,
        page_count = _ref$data.page_count,
        total_items = _ref$data.total_items,
        items = _ref$data.items;
    return handler(items);
  }).catch(function (err) {
    return console.log('ERROR: couldn\'t fetch and post responses: ' + err);
  });
};