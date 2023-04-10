import React, { useContext } from 'react'
import PruebaContext from '../contexts/PruebaContext'

const Texto = () => {
    const {estado, setEstado} = useContext(PruebaContext)
    const handleCambiar = (e) => {

        setEstado({...estado,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <input name='nombre' onChange={handleCambiar} />
        <input name='apellido' onChange={handleCambiar} />
        <input name='edad' onChange={handleCambiar} />
    </div>
  )
}

export default Texto
