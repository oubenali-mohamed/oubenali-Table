import React from 'react'

function TableEmployee({ columns, rows }) {
  let displayRows = [...rows]

  window.onload = () => {
    const inputSearch = document.querySelector('#inputSearch')
    inputSearch.addEventListener('input', function (e) {
      e.preventDefault()
      const searchLettre = e.target.value
      filtreEmployee(searchLettre, displayRows)
    })
  }
  function filtreEmployee(lettre, element) {
    for (let i = 0; i < element.length; i++) {
      if (element[i].lastName.toLowerCase().includes(lettre)) {
        return element[i]
      }
      console.log(element[i])
    }
    // console.log(displayRows)
  }

  return (
    <div>
      <div className="searchList">
        <label htmlFor="inputSearch">Search:</label>
        <input
          onChange={filtreEmployee}
          type="search"
          id="inputSearch"
          name="employee"
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
          {displayRows.map((row, index) => (
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
