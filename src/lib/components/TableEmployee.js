import React from 'react'
import { useState } from 'react'
import Pagination from './Pagination'
function TableEmployee({ columns, rows }) {
  const [searchLetter, setSearchLetter] = useState('')
  const [selectOption, setSelectOption] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [employesPerPage] = useState(10)

  let displayRows = rows

  const filtreEmployee = (e) => {
    let value = e.target.value
    setSearchLetter(value)
  }

  const selectList = (e) => {
    let selectValue = e.target.value
    setSelectOption(selectValue)
  }
  // if (selectOption == 25) {
  //   console.log(selectOption)
  //   displayRows.slice(0, 25)
  // } else if (selectOption == 50) {
  //   console.log(selectOption)
  // } else if (selectOption == 100) {
  //   console.log(selectOption)
  // }
  const lastEmployeIndex = currentPage * employesPerPage
  const firstEmployeIndex = lastEmployeIndex - employesPerPage
  const currentEmployes = displayRows.slice(firstEmployeIndex, lastEmployeIndex)
  return (
    <div>
      <div className="selectAndSearch">
        <div className="selectList">
          <label>Show</label>
          <select onChange={selectList}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label>Entries</label>
        </div>
        <div className="searchList">
          <label htmlFor="inputSearch">Search:</label>
          <input
            type="search"
            id="inputSearch"
            name="employee"
            onChange={filtreEmployee}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentEmployes
            .filter((employee) => {
              return (
                employee.firstName
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.lastName
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.startDate.includes(searchLetter) ||
                employee.department
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.dateOfBirth.includes(searchLetter) ||
                employee.street
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.city
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.state
                  .toLowerCase()
                  .includes(searchLetter.toLowerCase()) ||
                employee.zipCode.includes(searchLetter)
              )
            })
            .map((row, index) => (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.startDate}</td>
                <td>{row.department}</td>
                <td>{row.dateOfBirth}</td>
                <td>{row.street}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zipCode}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        totalEmployes={displayRows.length}
        employesPerPage={employesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
export default TableEmployee
