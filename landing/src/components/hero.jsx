import HeroPic from '../assets/hero.png'

const hero = () => {
    return (
        <section className='flex justify-around mt-20 '>
            <div className='ml-12'>
                <h1 className='lg:font-semibold lg:text-6xl ssm:font-normal ssm:text-base mb-6'>Join the next generation<br></br>
                 of talents and Sign up with<br></br>
                HireH3R now!
                </h1>
                <h4 className='size-6 font-normal text-xl smm:text-sm inline mb-4'>Connecting talents and creating futures</h4>
                <div>
                <button className='bg-fuchsia-950 rounded lg:py-3 lg:px-8 ssm:py-1,5 ssm:px-4 mt-14'>Get Started</button>
                </div>
                
            </div>
            <div>
                <img src={HeroPic} alt="hero" className=' mr-4 lg:w-fit lg:h-96 ssm:h-32 ssm:w-44  rounded-lg' />
            </div>
            
        </section>
    )
}

export default hero