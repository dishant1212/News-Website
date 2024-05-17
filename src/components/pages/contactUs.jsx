import Footer from "../footer/footer"

function ContactUs(){



    return(
        <>
        <div className="h-auto w-full flex flex-col justify-center items-center ">
            <div className="h-[100px] w-full "></div>
            <div className="h-auto w-[90%] my-6">
                <div className="w-full space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800 mt-8">Contact us</h2>
                   
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Content</h2>
                    <p className="text-md text-gray-800">
                    If you have any questions or concerns regarding the content, please feel free to reach out to the content team at care@theframes.in.
                    </p>
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">News Releases/Guest Post</h2>
                    <p className="text-md text-gray-800">
                    Please share the information, articles, and any content you would like to have published at care@theframes.in
                    </p>
                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Advertising </h2>
                    <p>If you have any inquiries regarding advertising and branding opportunities with NewsOnFloor, please feel free to reach out to us via email at care@theframes.in.</p>

                    <h2 className="text-3xl font-bold text-[#0dcaf0] mt-8">Work with us</h2>
                    <p>Are you interested in joining our team? Send your CV to care@theframes.in.</p>

                    
                   
                </div>
            </div>
        </div>
        <Footer/>
        
        </>
    )
}

export default ContactUs