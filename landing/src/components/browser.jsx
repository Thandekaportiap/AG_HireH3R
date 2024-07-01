import Img1 from '../assets/img1.png'
import Card1 from '../assets/card 1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Customer from '../assets/customers.png'

import React from 'react'

export default function browser() {
  return (
    <>
    <div className="white mx-12 ssm:text-center">
      <h1 className="text-black text-2xl font-bold p-4">Browser Jobs</h1>
      <h1>
      Connecting talents and creating futures
      </h1>
      <div className="lg:grid grid-cols-4 grid-rows-3 gap-4 p-4 ssm:block ml-12">
        <div className="bg-slate-100">
          <h1>Digital Marketing</h1>
          <br></br>310 jobs Available</div>
        <div className="bg-slate-100">
          <h1>Product Design</h1>
          <br></br>120 jobs Available</div>
        <div className="bg-slate-100">
        <h1>Front-End Development</h1>
        <br></br>200 jobs Available
        </div>
        <div className="bg-slate-100">
        <h1>Back-End Development</h1>
        <br></br>310 jobs Available
        </div>
        <div className="bg-slate-100">
        <h1>Artificial Intelligence</h1>
        <br></br>450 jobs Available
        </div>
        <div className="bg-slate-100">
        <h1>Mobile App Developer</h1>
        <br></br>89 jobs Available
        </div>
        <div className="bg-slate-100">
        <h1>Product Management</h1>
        <br></br>30 jobs Available
        </div>
        <div className="bg-slate-100">
        <h1>Cloud Engineering</h1>
        <br></br>30 jobs Available
        </div>
        <h1 className='text-center'>See more</h1>
      </div>
      
    </div>
    <div>
      <h1 className='text-center '>We Provide</h1>
    
      <div class="lg:flex ... ssm:block">
      <div class="flex-1 ..."><img src={Card1} alt="" /></div>
        <div class="contents">
        <div class="flex-1 ..."><img src={Card2} alt="" /></div>
      <div class="flex-1 ..."><img src={Card3} alt="" /></div>
        </div>
      </div>
    </div>
    <div className='ml-12'>
      <img src={Img1} alt="" />
    </div>
    <div className='ml-12'>
      <img src={Customer} alt="" />
    </div>
    </>
  )
}
