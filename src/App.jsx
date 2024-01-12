import Title from './components/Title'
import NewYear from './assets/new-year1.jpg'
import Contador from './components/Contador'
import useCountDown from './hooks/userCountDown'
import Span from './components/Title'
import './App.css'

function App() {
  const [day, hour, minute, second] = useCountDown('01/01/2025 00:00:00')
  return (
    <div className='App' style={{ backgroundImage: `url(${NewYear})` }}>
      <div className='container'>
        <Title title="Happy New Year" />
        <Span span="2025" />

        <div className='contagem-regressiva'>
          <Contador title="Dias" number={day} />

          <Contador title="Horas" number={hour} />

          <Contador title="Minutos" number={minute} />

          <Contador title="Segundos" number={second} />

        </div>

      </div>
    </div>
  )
}

export default App
