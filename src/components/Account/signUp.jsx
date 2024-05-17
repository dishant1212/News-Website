import { useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){


   const navigate= useNavigate()

   const [formData,setFormData]= useState({
        firstName:"",
        lastName:"",
        email:""
   })

   const inputOnChangeHandler=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value})
   }

   const submitHandler=(e)=>{
      e.preventDefault()

      console.log(formData)
      setFormData({
        firstName:"",
        lastName:"",
        email:""
   })

   }

   const backHandler=()=>{
    navigate("/signIn")
   }


    return(
        <>
         <div className="h-auto w-full flex flex-col justify-center items-center bg-[#eee]">
            <div className="h-[100px] w-full "></div>
            <div className="h-auto w-[90%] flex justify-center items-center">
                
                 <div className="h-auto  w-[90%] sm:w-[60%] lg:w-[50%]   my-8 bg-white flex flex-col justify-center items-center">
                 <div className="h-14 w-full flex justify-end items-center">
                        <button className="m-4 flex justify-center items-center" onClick={backHandler}>
                        <FcPrevious className="text-2xl font-bold"/> <p className="text-xl">Back</p> 
                            </button>
                    </div>

                    <div className="h-full w-[80%] sm:w-[60%] " >
                   
                    <h2 className="h-14 w-full text-center flex justify-center items-center text-xl font-bold">Join with email.</h2>
                    <div className="h-auto ">
                         <p className="text-center text-md text-gray-700">To get start, please provide us some basic information about you. We’ll send a verification link to your inbox.</p>
                    </div>  
                    <form className="space-y-4 my-8" onSubmit={submitHandler} >
                        <input className="w-full h-12 border-[1px] border-gray-800 rounded-md outline-none px-4 text-xl font-normal" autoComplete="off" required type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={inputOnChangeHandler}/>
                        <input className="w-full h-12 border-[1px] border-gray-800 rounded-md outline-none  px-4 text-xl font-normal" autoComplete="off" required  type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={inputOnChangeHandler}/>
                        <input className="w-full h-12 border-[1px] border-gray-800 rounded-md outline-none text-xl font-normal px-4" autoComplete="off" required  type="text" placeholder="Email Address" name="email" value={formData.email} onChange={inputOnChangeHandler}/>


                        <div className="h-12 w-full bg-[#0dcaf0] rounded-md flex justify-center items-center text-white font-medium">
                        <button type="submit" >Verify</button>
                        </div>
                    </form>
                    <div className="h-14 w-full text-center text-md text-gray-700">
                        <p>Already have an account? <button className="text-[#0dcaf0] font-medium"><Link to="/signIn">Sign in</Link></button> </p>
                    </div>

                    
                </div>

                <div className="h-auto w-full flex justify-center items-center border-t-[1px]  text-md text-gray-700 border-gray-400 py-4">
                        <p className="h-full w-[90%] text-center">By clicking the button, I accept the <span className="text-[#0dcaf0] font-medium">Terms of Use of the service</span> and its <span className="text-[#0dcaf0] font-medium">Privacy Policy</span>, as well as consent to the processing of personal data.</p>
                    </div>
                 </div>
                 
            </div>
        </div>
        </>
    )
}

export default SignUp