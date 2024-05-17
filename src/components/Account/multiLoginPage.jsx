import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

function LoginPage({closeModal}){



    return(
        <>
        <div className="h-screen w-full bg-[#071016] opacity-[0.8] fixed inset-0" >
        </div>
        <div className="h-screen w-full flex justify-center items-center absolute inset-0" onClick={()=>closeModal()}>
                  <div className="h-[75%] md:h-[90%] w-[90%] md:w-[70%] xl:w-[40%] flex flex-col items-center bg-white rounded-xl text-black">
                   <div className="h-10 w-full flex justify-end items-center">
                   <IoClose className="text-gray-700 text-4xl mx-4 cursor-pointer" onClick={()=>closeModal()}/>
      
                   </div>
                     <div className="h-[90%] w-[90%]  flex flex-col justify-evenly  items-center">
                   <div className="h-14 w-full flex justify-center items-center mb-8">
                    <p className="text-3xl font-bold">Join TheFrames.</p>
                   </div>
                   <div className="h-auto  w-full  flex flex-col  justify-between  items-center">
                    <div className="w-[80%] md:w-[50%] flex flex-col space-y-4 items-center">
                     <button className="w-full p-2  font-bold border-[2px] border-gray-300 rounded-[200px] flex justify-center items-center"><FcGoogle className="mr-4 text-xl"/> Sign In with Google</button>
                     <button className="w-full p-2 font-bold border-[2px] border-gray-300 rounded-[200px] flex justify-center items-center"> <IoLogoFacebook className="text-blue-700 mr-2 text-xl" /> Sign In with Facebook</button>
                     <Link to="/signIn" className="h-full w-full p-2  font-bold border-[2px] border-gray-300 rounded-[200px] flex justify-center items-center" > <MdOutlineMailOutline className="mr-6  text-xl" /> Sign In with Email</Link>
                     </div>
                   </div>
                   <div className="h-auto w-full py-8 border-b-2 border-gray-400 ">
                        <p className="text-center font-normal">By clicking the button, I accept the <span className="text-[#0dcaf0] font-bold" >Terms of Use of the service </span>and its <span className="text-[#0dcaf0] font-bold">Privacy Policy</span>, as well as consent to the processing of personal data.</p>
                    </div>


                    <div className="h-14 flex justify-center items-center">
                        <p className="text-center font-normal">Don’t have an account? <Link to="/signUp" className="text-[#0dcaf0] font-bold">Signup</Link></p>
                    </div>
                   </div>
     


                   
                  </div>
        </div>
        </>
    )
}
export default LoginPage