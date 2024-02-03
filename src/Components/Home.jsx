import React, { useState } from "react";
import "./cart/style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import CardsData from "./cart/Cardsdata.jsx";
import { logout } from "../Redux/Slices/AuthSlice.js";
import { addToCart } from "../Redux/Slices/CartSlice.js";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [cartData, setCartData] = useState(CardsData);
  async function handleLogout() {
    const response = await dispatch(logout());
    if (response?.payload?.success) {
      return toast.success(response?.payload?.message);
    }
  }

  // add to cart
  async function send(e){
    const response = await dispatch(addToCart(e));
    if (isLoggedIn === false) {
      return toast.error(
        "Since you are not login you are not able to add items in your cart"
      );
    }
  };
  return (
    <>
      <section className="iteam_section mt-4 container">
        <div className="flex gap-1 mr-10 items-center justify-end">
          {isLoggedIn === true || isLoggedIn === 'true' ? (
            <button
              className="border-2 border-black font-serif text-2xl hover:bg-yellow-500  bg-yellow-400 px-3 rounded py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="border-2 border-black font-serif text-2xl hover:bg-yellow-500  bg-yellow-400 px-3 rounded py-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
          <button
            className="border-2 border-black font-serif text-2xl hover:bg-yellow-500  bg-yellow-400 px-3 rounded py-2"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
        <h2 className="px-4" style={{ fontWeight: 400 }}></h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  key={index}
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    key={index}
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.address}</h5>
                      <span>₹ {element.price}</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        key={index}
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
