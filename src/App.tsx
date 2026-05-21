import './App.css'
import { FortuneDialog } from '@/components/FortuneDialog'

function App() {

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
        <header>
          <h1>Oráculo das Galáxias</h1>
        </header>
        <main className="h-full w-full flex flex-col items-center justify-center gap-8">
          <FortuneDialog
          message="Você encontrará um aliado inesperado em sua jornada."
          figure="./src/assets/exemple.jpg"
        />
        </main>
        <footer className="text-right p-4">
          <p>Desenvolvido por Franklin L. Tomich</p>
        </footer>
      </div>
    </>
  )
}

export default App
