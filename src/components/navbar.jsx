import { Link ,Outlet} from "react-router-dom"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import LoginWith from "./Account/loginWith";


function Navabr(){

  const [morePageShow,setMorePageShow] = useState(false)
  const [dropDownSearch,setDropDownSearch]=useState(false)
  const [showMenue,setShowMenue]=useState(false)
  const [showModal,setShowModal]=useState(false)

  const closeModal=()=>{
    setShowModal(false)
  }

 return(
    <div className="h-auto w-full">

    <nav className="h-auto w-full fixed z-50">
      <div className="h-8 w-full bg-[#0dcaf0] text-center">
          <Link className="h-8 w-full bg-[#0dcaf0] text-center  text-white text-lg">Click & Join our WhatsApp channel</Link>
      </div>
     <div className="bg-[#071016] opacity-[0.8]  h-[70px] w-full text-white flex justify-between items-center px-4">
         
             <div className="flex justify-center items-center space-x-6">
                <div className="flex lg:hidden">
                <HiMenuAlt1  className="text-[35px]" onClick={()=>setShowMenue(true)}/>
                </div>
                <Link to="/"><spna className=" text-2xl font-bold">THE</spna><span className="text-[#0dcaf0] text-2xl font-bold">FRAMES</span></Link>
             </div>
             <div >
             <ul className="lg:flex space-x-2 xl:space-x-4 text-md font-bold  hidden">
               <li><Link className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/health-fitness">HEALTH & FITNESS</Link></li>
               <li><Link className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/life-style" >LIFESTYLE</Link></li>
               <li><Link className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/traveling">TRAVELING</Link></li>
               <li><Link className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/finance">FINANCE</Link></li>
               <li className="flex flex-col relative">
                <div className="flex justify-center items-center space-x-2 cursor-pointer " onClick={()=>setMorePageShow(!morePageShow)}>
                MORE <MdOutlineArrowDropDown className="text-white text-2xl"/>
                </div>
                {
                morePageShow &&   <div className="bg-[#071016] opacity-[0.8]  text-md  h-[70px] w-[150px] absolute top-[40px] pl-2  text-white font-bold rounded-sm border-[1px] text-start flex flex-col justify-evenly items-start border-gray-300">
                                           <li><Link to="/aboutUs" className="hover:border-b-2 hover:border-[#0dcaf0] pb-[2px]" onClick={()=>setMorePageShow(false)}>AboutUs</Link></li>
                                          <li><Link to="/contactUs" className="hover:border-b-2 hover:border-[#0dcaf0] pb-[2px]"  onClick={()=>setMorePageShow(false)}>ContactUs</Link></li>
                                  </div>
                }
               
                </li>
             </ul>
             </div>
             <div   className="flex justify-center items-center space-x-0">
             <div className="flex justify-center items-center">
                <div className="lg:flex space-x-2 text-lg hidden">
                  <FaFacebookF />
             <FaXTwitter />
             <FaInstagram />
             <FaLinkedinIn />
             <FaYoutube />  
                </div>
                <div className=" border-l-[1px] border-white mx-4 py-2 text-md cursor-pointer lg:relative">

                   
                    <FaSearch  className="ml-4" onClick={()=>setDropDownSearch(!dropDownSearch)}/>
                    {
                          dropDownSearch &&  <div className="h-[70px] w-[100%] lg:w-[202px]  rounded-sm fixed  lg:absolute top-[100px] lg:top-[45px] left-0 flex justify-center items-center border-[2px] border-gray-400 lg:border-[1px] lg:border-gray-300 bg-[#071016] opacity-[0.8] ">
                        <div className="h-[40px] w-[90%] border-[1px] border-gray-400 flex justify-evenly items-center">
                        <input id="search" className="h-[100%] w-[100%] bg-[#071016] opacity-[0.8]   outline-none text-xl ml-2" type="text" placeholder="Search..."/>
                        <label htmlFor="search" className="flex justify-between items-center mr-2">
                        <FaSearch  className=" text-gray-500 text-xl"/>
                        </label>
                        </div>
                    </div>
                

                    }
                   
             </div>
             </div>
             <div>
                <button className="hidden lg:flex text-md font-bold border-2 border-[white]  text-[white]] p-2 px-4 rounded-3xl " onClick={()=>setShowModal(true)}>Login / Register</button>
                   <button className="flex lg:hidden">
                   <MdAccountCircle className="text-4xl" onClick={()=>setShowModal(true)}/>
                   </button>
                
             </div>
                {
                  showModal && <LoginWith closeModal={closeModal}  />
                } 
             </div>
     </div>
     {
        showMenue &&  (
            <div className="h-screen w-[100%] flex lg:hidden bg-[#020406] opacity-[0.8] text-white">
                <div className="h-full w-[90%] flex flex-col justify-center items-center">
               
                <div className="h-[30%] w-[90%] text-2xl font-semibold justify-evenly border-b-2 border-white flex flex-col py-4  ">
                   <div className="w-full bg-white rounded-[200px] border-2 px-4 border-[white] flex justify-center items-center ">
                     <input id="searchBar" className="w-[90%] p-4 rounded-[200px] outline-none text-3xl" type="text" placeholder="Search..."/>
                     <label htmlFor="searchBar">
                     <FaSearch  className=" text-gray-500 text-4xl "/>
                     </label>
                   </div>
                   <div className="w-full cursor-pointer  border-2 border-[white] font-bold p-4 text-center rounded-[200px]" onClick={()=>{
                     setShowModal(true)
                     setShowMenue(false)
                   }} >
                    Login / Register
                   </div>

                </div>
               
                <ul className="h-[30%] w-[90%]  text-2xl font-semibold  border-y-2 border-[white] flex flex-col py-4  justify-evenly items-start">
               <li><Link onClick={()=>setShowMenue(false)} className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/health-fitness">HEALTH & FITNESS</Link></li>
               <li><Link onClick={()=>setShowMenue(false)} className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/life-style" >LIFESTYLE</Link></li>
               <li><Link onClick={()=>setShowMenue(false)} className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/traveling">TRAVELING</Link></li>
               <li><Link onClick={()=>setShowMenue(false)} className="hover:border-b-2 hover:border-[#0dcaf0] pb-2" to="/finance">FINANCE</Link></li>
               
             </ul>
        

                <div className="h-[30%] w-[90%]   flex flex-col py-4 space-y-14 items-center">
                   <div className="w-full flex flex-col space-y-4 text-2xl font-semibold">
                    <div><Link to="/authors" onClick={()=>setShowMenue(false)}>Authors</Link></div>
                    <div className="w-full  flex justify-between space-x-4">
                        <div><Link to="/aboutUs" onClick={()=>setShowMenue(false)}>About Us</Link></div>
                        <div><Link to="/contactUs" onClick={()=>setShowMenue(false)}>Contact Us</Link></div>
                    </div>
                   </div>

                <div className="w-full flex justify-between space-x-2 text-4xl font-extrabold ">
                  <FaFacebookF />
             <FaXTwitter />
             <FaInstagram />
             <FaLinkedinIn />
             <FaYoutube />  
                </div>

                  </div>
            </div>

            <div className="h-[100%] w-[10%] text-7xl    font-bold  flex  justify-end items-start">
            <IoClose className=" text-[#0dcaf0] font-bold" onClick={()=>setShowMenue(false)}/>
            </div>
            
        </div>
        )
     }
    
    </nav>
     <Outlet/>
    </div>
   
 )

}

export default Navabr