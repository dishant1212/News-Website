import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function WebStories(){

  


  const articals = useSelector(state => state.homeArticals.Articals)

    return(
        <>
        <div className="w-[95%] h-[500px]  bg-black flex justify-center items-center my-8">
              <div className="w-[98%] h-[90%] ">
                  <div className="h-[15%] " >
                    <p className=" text-3xl font-bold  text-white">Web Stories</p>
                  </div>
                  <div className="h-[85%]  space-x-2 flex flex-row justify-between overflow-y-scroll" >
                    
                 {
                  articals.slice(2,6).map((item,index)=>{
                    return  <Link to={`/${item.title}`} className="h-full w-[30%] relative  " key={index} >
                    <img className="h-full w-full" src={item.urlToImage}/>
                    <div className="absolute inset-0 h-[90%] text-white font-semibold w-full flex justify-center items-end">
                      <p >
                        {
                       item.title.slice(0,60)
                      }...
                      </p>
                      
                    </div>
            </Link>
                  })
                 }
      
                  </div>
              </div>
        </div>
        </>
    )
}
export default WebStories