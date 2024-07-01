import Nav from "./nav"
import Hero from "./hero"
import Signup from "./signup"
import Footer from "./footer"
import Verification from "./verification"
import Joinus from "./joinus"
import Browser from "./browser"




const main = () => {
    return (
        <>
        <div >
            <Nav/>
        </div>
       
        <div>
            <Hero />
        </div>
        <div>
            <Browser/>
        </div>
        <div>
            <Signup/>
        </div>
        <div>
            <Verification/>
        </div>
        <div>
            <Joinus/>
        </div>
        
        <div>
            <Footer/>
        </div>
        </>
    )
}
export default main 