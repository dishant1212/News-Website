import Footer from "../footer/footer"

function AboutUs(){



    return(
        <>
        <div className="h-auto w-full flex flex-col justify-center items-center">
            <div className="h-[100px] w-full "></div>
            <div className="h-auto w-[90%] my-6">
                <div className="w-full space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800 mt-8">About Us</h2>
                    <p className="text-md text-gray-800">TheFrames.in serves as a professional platform for content, offering a wide range of thoroughly researched articles across various categories (Health and Fitness, Lifestyle, Finance & Traveling). Our objective is to deliver high-quality content to our readers, incorporating creativity while ensuring the authenticity of the information presented on our website. 
                    </p>
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Health and Fitness </h2>
                    <p className="text-md text-gray-800">
                    Health is the key factor in everyone’s life. We all have grown up by hearing that health is wealth. So, to take care of health for ourselves and for the family and loved ones is very important so as to lead a good and healthy lifestyle. Under Health and Fitness Category, we are providing the best health articles in terms of nutrition, foods, medical, fitness and exercise, yoga etc.
                    </p>
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Lifestyle</h2>
                    <p className="text-md text-gray-800">
                    Lifestyle is something that is really important for every individual to work upon. In this category we are providing the best lifestyle articles based on lifestyle improvement and ideas that are helpful for the people who are seeking help and want to make changes and improvements in their daily routine and lifestyle.  
                    </p>
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Finance </h2>
                    <p>Now when your Lifestyle and Health is settled with us, you should focus upon managing your wealth flow and savings for the future. So, under the Finance category we are dealing with finance management and providing you with the best articles which help you to manage your wealth, for you and for the future of your family.  </p>

                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Traveling </h2>
                    <p>When it comes to the vacation and to spend quality time with family, friends and loved ones, we all started to think upon a plan to visit beautiful destinations. Well, it depends upon the people's choice what kind of destination they choose and want to visit and to spend some quality time. Here in this category, we are providing articles on different travel destinations, destinations according to season, the best places to visit. One can explore and decide their travel destiny. </p>

                    
                    <p>For any query, Please mail us care@theframes.in</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AboutUs