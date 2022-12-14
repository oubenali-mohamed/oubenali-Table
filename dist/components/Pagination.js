"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var Pagination = function Pagination(_ref) {
  var totalEmployes = _ref.totalEmployes,
    employesPerPage = _ref.employesPerPage,
    setCurrentPage = _ref.setCurrentPage,
    currentPage = _ref.currentPage;
  var pages = [];
  for (var i = 1; i <= Math.ceil(totalEmployes / employesPerPage); i++) {
    pages.push(i);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, pages.map(function (page, index) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: index,
      onClick: function onClick() {
        return setCurrentPage(page);
      },
      className: page == currentPage ? "active" : ""
    }, page);
  }));
};
var _default = Pagination;
exports.default = _default;