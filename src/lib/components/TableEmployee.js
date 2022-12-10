import React from 'react'
import { useState } from 'react'

function TableEmployee({ columns, rows }) {
  const [searchLetter, setSearchLetter] = useState('')
  const [selectOption, setSelectOption] = useState('')
  let displayRows = rows

  const filtreEmployee = (e) => {
    let value = e.target.value
    setSearchLetter(value)
  }

  const selectList = (e) => {
    let selectValue = e.target.value
    setSelectOption(selectValue)
  }
  console.log(selectOption)
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
          {displayRows
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
            .map((row, index) =>
              index === 10 ? (
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
              ) : null
            )}
        </tbody>
      </table>
    </div>
  )
}
export default TableEmployee
