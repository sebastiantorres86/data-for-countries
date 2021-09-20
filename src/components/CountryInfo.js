import React from 'react'

const CountryInfo = ({ country }) => {
  return (
    <>
      {country.map(item => (
        <div className='test' key={item.name}>
          <h1>{item.name}</h1>
          <div>capital {item.capital}</div>
          <div>population {item.population}</div>
          <h2>languages</h2>

          <ul>
            {item.languages.map(lang => (
              <li key={lang.name}>{lang.name}</li>
            ))}
          </ul>
          <img src={item.flag} alt={`${country.name} flag`} />
        </div>
      ))}
    </>
  )
}

export default CountryInfo
