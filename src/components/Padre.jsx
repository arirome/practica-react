import React from 'react'

const Padre = ({children}) => {
  return (
    <div style={{backgroundColor: 'red'}}>
      {children}
    </div>
  )
}

export default Padre
