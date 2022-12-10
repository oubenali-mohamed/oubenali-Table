"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function TableEmployee(_ref) {
  var columns = _ref.columns,
    rows = _ref.rows;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    searchLetter = _useState2[0],
    setSearchLetter = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    selectOption = _useState4[0],
    setSelectOption = _useState4[1];
  var displayRows = rows;
  var filtreEmployee = function filtreEmployee(e) {
    var value = e.target.value;
    setSearchLetter(value);
  };
  var selectList = function selectList(e) {
    var selectValue = e.target.value;
    setSelectOption(selectValue);
  };
  console.log(selectOption);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectAndSearch"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectList"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: selectList
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), /*#__PURE__*/_react.default.createElement("label", null, "Entries")), /*#__PURE__*/_react.default.createElement("div", {
    className: "searchList"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "inputSearch"
  }, "Search:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    id: "inputSearch",
    name: "employee",
    onChange: filtreEmployee
  }))), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index
    }, column);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, displayRows.filter(function (employee) {
    return employee.firstName.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.lastName.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.city.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.zipCode.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.street.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.state.toLowerCase().toLowerCase().includes(searchLetter.toLowerCase()) || employee.department.toLowerCase().includes(searchLetter.toLowerCase()) || employee.dateOfBirth.toLowerCase().includes(searchLetter.toLowerCase()) || employee.startDate.toLowerCase().includes(searchLetter.toLowerCase());
  }).map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", null, row.firstName), /*#__PURE__*/_react.default.createElement("td", null, row.lastName), /*#__PURE__*/_react.default.createElement("td", null, row.startDate), /*#__PURE__*/_react.default.createElement("td", null, row.department), /*#__PURE__*/_react.default.createElement("td", null, row.dateOfBirth), /*#__PURE__*/_react.default.createElement("td", null, row.street), /*#__PURE__*/_react.default.createElement("td", null, row.city), /*#__PURE__*/_react.default.createElement("td", null, row.state), /*#__PURE__*/_react.default.createElement("td", null, row.zipCode));
  }))));
}
var _default = TableEmployee;
exports.default = _default;