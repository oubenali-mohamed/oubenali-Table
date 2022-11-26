import React from 'react'

function TableEmployee({ columns, rows }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="th">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map((row, index) => (
              <td key={index}>{row}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default TableEmployee
