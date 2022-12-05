import React from 'react'

function TableEmployee({ columns, rows }) {
  let displyaRows = []
  window.onload = () => {
    const inputSearch = document.querySelector('#inputSearch')
    inputSearch.addEventListener('input', filtreEmployee)
    function filtreEmployee(e) {
      const searchLettre = e.target.value.toLowerCase()
      displyaRows = rows.filter((employee) =>
        employee.lastName.toLowerCase().includes(searchLettre)
      )
    }
  }
  
  return (
    <div>
      <div className="searchList">
        <label for="inputSearch">Search:</label>
        <input type="search" id="inputSearch" name="employee" />
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
          {displyaRows.map((row, index) => (
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
