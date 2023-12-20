import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { cancelCourseBundle, purchaseCourseBundle } from "../../Redux/Slices/Razorpay";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";

export function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.data);
  async function handleCancellation() {
    console.log("handling cancellation");
    await dispatch(cancelCourseBundle());
    await dispatch(getUserData());
    toast.success('Cancellation completed!!')
    navigate("/");
  }
  async function buySubscription(){
    navigate('/checkout')
  }
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center">
        
        {/* left div for profile picture */}
        <div className="lg:w-1/2 mt-20 mb-10 w-full ">
          <div className="w-full  ">
            <img
              className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] m-auto rounded-full"
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
        <div className="lg:w-1/2 text-white">
          <div className="font-bold ml-8 space-y-3">
            <h4 className="font-serif text-4xl sm:text-5xl underline text-yellow-500">
              Profile Information
            </h4>
            <h4 className="font-bold text-red-500 text-2xl font-serif">Name: <span className="text-xl text-green-500">{userData.fullName} </span></h4>
            <h4 className="font-bold text-2xl font-serif text-red-500">Email: <span className="text-xl text-green-500"> {userData.email}</span></h4>
            <h4 className="font-bold text-red-500 text-2xl font-serif">Role: <span className="text-xl text-green-500">{userData.role}</span></h4>
            <div className="flex gap-2 items-center">
              <h4 className="font-bold text-red-500 text-2xl font-serif">Subscription: </h4>
            {userData?.subscription?.status === "active" && (
              <div className="flex gap-2  justify-center items-center">
              <h1 className="underline text-xl font-serif text-green-500">Active</h1> 
              <button
                onClick={handleCancellation}
                className="border bg-red-600 hover:bg-green-600 hover:text-black transition-all ease-in-out duration-300 rounded-md font-semibold p-2 cursor-pointer text-center"
              >
                Cancel Subscription
              </button>
              </div>
              
            )}
            {!userData.subscription || userData?.subscription?.status === 'created' && (
              <div className="flex gap-2  justify-center items-center">
              <h1 className="underline text-xl font-serif text-green-500">Inactive</h1> 
              <button
                onClick={buySubscription}
                className="border bg-red-600 hover:bg-green-600 hover:text-black transition-all ease-in-out duration-300 rounded-md font-semibold p-2 cursor-pointer text-center"
              >
                Buy Subscription
              </button>
              </div>
              
            )}
            {
              userData.role === 'ADMIN' && <h1 className="text-xl font-serif text-green-500">Admin doesn't need a subscription</h1>
            }
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
