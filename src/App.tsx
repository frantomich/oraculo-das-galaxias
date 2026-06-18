import './App.css'
import { AboutDialog } from '@/components/AboutDialog'
import { OracleCard } from '@/components/OracleCard'

function App() {

  return (
    <>
      <div className='app-container'>
        <header>
          <img src='./src/assets/logo.png' alt='Logo do Oráculo das Galáxias' className='logo' />
        </header>
        <main>
          <OracleCard/>
        </main>
        <footer>
          <AboutDialog/>
        </footer>
      </div>
    </>
  )
}

export default App
