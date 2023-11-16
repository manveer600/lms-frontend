import HomeLayout from "../Layouts/HomeLayout";
import { useState } from "react";
import toast from "react-hot-toast";
import { isEmailValid } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axiosInstance";
function Contact(){
    const [userInput , setUserInput] = useState({
        name:"",
        email:'',
        message:""
    })

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]:value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.email || !userInput.name || !userInput.message ){
            toast.error("All fields are mandatory");
            return;
        }

        if(!isEmailValid(userInput.email)){
            toast.error("Invalid Email");
            return;
        }


        try{
            const response = axiosInstance.post('/contact');
            toast.promise(res,
                {
                    loading:"Submitting your message ....",
                    success:"Feedback submitted successfully",
                    error:"Failed to submit the form"
                })
                

                const contactResponse = await res;
                if(contactResponse?.data?.success){
                    setUserInput({
                        name:"",
                        email:'',
                        message:""
                    })
                }
                else{
                    toast.error('Operation failed');
                }
        }catch(e){
            console.log('Error: ', e);
        }
    }
    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
            <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white   w-[22rem] shadow-[0_0_10px_white]">
                <h1 className="text-3xl font-semibold">Contact form</h1>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="name" className="text-xl font-semibold">Name</label>

                    <input required className="bg-transparent border px-2 py-1 rounded-sm" id="name" name="name" placeholder="Enter your name" onChange={handleInputChange} type="text" value={userInput.name} />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">email</label>
                    <input required className="bg-transparent border px-2 py-1 rounded-sm" id="email" name="email" placeholder="abc@gmail.com" onChange={handleInputChange} type="email" value={userInput.email} />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="message" className="text-xl font-semibold">Message</label>
                    <textarea required className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40" id="message" name="message" placeholder="Enter your message" onChange={handleInputChange}  value={userInput.message}/>
                </div>

                <button type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                        Submit
                    </button>
            </form>
            </div>
        </HomeLayout>
    )
}

export default Contact;