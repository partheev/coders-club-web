import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Puri } from './components/puri/Puri'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/puri' element={<Puri />} />
      </Routes>
    </div>
  )
}

export default App
