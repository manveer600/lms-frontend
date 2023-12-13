import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
function HomePage() {
  const dispatch = useDispatch();
  async function handleLogout() {
    await dispatch(logout());
  }
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  // const click = dispatch(changeBackground());
  // console.log('click is',click)
  return (
    <HomeLayout>
      {/* main div */}
      
      <div className="">
        <div className=" flex flex-col md:flex-row justify-center items-center h-[95vh]">

        {/* img div */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            className="h-[600px] pl-3 w-[410px] "
            src="src/assets/manveer.png"
            alt=""
          />
          <h1 className=" mt-3 font-serif text-3xl underline text-red-600">Co-founder</h1>
        </div>
        {/* 2nd div */}
        <div className=" text-center font-serif w-1/2  text-white p-3 md:mr-5">
          <div className="flex gap-2 underline">
          <img className="rounded-lg mt-3 h-10" src="https://pbs.twimg.com/profile_images/1300323777952194561/QlT75onD_400x400.jpg" alt="" />
          <h1 className="text-start mb-[100px] text-6xl font-serif text-green-500">Code Karo</h1>
          </div>
          <h1 className="text-3xl text-start font-serif underline text-yellow-400">
            About ME
          </h1>
          {/* heading div */}
          <h1 className="text-2xl text-start font-semibold">
            An undergrad
            <span className="text-yellow-500 font-bold font-serif">
              {" "}
              at Guru Tegh Bahadur Institute of Technology,
            </span>
            <span>
              {" "}
              aims to provide quality and affordable education to the people
              across the globe....
            </span>
          </h1>

          {/* paragraph div */}
          <p className="text-xl text-start font-serif mt-2 text-gray-200">
            We have a large library of courses taught by highly skilled and
            qualified faculties at very affordable cost.
          </p>

          {/* div for buttons */}
          {/* if logged in */}
          {isLoggedIn && (
            <div className="space-x-6 text-start pt-4 text-white">
              <Link to="/courses">
                <button className="bg-yellow-500 mb-3 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Explore Courses
                </button>
              </Link>
              <Link to="/contact">
                <button className="border mb-3 border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Contact Us
                </button>
              </Link>
              <Link to="/about">
                <button className="bg-yellow-500 mb-3 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  About Us
                </button>
              </Link>
            </div>
          )}
          {/* div for buttons */}
          {/* if not logged in */}
          {!isLoggedIn && (
            <div className="text-start mt-2 text-white ">
              <Link to="/login">
                <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-yellow-500 ml-4 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Sign Up
                </button>
              </Link>
              <p className="font-serif mt-2 text-yellow-500">
                Login/Signup{" "}
                <span className="text-white">to view all courses</span>
              </p>
            </div>
          )}
        </div>


        
      </div>

      <div className=" text-center underline m-2 p-5 shadow-[0_0_10px_black] text-3xl font-serif text-white mb-10">
      <h1>In Collaboration with <span className="text-yellow-500">top educators</span></h1>
      
      <div className="m-5">
        <ul className="flex justify-between items-center">
          <li><img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" /></li>
          <li><img className="h-10 "src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" alt="" /></li>
          <li><img className="h-10 "src="https://www.digitalcitizen.life/wp-content/uploads/2017/02/microsoft.png" alt="" /></li>
          <li><img className="h-10 "src="https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/privacy/Apple-WWDC23-privacy-logo-230605_big.jpg.large.jpg" alt="" /></li>
          <li><img className="h-10 "src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" /></li>
          <li><img  className="h-10 bg-white"src="https://jobs.pwskills.com/images/PWSkills-main.png" alt="" /></li>
          
        </ul>
      </div>
      </div>
      
      </div>
      
    </HomeLayout>
  );
}

export default HomePage;
