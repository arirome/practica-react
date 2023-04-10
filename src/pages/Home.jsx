import React, { useState } from 'react'
import Mensaje from '../components/Mensaje'
import Padre from '../components/Padre'
import PruebaContext from '../contexts/PruebaContext'
import Form from '../components/Form'

const Home = () => {
  const initForm = {nombre:'', apellido:'', edad:5}
  const [estado, setEstado] = useState(initForm)

  return (
    <div>
      Hola Mundo
      <PruebaContext.Provider value={{estado, setEstado}}>
        <Form />
      </PruebaContext.Provider>
      <div>{estado.nombre}</div>
      <div>{estado.apellido}</div>
      {
        estado.edad > 18 && <label>So mayor</label>
      }
      {/* <Form mensaje={estado} /> */}
    </div>
  )
}

export default Home
