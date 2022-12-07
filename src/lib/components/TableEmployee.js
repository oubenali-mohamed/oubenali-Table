import React from 'react'
import { useState } from 'react'

function TableEmployee({ columns, rows }) {
  const [searchLetter, setSearchLetter] = useState('')
  let displayRows = [...rows]
  console.log(displayRows)
  // let searchLettre = ''

  /*  const filtreEmployee = (e) => {
    searchLettre = e.target.value.toLowerCase()
    console.log(searchLettre)
    displayRows.filter((row) => {
      return row.lastName.toLowerCase().includes(searchLettre)
    })
    console.log(displayRows)
  } */
  const filtreEmployee = (e) => {
    let value = e.target.value
    setSearchLetter(value)
  }
  console.log(searchLetter)
  return (
    <div>
      <div className="searchList">
        <label htmlFor="inputSearch">Search:</label>
        <input
          type="search"
          id="inputSearch"
          name="employee"
          onChange={filtreEmployee}
        />
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
              return employee.lastName
                .toLowerCase()
                .includes(searchLetter.toLowerCase())
            })
            .map((row, index) => (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.city}</td>
                <td>{row.zipCode}</td>
                <td>{row.street}</td>
                <td>{row.state}</td>
                <td>{row.department}</td>
                <td>{row.dateOfBirth}</td>
                <td>{row.startDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default TableEmployee
