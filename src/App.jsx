import React from 'react'

import {About,Footer,Skills,Header,Work,Testimonials} from './containers'
import {Navbar} from './components'

import './App.scss'

export default function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
