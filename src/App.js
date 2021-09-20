import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import './app.css'

import axios from 'axios'

function App () {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const results = !searchTerm
    ? countries
    : countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )

  const handleClick = val => {
    setSearchTerm(val)
  }

  return (
    <div>
      <Filter searchTerm={searchTerm} handleChange={handleChange} />
      <Countries results={results} handleClick={handleClick} />
    </div>
  )
}

export default App
