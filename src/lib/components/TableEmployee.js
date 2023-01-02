import React from 'react'
import { useState, useEffect } from 'react'
import Pagination from './Pagination'

function TableEmployee({ columns, rows }) {
  const [currentEmployes, setCurrentEmployes] = useState([])
  const [searchLetter, setSearchLetter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [employesPerPage, setEmployesPerPage] = useState(10)

  useEffect(() => {
    setCurrentEmployes([...rows])
  }, [])

  const lastPostIndex = currentPage * employesPerPage
  const firstPostIndex = lastPostIndex - employesPerPage
  const employes = currentEmployes.slice(firstPostIndex, lastPostIndex)

  function filtreEmployee(e) {
    let letterValue = e.target.value
    if (letterValue.length == 0) {
      return currentEmployes
    } else {
      setSearchLetter(letterValue)
      setCurrentEmployes([
        ...currentEmployes.filter((employee) => {
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
            employee.city.toLowerCase().includes(searchLetter.toLowerCase()) ||
            employee.state.toLowerCase().includes(searchLetter.toLowerCase()) ||
            employee.zipCode.includes(searchLetter)
          )
        }),
      ])
    }
  }
  const selectList = (e) => {
    let valueSelect = e.target.value
    setEmployesPerPage(valueSelect)
  }

  return (
    <div>
      <div className="selectAndSearch">
        <div className="selectList">
          <label>Show</label>
          <select value={employesPerPage} onChange={selectList}>
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
          {employes.slice(0, employesPerPage).map((row, index) => (
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
        totalEmployes={rows.length}
        employesPerPage={employesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
export default TableEmployee
