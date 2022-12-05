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
  var displyaRows = [];
  window.onload = function () {
    var inputSearch = document.querySelector('#inputSearch');
    inputSearch.addEventListener('input', filtreEmployee);
    function filtreEmployee(e) {
      var searchLettre = e.target.value.toLowerCase();
      displyaRows = rows.filter(function (employee) {
        return employee.lastName.toLowerCase().includes(searchLettre);
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "searchList"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlfor: "inputSearch"
  }, "Search:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    id: "inputSearch",
    name: "employee"
  })), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index
    }, column);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, displyaRows.map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", null, row.firstName), /*#__PURE__*/_react.default.createElement("td", null, row.lastName), /*#__PURE__*/_react.default.createElement("td", null, row.city), /*#__PURE__*/_react.default.createElement("td", null, row.zipCode), /*#__PURE__*/_react.default.createElement("td", null, row.street), /*#__PURE__*/_react.default.createElement("td", null, row.state), /*#__PURE__*/_react.default.createElement("td", null, row.department), /*#__PURE__*/_react.default.createElement("td", null, row.dateOfBirth), /*#__PURE__*/_react.default.createElement("td", null, row.startDate));
  }))));
}
var _default = TableEmployee;
exports.default = _default;