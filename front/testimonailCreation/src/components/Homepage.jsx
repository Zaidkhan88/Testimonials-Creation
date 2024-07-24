// Import all of Bootstrap's CSS
// import "bootstrap/scss/bootstrap";

import { useState } from "react"
import Adminform from "./Adminform"

    
const Homepage=()=>{
  const [adminFormOff,setAdminFormOn] = useState(false)

const handleClick=()=>{
    setAdminFormOn(true)
    
    }
  return (
    <>
    {!adminFormOff && (
      <div className="my-5 pl-5 pr-5 d-flex justify-content-center align-items-center flex-column ">
      <h1 className="my-5">Get Testimonials From your customers with ease</h1>
      <button type="button" className="btn btn-primary mx-4 " onClick={handleClick}>Primary</button>
      
    </div>
    )}
    
    {adminFormOff && <Adminform/>
    }
    
    </>
    
  )

}
export default Homepage
