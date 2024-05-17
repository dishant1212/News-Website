import img from "../../assets/travelling.png";
import WebStories from "./webStories";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Footer from "../footer/footer";

function Traveling() {
  const articals = useSelector((state) => state.homeArticals.Articals);

  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <div className="h-[100px] w-full "></div>
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-4">
            <h2 className="text-4xl font-bold text-[#0dcaf0] mt-8">
              Traveling
            </h2>
            <p className="text-md text-gray-800">
              Are you ready to embark on an unforgettable journey to the best
              places to travel in India? Discover a land brimming with vibrant
              culture, breathtaking landscapes, and awe-inspiring historical
              monuments. Whether you're a nature enthusiast, a history buff, or
              a foodie seeking culinary adventures, India offers a plethora of
              options that cater to every traveler's desires.
            </p>
            <p className="text-md text-gray-800">
              From the iconic Taj Mahal in Agra to the serene backwaters of
              Kerala, the beauty of India's landscapes is sure to leave you
              spellbound. Explore the picturesque hill stations of Himachal
              Pradesh or indulge in the tranquility of the beaches in Goa.
              Immerse yourself in the spiritual richness of Varanasi or witness
              the majestic wildlife in Ranthambore National Park.
            </p>
            <p className="text-md text-gray-800">
              India's diversity extends beyond its landscapes; its cuisine is a
              melting pot of flavors, with each region offering its unique
              delicacies. Indulge in mouthwatering street food in Delhi, savor
              aromatic spices in the colorful markets of Rajasthan, or relish
              the delectable seafood in coastal states.
            </p>
            <p className="text-md text-gray-800">
              With so many remarkable destinations to choose from, exploring the
              best places to visit in India is a never-ending adventure. Get
              ready to be enchanted by this incredible country, where every
              corner tells a story and every experience leaves an indelible mark
              on your heart.
            </p>
          </div>

          <div className="h-[500px] lg:h-[400px] w-full">
            <div className="h-[100%] w-full mt-6 relative">
              <img className="h-full w-full" src={articals[11].urlToImage} />
              <div className="absolute inset-0 h-full w-full  flex justify-center items-center ">
                <div className="w-[90%] h-[50%] ">
                  <p className="text-white text-4xl font-bold">
                    {articals[11].title}
                  </p>
                  <div className="flex text-[18px] sm:text-sm  space-x-2 my-6 font-semibold ">
                    <div>
                      <span className="text-white">By</span>{" "}
                      <span className="text-white">Dishant Chauhan</span>
                    </div>

                    <div className="flex justify-center items-center text-white">
                      <span>
                        {" "}
                        <IoTimeOutline className="text-md" />
                      </span>
                      <span className="">{articals[5].publishedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-[90%]   flex flex-col custom:flex-row custom:flex-wrap  justify-between items-center my-2">
          {articals.map((item, index) => {
            return (
              <Link
                to={`/artical/${item.title}`}
                className="h-[420px]  w-[90%] md:w-[80%] custom:w-[350px]  my-6"
              >
                <div className="h-[56%] w-full relative">
                  <img className="h-full w-full" src={item.urlToImage} />
                  <div className="absolute inset-0 h-full w-full  flex justify-start items-end">
                    <p className="text-xl font-medium text-white bg-[#0dcaf0] p-[2px] px-2 m-4">
                      TRAVELING
                    </p>
                  </div>
                </div>
                <div className="h-[44%] w-full flex flex-col justify-evenly">
                  <h2 className="text-lg font-bold ">
                    {item.title.slice(0, 70)}...
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
                      <span className="text-gray-700">{item.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <WebStories />
      </div>
      <Footer />
    </>
  );
}

export default Traveling;
