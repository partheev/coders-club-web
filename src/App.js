import { Routes, Route } from 'react-router-dom'
import { Puri } from './components/puri/Puri'

function App() {
  return (
    <div>
      <div className='App bg-blue-400'>Hellojj</div>
      <Routes>
        <Route path='/puri' element={<Puri />} />
      </Routes>
    </div>
  )
}

export default App
