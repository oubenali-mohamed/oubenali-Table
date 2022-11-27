import React from 'react'

function TableEmployee({ columns, row }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
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
        </tbody>
      </table>
    </div>
  )
}
export default TableEmployee
