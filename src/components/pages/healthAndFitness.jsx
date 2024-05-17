import img from "../../assets/img3.png"
import WebStories from "./webStories"
import { Link } from "react-router-dom"
import { IoTimeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Footer from "../footer/footer";

function HealthAndFitness() {

    const articals = useSelector(state => state.homeArticals.Articals)

    return (
        <>
        <div className="h-auto w-full flex flex-col justify-center items-center">
            <div className="h-[100px] w-full "></div>
            <div className="h-auto w-[90%]">
                <div className="w-full space-y-4">
                    <h2 className="text-4xl font-bold text-[#0dcaf0] mt-8">Health & Fitness</h2>
                    <p className="text-md text-gray-800">Welcome to our comprehensive guide to health and wellness, where we share invaluable health tips and insights to help you achieve optimal physical and mental fitness. In today's fast-paced world, taking care of our health is more important than ever. From nutrition advice to workout routines, we've got you covered.
                    </p>
                    <p className="text-md text-gray-800">
                        Our brand is dedicated to delivering accurate and reliable information, empowering you to make informed decisions about your well-being. Whether you're looking for tips on managing stress, improving sleep quality, or finding the best exercises to strengthen your body, we are here to support you on your health journey.
                    </p>
                    <p className="text-md text-gray-800">
                        With a focus on evidence-based practices, our articles are aimed at optimizing your health and fitness goals. Our team of experts brings you the latest research and practical advice, so you can incorporate healthy habits into your daily life. We believe that everyone deserves to live a healthy and fulfilling life, and our mission is to provide you with the tools and knowledge to make that a reality.
                    </p>
                    <p className="text-md text-gray-800">
                        Stay tuned for regular updates on health and wellness, and let us be your trusted companion on your path to a healthier, happier you.
                    </p>
                </div>

                <div className="h-[500px] lg:h-[400px] w-full">
                                          <div className="h-[100%] w-full mt-6 relative">

                                                 <img className="h-full w-full" src={articals[11].urlToImage} />
                                                 <div className="absolute inset-0 h-full w-full  flex justify-center items-center ">
                                                        <div className="w-[90%] h-[50%] ">
                                                               <p className="text-white text-4xl font-bold">{articals[11].title}</p>
                                                               <div className="flex text-[18px] sm:text-sm  space-x-2 my-6 font-semibold ">
                                                                      <div>
                                                                             <span className="text-white">By</span> <span className="text-white">Dishant Chauhan</span>
                                                                      </div>


                                                                      <div className="flex justify-center items-center text-white">
                                                                             <span> <IoTimeOutline className="text-md" /></span>
                                                                             <span className="">{articals[5].publishedAt}</span>
                                                                      </div>

                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>

                                   </div>

                            </div>

                            <div className="h-auto w-[90%]   flex flex-col custom:flex-row custom:flex-wrap  justify-between items-center my-2">
                                   {
                                          articals.map((item, index) => {

                                                 return (
                                                        <Link to={`/artical/${item.title}`} className="h-[420px]  w-[90%] md:w-[80%] custom:w-[350px]  my-6"  >

                                                               <div className="h-[56%] w-full relative">
                                                                      <img className="h-full w-full" src={item.urlToImage
                                                                      } />
                                                                      <div className="absolute inset-0 h-full w-full  flex justify-start items-end">
                          <p className="text-xl font-medium text-white bg-[#0dcaf0] p-[2px] px-2 m-4">HEALTH & FITNESS</p>
                    </div>
                                                               </div>
                                                               <div className="h-[44%] w-full flex flex-col justify-evenly">
                                                                      <h2 className="text-lg font-bold ">{item.title.slice(0, 70)}...</h2>
                                                                      <p className="text-gray-700">{item?.description?.slice(0, 100)}...</p>
                                                                      <div className="flex text-[12px] sm:text-sm  space-x-2">
                                                                             <div>
                                                                                    <span className="text-gray-700">By</span> <span className="text-md  font-semibold">Dishant Chauhan</span>
                                                                             </div>


                                                                             <div className="flex justify-center items-center">
                                                                                    <span> <IoTimeOutline className="text-md" /></span>
                                                                                    <span className="text-gray-700">{item.publishedAt}</span>
                                                                             </div>

                                                                      </div>
                                                               </div>

                                                        </Link>
                                                 )
                                          })
                                   }
                            </div>
                            <WebStories />


            </div>
            <Footer/>
            
</>

        
    )
}

export default HealthAndFitness