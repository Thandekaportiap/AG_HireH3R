//import Main from "./components/main"//

import Homepage from './pages/homepage';
import SignUp from './pages/signUp';
import Verify from './pages/verify'
import JobSeekerSignup from './components/JobSeekerSignup'
import EmployerSignupForm from './components/EmployerSignupForm';
import './index.css'


function App() {
  

  return (
    <>
    <div><Homepage/></div>
    <div><SignUp/></div>
    <div><Verify/></div>
   <div><EmployerSignupForm/></div>
    <div>  <JobSeekerSignup/></div> 

    </>
    
  )
}

export default App
