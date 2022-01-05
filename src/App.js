import { Routes, Route } from 'react-router-dom'
import { About } from './components/about/About'
import { Contact } from './components/Contact'
import Events from './components/events/Events'
import Header from './components/Header'
import { Home } from './components/home/Home'

function App() {
  return (
    <div className=' min-h-screen bg-slate-200'>
      <Header />
      <Routes>
        {/* <Route path='/puri' element={<Puri />} /> */}
        <Route path='/events' element={<Events />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
