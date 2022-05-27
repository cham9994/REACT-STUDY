import React from 'react'
import dummys from '../components/Dummys'

const Region = () => {
  const dummyItems = dummys

  return (
    <div>
      <h1>Region</h1>
      <div className="region-list">
        {dummyItems.map((it) => (
          <div className="region-items" key={it.id}>
            <div>
              <h3>{it.title}</h3>
              <p>
                <span>{it.date}</span> {''}
                {it.region}
              </p>
              <p>{it.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Region
