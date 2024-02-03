import { useState } from "react";
import { BsPersonAdd} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"; 
import { login } from "../Redux/Slices/AuthSlice";

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const[loginData, setLoginData] = useState({
        email:"",
        password:"",
    })

function handleUserInput(e){
    const {name, value} = e.target;
    setLoginData({
        ...loginData,
        [name]:value
    })
}


async function onLogin(event){
    event.preventDefault();

    if(!loginData.email || !loginData.password){
        toast.error('Please fill all the details');
        return ;
    }
    

    // dispatch login account action
    const response =  await dispatch(login(loginData));
    if(response?.payload?.success) 
    navigate('/') ; 
    

    setLoginData({
        email:"",
        password:"",
    });

}




    return(
            <div className=" flex items-center justify-center bg-gray-800 h-screen">
                <form noValidate onSubmit={onLogin} className=" flex flex-col  justify-center gap-3 space-y-2 rounded-lg p-4 text-white w-[250px] sm:w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center font-serif underline text-2xl font-bold ">Login Page</h1>


                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold w-full font-serif">Email</label>
                        <input type="email" required name="email" id="email" placeholder="abc@gmail.com" className="px-2 py-1 bg-transparent border" onChange={handleUserInput} value={loginData.email}/>
                    </div>


                    {/* Password */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold font-serif">Password</label>
                        <input type="password" required name="password" id="password" placeholder="Enter your password" className="px-2 py-1 bg-transparent border" onChange={handleUserInput} value={loginData.password}/>
                    </div>

                    <div className="space-y-1 font-serif">
                        <button type="submit" className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 w-full text-lg cursor-pointer rounded-lg py-2 font-semibold mt-2" onClick={onLogin}>Login</button>
                        <p className="text-center  mt-0">Don't have an account? <Link className="link text-accent cursor-pointer" to="/signup">Signup</Link></p>
                        {/* <h1 onClick={()=> navigate('/user/forgotpassword' )} className="text-center link text-accent mb-0">Forgot Password?</h1> */}
                        </div>

                    {/* Button To Create an Account */}
                    

                </form>
            </div>
    )
}

export default Login;