import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import TopNavbar from './Components/TopNavbar'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container-fluid">
      <div>
        <TopNavbar/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="contact-us" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    <div>
      <Footer/>
    </div>
  </React.StrictMode>
)
