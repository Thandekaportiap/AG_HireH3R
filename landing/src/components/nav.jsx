import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';
import Logo from '../assets/logo.png'



const nav = () => {

    const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }

    return (
        <div>
            <>
            <div className="flex items-center justify-between p-10 
            lg:flex-row text-black-600" w-full h-30 gap-3 lg:bg-secondary ssm:bg-primary>
                <div><a href="#"><img src={Logo} alt=""  /></a></div> 
                
                <div className="space-x-4">
                <div className="ssm:hidden lg:block space-x-2">
                    
                    <a href="#" class="text-2xl">Carrer Advice</a>
                    <a href="#" class="text-2xl">Employers</a>
                    <a href="#" class="text-2xl">Job Alerts</a>
                    <a href="#" className='text-2xl'>Pricing</a>
                    <a href="#" class="text-2xl w-257 h-54 flex-none order-1">Log In</a>
                    <a href="#" class="text-whitetext-2xl w-257 h-54 flex-none order-1"><button className='bg-fuchsia-950 rounded py-3 px-8'>Sing Up</button></a>               
                </div>
                <div className='ssm:block lg:hidden'>
                { toggle ? (
                         <AiOutlineClose onClick={closeMenu} size={30}
                          className='text-primary curser-pointer' />
                ):( <HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />)}
               
                </div>
                </div>

            </div>
            <div className='ssm:flex  lg:hidden'>
                {toggle ?(
                    <div className="space-x-4 left-[0%] fixed top-0 w-[0%] h-full ml-10">
                <a href="#" class="text-2xl">Carrer Advice</a>
                <a href="#" class="text-2xl">Employers</a>
                <a href="#" class="text-2xl">Job Alerts</a>
        
                <a href="#" class="text-2xl">Log In</a>
                <a href="#" class="text-2xl"><button>Sing Up</button></a>
                </div>
                ):(
                <div></div>
                )}
            </div>
            </>
        </div>
    )
}

export default nav