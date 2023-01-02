"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Pagination = _interopRequireDefault(require("./Pagination"));
function TableEmployee(_ref) {
  var columns = _ref.columns,
    rows = _ref.rows;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentEmployes = _useState2[0],
    setCurrentEmployes = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    searchLetter = _useState4[0],
    setSearchLetter = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    employesPerPage = _useState8[0],
    setEmployesPerPage = _useState8[1];
  (0, _react.useEffect)(function () {
    setCurrentEmployes((0, _toConsumableArray2.default)(rows));
  }, []);
  var lastPostIndex = currentPage * employesPerPage;
  var firstPostIndex = lastPostIndex - employesPerPage;
  var employes = currentEmployes.slice(firstPostIndex, lastPostIndex);
  function filtreEmployee(e) {
    var letterValue = e.target.value;
    if (letterValue.length == 0) {
      return currentEmployes;
    } else {
      setSearchLetter(letterValue);
      setCurrentEmployes((0, _toConsumableArray2.default)(currentEmployes.filter(function (employee) {
        return employee.firstName.toLowerCase().includes(searchLetter.toLowerCase()) || employee.lastName.toLowerCase().includes(searchLetter.toLowerCase()) || employee.startDate.includes(searchLetter) || employee.department.toLowerCase().includes(searchLetter.toLowerCase()) || employee.dateOfBirth.includes(searchLetter) || employee.street.toLowerCase().includes(searchLetter.toLowerCase()) || employee.city.toLowerCase().includes(searchLetter.toLowerCase()) || employee.state.toLowerCase().includes(searchLetter.toLowerCase()) || employee.zipCode.includes(searchLetter);
      })));
    }
  }
  var selectList = function selectList(e) {
    var valueSelect = e.target.value;
    setEmployesPerPage(valueSelect);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectAndSearch"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectList"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    value: employesPerPage,
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
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, employes.slice(0, employesPerPage).map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", null, row.firstName), /*#__PURE__*/_react.default.createElement("td", null, row.lastName), /*#__PURE__*/_react.default.createElement("td", null, row.startDate), /*#__PURE__*/_react.default.createElement("td", null, row.department), /*#__PURE__*/_react.default.createElement("td", null, row.dateOfBirth), /*#__PURE__*/_react.default.createElement("td", null, row.street), /*#__PURE__*/_react.default.createElement("td", null, row.city), /*#__PURE__*/_react.default.createElement("td", null, row.state), /*#__PURE__*/_react.default.createElement("td", null, row.zipCode));
  }))), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    totalEmployes: rows.length,
    employesPerPage: employesPerPage,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage
  }));
}
var _default = TableEmployee;
exports.default = _default;