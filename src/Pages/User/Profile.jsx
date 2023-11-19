import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";

export function Profile(){
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state?.auth?.data)

    return(
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-100 shadow-[0_0_10px_white]">
                    <img src={userData?.avatar?.secure_url} className="w-40 m-auto rounded-full border border-black" alt="profile_image" />

                    <h3 className="text-xl font-semibold text-center capitalize">{userData?.fullName}</h3>

                    <div className="grid grid-cols-2">
                        <p>Email:</p><p>{userData?.email}</p>
                        <p>Role:</p><p>{userData?.role}</p>
                        <p>Subscription:</p>
                        <p>
                        {userData?.subscription?.status === 'active'? "Action": "Inactive"}    
                        </p>
                    </div>

                    <div className=" flex items-center  gap-2">
                        <Link to='/changePassword' className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-bold cursor-pointer text-center py-2">
                            <button>Change Password</button>
                        </Link>

                        <Link to='/user/editProfile' className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 text-center rounded-sm font-bold cursor-pointer py-2">
                            <button>Edit Profile</button>
                        </Link>
                    </div>

                    {
                        userData?.subscription?.status === 'active' && (
                            <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">Cancel Subscription</button>
                        )
                    }
                </div>
            </div>
        </HomeLayout>
    )
}