import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'./components/Header'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/About'
import InterCommunity from './pages/InternationalCommunity/InterCommunity'
import Reach from './pages/ReachUS/reachus'
import Attendus from './pages/Attendus/Attendus'
import NotFound from './pages/NotFound/NotFound'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/international-community' element={<InterCommunity />} />
          <Route path='/reach-us' element={<Reach />} />
          <Route path='/attendus' element={<Attendus />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
