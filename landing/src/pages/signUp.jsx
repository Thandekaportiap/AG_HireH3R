import React from 'react'
import Navigation from '../components/navigation'
import Signup from '../components/signup'
import Footer from '../components/footer'

function signUp() {
  return (
    <>
    <div>
      <Navigation/>
    </div>
    <div>
      <Signup/>
    </div>
    <div>
      <Footer/>
    </div>
    </>

  )
}

export default signUp
