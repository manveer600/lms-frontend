import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const  {lectures}  = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);


  async function onLectureDelete(id, lectureId){
    console.log(id,lectureId);
    await dispatch(deleteCourseLecture({ cid: id, lid: lectureId }));
    await dispatch(getCourseLectures(id));
  }

  useEffect(() => {
    console.log(state);
    if (!state) navigate("/courses");
    dispatch(getCourseLectures(state._id));
  }, []);

  console.log('lectures',lectures);
  
  return (
    <HomeLayout>
    <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
        <div className="text-center text-2xl font-semibold text-yellow-500">
            Course Name: {state?.title}
        </div>
        {
          lectures.length <= 0 && 
          <h1 className="text-3xl text-white font-bold"> No Lectures</h1>
        }
        {lectures && lectures.length > 0 && <div className="flex justify-center gap-10 w-full">
            {/* left section for playing videos and displaying course details to admin */}
           <div className="space-y-5 w-[28rem] text-white p-2 rounded-lg shadow-[0_0_10px_white]">
                <video 
                    src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                    className="object-fill rounded-tl-lg rounded-tr-lg w-full"   
                    controls
                    disablePictureInPicture
                    muted
                    controlsList="nodownload"

                >
                </video>    
                <div>
                    <h1>
                        <span className="text-yellow-500"> Title: {" "}
                        </span>
                        {lectures && lectures[currentVideo]?.title}
                    </h1>
                    <p>
                        <span className="text-yellow-500 line-clamp-4">
                            Description: {" "}
                        </span>
                        {lectures && lectures[currentVideo]?.description}
                    </p>
                </div>
           </div>

           {/* right section for displaying list of lectres */}
           <ul className="w-[28rem] text-white p-2 rounded-lg shadow-[0_0_10px_white] space-y-4">
                <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                    <p>Lectures list</p>
                    {role === "ADMIN" && (
                        <button onClick={() => navigate("/course/addlecture", {state: {...state}})} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                            Add new lecture
                        </button>
                    )}
                </li> 
                {lectures && 
                    lectures.map((lecture, idx) => {
                        return (
                            <li className="space-y-2" key={lecture._id} >
                                <p className="cursor-pointer" onClick={() => setCurrentVideo(idx)}>
                                    <span>
                                        {" "} Lecture {idx + 1} : {" "}
                                    </span>
                                    {lecture?.title}
                                </p>
                                {role === "ADMIN" && (
                                    <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="btn-accent px-2 py-1 rounded-md font-semibold text-sm">
                                        Delete lecture
                                    </button>
                                )}
                            </li>
                        )
                    })    
                }
           </ul>
        </div>}
    </div>
</HomeLayout>
  );
}
export default DisplayLectures;
