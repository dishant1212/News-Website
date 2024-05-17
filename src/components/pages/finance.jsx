import img from "../../assets/finance.png";
import WebStories from "./webStories";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Footer from "../footer/footer";

function Finance() {
  const articals = useSelector((state) => state.homeArticals.Articals);

  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <div className="h-[100px] w-full "></div>
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-4">
            <h2 className="text-4xl font-bold text-[#0dcaf0] mt-8">
              Personal Finance
            </h2>
            <p className="text-md text-gray-800">
              Are you looking for personal finance advice to help you make the
              most of your money? Look no further. In this category, we will
              explore the best plan for investment and provide you with valuable
              insights to maximize your financial potential.
            </p>
            <p className="text-md text-gray-800">
              Managing personal finance can be overwhelming, but with the right
              guidance, you can take control of your financial future. Whether
              you are just starting to invest or have some experience under your
              belt, finding the best plan for investment is essential for
              long-term success.
            </p>
            <p className="text-md text-gray-800">
              With so many options available, it's important to consider various
              factors such as risk tolerance, time horizon, and financial goals.
              We will explore different investment strategies and offer
              practical tips to help you make informed decisions.
            </p>
            <p className="text-md text-gray-800">
              Whether you're interested in stocks, bonds, real estate, or other
              investment opportunities, our expert advice will ensure that you
              have the knowledge and tools to build a strong financial
              foundation.
            </p>
            <p className="text-md text-gray-800">
              Don't miss out on the chance to improve your personal finance and
              make better investment decisions. Get ready to take control of
              your financial future with our comprehensive personal finance
              advice and discover the best plan for investment.
            </p>
          </div>

          <div className="h-[500px] lg:h-[400px] w-full">
            <div className="h-[100%] w-full mt-6 relative">
              <img className="h-full w-full" src={articals[8].urlToImage} />
              <div className="absolute inset-0 h-full w-full  flex justify-center items-center ">
                <div className="w-[90%] h-[50%] ">
                  <p className="text-white text-4xl font-bold">
                    {articals[8].title}
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
                    FINANCE
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

export default Finance;
