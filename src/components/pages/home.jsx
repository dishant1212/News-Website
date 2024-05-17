import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { homeArticals } from "../../redux/Actions/homeArticals.action";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import HomeSlider from "../slider/homeSlider";
import { FaShareNodes } from "react-icons/fa6";

function Home() {
  const dispatch = useDispatch();
  const articals = useSelector((state) => state.homeArticals.Articals);
  console.log(articals)

  useEffect(() => {
    dispatch(homeArticals());
  }, []);
  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <HomeSlider />
        <div className="h-auto w-[90%]   flex flex-col custom:flex-row custom:flex-wrap  justify-between items-center my-8 ">
          {articals.map((item, index) => {
            return (
              <Link
                to={`/artical/${item?.title}`}
                className="h-[420px]  w-[90%] md:w-[80%] custom:w-[350px]  my-6"
              >
                <div className="h-[56%] w-full relative">
                  <img className="h-full w-full" src={item?.urlToImage} />
                  <div className="absolute inset-0 h-full w-full  flex justify-start items-end">
                          <p className="text-xl font-medium text-white bg-[#0dcaf0] p-[2px] px-2 m-4">TRAVELING</p>
                    </div>
                </div>
                <div className="h-[44%] w-full flex flex-col justify-evenly">
                  <h2 className="text-lg font-bold ">
                    {item?.title?.slice(0, 70)}...
                  </h2>
                  <p className="text-gray-700">
                    {item?.description?.slice(0, 100)}...
                  </p>
                  <div className="flex text-[12px] sm:text-sm  space-x-2">
                    <div>
                      <span className="text-gray-700">By</span>{" "}
                      <span className="text-md  font-semibold">
                        Dishant Chauhan
                      </span>
                    </div>

                    <div className="flex justify-center items-center">
                      <span>
                        {" "}
                        <IoTimeOutline className="text-md" />
                      </span>
                      <span className="text-gray-700">{item?.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="h-auto w-[90%]  flex flex-col custom:flex-row">
              <div className="h-auto w-full custom:w-[70%]  ">
          {articals.map((item, index) => {
            return (
              <div className="h-auto sm:h-[350px] w-full flex flex-col border-b-[2px] border-gray-400 my-4">
                <div>
                  <h2 className=" text-xl font-bold text-gray-900 py-2">
                    {item?.title}
                  </h2>
                </div>
                <div className="flex  flex-col-reverse  sm:flex-row w-full">
                  <div className="w-full sm:w-[60%] flex flex-col ">
                    <div className="flex justify-start items-center space-x-2 w-full h-[20%] text-[12px] sm:text-sm">
                      <div>
                        <span className="text-gray-700">By</span>{" "}
                        <span className="text-md  font-semibold">
                          Dishant Chauhan
                        </span>
                      </div>

                      <div className="flex justify-center items-center">
                        <span>
                          {" "}
                          <IoTimeOutline className="text-md" />
                        </span>
                        <span className="text-gray-700">
                          {item.publishedAt}
                        </span>
                      </div>
                    </div>
                    <div className="w-full my-2 h-auto">
                      <p className="text-gray-700">{item?.description}</p>
                    </div>

                    <div className="w-full h-[30%] flex justify-start items-center my-4">
                      <Link
                        to={`/artical/${item?.title}`}
                        className="text-gray-900 font-semibold border-[1px] border-gray-600  cursor-pointer  p-1 px-2"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>

                  <div></div>
                  <div className="w-full h-[220px] sm:w-[40%] relative">
                    <img className="h-full w-full" src={item?.urlToImage} />
                    <div className="absolute inset-0 h-full w-full  flex justify-start items-end">
                          <p className="text-xl font-medium text-white bg-[#0dcaf0] p-[2px] px-2 m-4">TRAVELING</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          <div className="h-auto w-full custom:w-[30%]  flex justify-center items-start relative">
             <div className="h-[10%] w-[90%]   sticky top-[100px] my-60">
                       <h2 className="text-xl text-[#0dcaf0] font-bold">LATEST STORIES</h2>
                       <div className="w-fill my-4 border-b-2 border-gray-400">
                            <div>
                                <img className="w-full h-60 " src={articals[5]?.urlToImage}/>    
                            </div>
                            <div className="flex w-full my-6 space-x-2">
                                   <p className="text-lg font-bold w-[70%]">{articals[10]?.title?.slice(0,60)} .</p>
                                   <p className="text-4xl text-gray-400 font-bold w-[30%] border-l-[1px] border-gray-400 flex justify-center items-center">
                                         01
                                   </p>
                            </div>
                            <div>
                                   <p className="flex text-md text-gray-400 justify-start items-center my-2 space-x-[2px]">
                                     <FaShareNodes /> <span>SHARE</span>
                                   </p>
                            
                            </div>
                           
                       </div>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
