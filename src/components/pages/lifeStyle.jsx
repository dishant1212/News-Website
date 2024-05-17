import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import WebStories from "./webStories";
import Footer from "../footer/footer";

function LifeStyle() {
  const articals = useSelector((state) => state.homeArticals.Articals);

  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <div className="h-[100px] w-full "></div>
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-4">
            <h2 className="text-4xl font-bold text-[#0dcaf0] mt-8">
              Lifestyle
            </h2>
            <p className="text-md text-gray-800">
              In the fast-paced world we live in, it's more important than ever
              to prioritize our health and well-being. And with the latest
              lifestyle trends for 2023 on the horizon, there's no better time
              to embrace positive lifestyle changes. From incorporating healthy
              lifestyle tips into our daily routines to staying on top of the
              latest wellness trends, there are endless opportunities to enhance
              our overall well-being.
            </p>
            <p className="text-md text-gray-800">
              Whether it's practicing mindful eating, finding effective stress
              management techniques, or discovering new ways to incorporate
              physical activity into our lives, the options for improving our
              lifestyle are vast. By staying up to date with the latest trends,
              we can discover innovative approaches to self-care and wellness
              that can transform our lives for the better.
            </p>
            <p className="text-md text-gray-800">
              In this category, we will explore the top healthy lifestyle tips
              and the latest lifestyle trends for 2023. From nutrition hacks to
              fitness trends, we will uncover actionable strategies to help you
              lead a healthier, happier life. So, get ready to make the
              necessary lifestyle changes and embark on a journey towards a more
              vibrant and fulfilling existence.
            </p>
          </div>

          <div className="h-[500px] lg:h-[400px] w-full">
            <div className="h-[100%] w-full mt-6 relative">
              <img className="h-full w-full" src={articals[5].urlToImage} />
              <div className="absolute inset-0 h-full w-full  flex justify-center items-center ">
                <div className="w-[90%] h-[50%] ">
                  <p className="text-white text-4xl font-bold">
                    {articals[5].title}
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
                          <p className="text-xl font-medium text-white bg-[#0dcaf0] p-[2px] px-2 m-4">LIFESTYLE
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

export default LifeStyle;
