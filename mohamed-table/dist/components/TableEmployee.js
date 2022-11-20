"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function TableEmployee(_ref) {
  var columns = _ref.columns,
    rows = _ref.rows;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index,
      className: "th"
    }, column);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, rows.map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement("td", {
      key: index,
      className: "td"
    }, row);
  })))));
}
var _default = TableEmployee;
exports.default = _default;