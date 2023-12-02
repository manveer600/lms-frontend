import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourseLectures } from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const  lectures  = useSelector((state) => state.lecture.lectures);
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(state);
    if (!state) navigate("/courses");
    console.log("lectures", lectures);
    dispatch(getCourseLectures(state._id));
  }, []);

  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name: {state?.title}
        </div>
        <div className="space-y-5 w-[20rem] p-2 rounded-lg shadow-[0_0_10px_white]">
          <video
            className="object-fill border rounded-tl-lg rounded-tr-lg w-full"
            controls
            disablePictureInPicture
            muted
            controlsList="nodownload"
            src={lectures && lectures[currentVideo]?.lecture?.secure_url}
          ></video>
        </div>
      </div>
    </HomeLayout>
  );
}
export default DisplayLectures;
