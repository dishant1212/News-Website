import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './YourSlider.css';
import { useSelector } from "react-redux";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


function SliderPage() {


  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const Artical = useSelector(state => state.homeArticals.Articals)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null
  };

  return (
    <div className="h-auto w-[100%] flex flex-col justify-center items-center ">
      <div className="h-[100%] w-[100%]  relative overflow-hidden">
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
          {
            Artical.slice(1, 5).map((item, index) => {
              return (
                <div className="h-[530px] lg:h-[600px] 2xl:h-screen w-full relative" key={index}>
                  <img className="h-[100%] w-full bg-no-repeat opacity-[0.9] bg-cover bg-center " src={item.urlToImage} />

                  <div className="h-full w-full  absolute inset-0 text-white flex flex-col justify-center items-center">
                    <Link to={`/${item.title}`} className="h-[90%] w-full flex justify-center items-center">

                      <div className="h-[80%] mt-24 w-[90%]  md:w-[80%] flex flex-col">
                        <h2 className="w-full h-auto text-2xl sm:text-4xl lg:text-6xl font-extrabold  my-2 lg:my-4">{item.title}</h2>
                        <p className="w-[70%] sm:w-[50%] h-auto  text-sm sm:text-lg lg:text-xl font-medium my-2 lg:my-4">{item?.description?.slice(0, 200)}</p>

                        <div className="flex text-[12px]  sm:text-xl space-x-2 text-white">
                          <div>
                            <span className="text-white" >By</span> <span className="text-md  font-bold">Dishant Chauhan</span>
                          </div>


                          <div className="flex justify-center items-center">
                            <span> <IoTimeOutline className="text-md" /></span>
                            <span className="text-white">{item.publishedAt}</span>
                          </div>

                        </div>



                      </div>




                    </Link>
                    <div className="h-[10%] w-full">

                    <div className="w-full h-full flex justify-end space-x-2 items-start px-4 pb-2">
        <button className="h-[80%] w-24 bg-white  text-gray-800 flex justify-center items-center outline-none" onClick={previous}>
        <GrPrevious className="text-lg" /> <span className="text-xl font-semibold">Prev</span>
        </button>
        <button className="h-[80%] w-24 bg-white  text-gray-800 flex justify-center items-center outline-none" onClick={next}>
          <span className="text-xl font-semibold">Next</span><GrNext  className="text-lg"/>
        </button>
        </div>

                    </div>

 
                  </div>


                  {/* <div className="absolute inset-0 h-full w-full bg-[#071016] opacity-[0.2]">

                  </div> */}

                </div>



              )
            })

          }

        </Slider>
      </div>

    </div>

  )
}

export default SliderPage