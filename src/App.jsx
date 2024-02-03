import Home from "./Components/Home.jsx";
import CartDetails from "./Components/cart/CartDetails.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Headers from "./Components/cart/Headers.jsx";
import { Profile } from "./Pages/User/Profile.jsx";
import { EditProfile } from "./Pages/User/EditProfile.jsx";
function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editProfile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
