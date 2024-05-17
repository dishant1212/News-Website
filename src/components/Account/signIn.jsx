import { useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineVisibility } from "react-icons/md";
{/* <MdOutlineVisibility /> */}
import { MdOutlineVisibilityOff } from "react-icons/md";
{/* <MdOutlineVisibilityOff /> */}

function SignIn(){

    const navigate=useNavigate()
    const [visible,setVisible]=useState(false)

   const [formData,setFormData]= useState({
        
        email:"",
        password:""
   })

   const inputOnChangeHandler=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value})
   }

   const backHandler=()=>{
        navigate("/signUp")
   }

   const submitHandler=(e)=>{
      e.preventDefault()

      console.log(formData)
      setFormData({
       
        email:"",
        password:""
   })

   }


    return(
        <>
         <div className="h-auto w-full flex flex-col justify-center items-center bg-[#eee]">
            <div className="h-[100px] w-full "></div>
            <div className="h-auto w-[90%] flex justify-center items-center">
                
                 <div className="h-auto  w-[90%] sm:w-[60%] lg:w-[40%] py-6  my-8 bg-white flex flex-col justify-center items-center">
                 <div className="h-14 w-full flex justify-end items-center">
                        <button className="m-4 flex justify-center items-center" onClick={backHandler}>
                        <FcPrevious className="text-2xl font-bold"/> <p className="text-xl" >Back</p> 
                            </button>
                    </div>

                    <div className="h-full w-[80%] sm:w-[60%] " >
                   
                    <h2 className="h-14 w-full text-center flex justify-center items-center text-xl font-semibold">Sign in with email.</h2>
                     
                    <form className="space-y-4 my-8" onSubmit={submitHandler} >
                       
                        <input className="w-full h-12 border-[1px] border-gray-800 rounded-md outline-none text-xl font-normal px-4" autoComplete="off" required  type="text" placeholder="Email Address" name="email" value={formData.email} onChange={inputOnChangeHandler}/>
                        <div className="w-full h-auto flex justify-center items-center border-[1px] border-gray-800 rounded-md">
                        <input className="w-[90%] h-12 border-l-[1px] border-gray-600 rounded-md outline-none text-xl font-normal px-4" autoComplete="off" required  type={!visible ? "password" :"type"} placeholder="password" name="password" value={formData.password} onChange={inputOnChangeHandler}/>
                        <div className="cursor-pointer text-xl pr-2 w-[10%  ]" onClick={()=>setVisible(!visible)}>
                            {
                                visible  ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                            }
                           </div> 
                       </div>
                        <div className="h-12 w-full bg-[#0dcaf0] rounded-md flex justify-center items-center text-white font-medium">
                        <button type="submit" >Login</button>
                        </div>
                    </form>
                    <div className="h-auto w-full text-center text-md text-gray-700 my-4">
                        <p>Don’t have an account? <span className="text-[#0dcaf0] font-semibold"><Link to="/signUp">Sign up</Link></span></p>
                    </div>

                    

                </div>

               
                 </div>
            </div>
        </div>
        </>
    )
}

export default SignIn