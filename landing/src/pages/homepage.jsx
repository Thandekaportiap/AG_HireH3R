import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Browser from '../components/browser'
import Footer from '../components/footer'

function homepage() {
  return (
    <div>
      <div><Nav/></div>
      <div><Hero/></div>
      <div className='mb-12'><Browser/></div>
      <div><Footer/></div>
      </div>
  )
}

export default homepage
