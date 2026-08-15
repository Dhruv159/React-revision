import React from 'react'

const Searchbar = () => {
  return (
    <div className="toolbar">
        <input
            type="text"
            placeholder="Search employees..."
            className="search-input"
        />
    </div>
  )
}

export default Searchbar
