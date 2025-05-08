import './App.css'
import Conteudo from './conteudo/conteudo'

function App() {
  

  return (
    <>

      <header className='bg-blue-500 text-center h-10'>
        <h1 className='text-white'>Header</h1>
      </header>

      <main className='bg-black text-white w-dvw h-160 flex flex-col'>
        <Conteudo/>
      </main>

      <footer className='bg-gray-400 text-center h-12'>
        <h1 className='text-white '>footer</h1>
      </footer>

    </>
  )
}

export default App
