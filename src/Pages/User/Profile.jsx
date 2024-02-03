import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";


export function Profile() {
  const userData = useSelector((state) => state?.auth?.data);
  return (
      <div className="min-h-[90vh] bg-gray-800 w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 mb-10 w-full">
          <div className="w-full">
            <img
              className="sm:w-[500px] rounded-full m-auto"
              src={userData?.avatar?.secure_url}
              alt=""
            />
            <h1 className="text-white text-center mt-4 font-serif">
              <Link to={"/user/editProfile"}>
                <button className="text-yellow-500 border p-2 hover:bg-gray-400 font-bold hover:text-black rounded-md p">
                  Edit Profile
                </button>
              </Link>
            </h1>
          </div>
        </div>

        {/* second div */}
        <div className="lg:w-1/2 text-start font-normal w-full border-cyan-600 text-white">
          <div className="font-bold space-y-3  border-red-600 w-full">
            <h4 className="font-serif text-start text-3xl sm:text-4xl md:text-5xl ml-5 lg:text-start underline text-yellow-500">
              Profile Information
            </h4>
            <div className=" mr-2 text-start ml-4 lg:pl-5 lg:text-start border-green-500">
              <h4 className="font-bold text-red-500 text-2xl">
                Name:{" "}
                <span className="text-xl text-green-500">
                  {userData.fullName}{" "}
                </span>
              </h4>
              <h4 className="font-bold w-full text-2xl text-red-500">
                Email:{" "}
                <span className=" border-yellow-500  text-lg text-green-500">
                  {" "}
                  {userData.email}
                </span>
              </h4>
              
             
            </div>
          </div>
        </div>
      </div>
  );
}
