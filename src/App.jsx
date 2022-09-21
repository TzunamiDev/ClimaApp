import AppCllima from './components/AppCllima'
import ClimaProvider from './provider/ClimaProvider'

function App() {

  return (
    <>
      <ClimaProvider>
        <header>
          <h1>Buscador de Clima</h1>
        </header>
        <AppCllima />
      </ClimaProvider>
    </>
  )
}

export default App
