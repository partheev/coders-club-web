import { Routes, Route, Navigate } from 'react-router-dom'
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
        <Route
          path='/coders-club-web/'
          element={<Navigate to={'/coders-club-web/home'} />}
        />
        <Route path='/' element={<Navigate to={'/coders-club-web/home'} />} />
        <Route path='/coders-club-web/events' element={<Events />} />
        <Route path='/coders-club-web/home' element={<Home />} />
        <Route path='/coders-club-web/about' element={<About />} />
        <Route path='/coders-club-web/contactus' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
