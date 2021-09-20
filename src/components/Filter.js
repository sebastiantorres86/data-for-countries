import React from 'react'

const Filter = ({ searchTerm, handleChange }) => {
  return (
    <div>
      find countries{' '}
      <input type='text' value={searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Filter
