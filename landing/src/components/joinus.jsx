
function joinus() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-8">Join as a Job seeker or recruiter</h1>
  
        <div className="flex gap-8 ">
          <div className=" p-4 h-52 text-black mr-12">
            <p className="text-2xl text-center">I am an African<br></br> female looking for a job</p>
          </div>
          <div className="flex-1  p-4 text-black ml-12">
            <p className="text-2xl text-center">I am a recruiter<br></br> looking for female talent</p>
          </div>
        </div>
  
        <button className="mt-24 bg-slate-200  hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
          Create account
        </button>
  
        <p className="mt-4 text-gray-600">Already have an account? <a href="#">Login</a></p>
      </div>
    );
  }
  
  export default joinus;