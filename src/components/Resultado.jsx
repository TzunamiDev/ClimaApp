import useClima from '../hooks/useClima'

const Resultado = () => {
  
  const { resultado } = useClima()
  const { name, main } = resultado

  // Grados Kelvin
  const kelvin = 273.15
  
  return (
    <div className='contenedor clima'>
      <h2>El clima de {name} es: </h2>
      <p>{(main.temp - kelvin).toFixed()} <span>&#x2103;</span></p>
      <div className='temp_min_max'>
        <p>Minima: {(main.temp_min - kelvin).toFixed()} <span>&#x2103;</span></p>
        <p>Máxima: {(main.temp_max - kelvin).toFixed()} <span>&#x2103;</span></p>
      </div>
    </div>
  )
}

export default Resultado