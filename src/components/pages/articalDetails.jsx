import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { IoTimeOutline } from "react-icons/io5";

function ArticalsDetails() {
    const { id } = useParams()

    const data = useSelector(state => state.homeArticals.Articals)
    const Artical = data.find((artic, index) => {
        return artic.title === id
    })

    console.log(Artical)

   
    return (
        <>
            <div className="h-auto w-full flex flex-col justify-center items-center">
                <div className="h-[100px] w-full "></div>
                <div className="h-auto w-[90%]">
                    <div className="my-4 w-full">
                        <h2 className=" text-4xl font-bold text-gray-900">{Artical.title}</h2>
                        <p className="py-2 text-xl font-normal text-gray-700">{Artical.description}</p>
                        <div className="flex space-x-2">
                            <div>
                                <span className="text-gray-700">By</span> <span className="text-md  font-semibold">Dishant Chauhan</span>
                            </div>


                            <div className="flex justify-center items-center">
                                <span> <IoTimeOutline className="text-md" /></span>
                                <span className="text-gray-700">{Artical.publishedAt}</span>
                            </div>

                        </div>
                    </div>


                    <div className="h-auto w-full my-2">
                        <div>
                       <img className="h-[550px] w-full" src={Artical.urlToImage} />
                        </div>

                        <div className="my-4 text-xl font-normal text-gray-700">
                            <p>{Artical.content}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center my-6">
                    <a className="p-2 px-6 rounded-3xl bg-[#0dcaf0] text-white font-medium" href={Artical.url} target="_main">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticalsDetails