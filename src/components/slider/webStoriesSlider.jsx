import { useRef } from "react";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormUp } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";


function WebStoriesSlider() {

    const { id } = useParams()
    const [descriptionParts, setDescriptionParts] = useState([]);
    console.log(descriptionParts)

    const data = useSelector(state => state.homeArticals.Articals)
    const Artical = data.find((artic, index) => {
        return artic.title === id
    })



    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    useEffect(() => {


        const parts = Artical.description.match(/.{1,30}/g);

        setDescriptionParts(parts);


    }, []);

    return (
        <div className="h-screen w-full bg-black flex justify-center items-end">
            <div className="h-[100%] w-[80%] md:w-[31%]  bg-white flex flex-col relative">
                <div className="h-full w-full">
                    <div className="h-[45%] w-full">
                        <img className="h-full w-full" src={Artical.urlToImage} />
                    </div>

                    <div className="h-[55%] w-full bg-[#2b2a2a] flex justify-center items-end">
                        <div className="flex flex-col  justify-center items-center">
                            <GrFormUp className="text-white text-2xl" />
                            <Link to={`/artical/${Artical.title}`} className="p-[5px] px-4 mb-2  rounded-[200px] font-semibold bg-white cursor-pointer">Read Full Story</Link>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full absolute ">
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="h-[50%] w-[85%] border-2 border-gray-400 bg-[#2b2a2a] mt-20 p-6">

                            <Slider ref={slider => {
                                sliderRef = slider;
                            }} {...settings}>
                                {
                                    descriptionParts.map((item) => {

                                        return <p className="text-white text-xl text-center ">
                                            {item}
                                        </p>
                                    })
                                }
                            </Slider>


                        </div>

                    </div>

                </div>



            </div>
            <div className="absolute inset-0 text-white  ">
                <div className="w-full h-full flex justify-evenly items-center ">
                    <button className=" outline-none" onClick={previous}>
                        <GrPrevious className="text-4xl mr-8" />
                    </button>
                    <button className=" outline-none" onClick={next}>
                        <GrNext className="text-4xl ml-8" />
                    </button>
                </div>
            </div>
        </div>
    )


}

export default WebStoriesSlider