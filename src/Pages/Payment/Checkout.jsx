import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/Razorpay";
import { BiRupee } from "react-icons/bi";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout.jsx";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state.razorpay.subscription_id
  );

  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      return toast.error("Something went wrong");
    }

    const options = {
      key: razorpayKey, // Enter the Key ID generated from the Dashboard
      subscription_id: subscription_id,
      name: "Coursify Pvt. Ltd",
      description: "Subscription",
      theme: {
        color: "#028195",
      },
      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;

        toast.success("Payment successfull");
        const res = await dispatch(verifyUserPayment(paymentDetails));

        res?.payload?.success
          ? navigate("/checkout/success")
          : navigate("/checkout/fail");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function load() {
    await dispatch(getRazorPayId());
    const res = await dispatch(purchaseCourseBundle());
    console.log(res);
    console.log(res.payload.success);
    console.log(res.payload.message);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <HomeLayout>
        <form
          className="h-[90vh] flex items-center justify-center relative text-white"
          onSubmit={handleSubscription}
          action=""
        >
          <div className="w-[250px] mt-24 sm:w-80  h-[26rem]  absolute flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg">
            <h1 className="bg-yellow-500  absolute top-0 w-full text-center py-4 text-xl sm:text-2xl font-bold rounded-tl0lg rounded-lg">
              Subscription Bundle
            </h1>

            <div className="px-4 mt-4 space-y-5 text-center">
              <p className="text-[17px]">
                This purchase will allow you to access all available course of
                our platform fo{" "}
                <span className="text-yellow-500 font-bold">
                  <br />1 Year duration
                </span>
                . All the existing and new launched courses will be also
                available
              </p>
              <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                <BiRupee />
                <span>499</span> only
              </p>
              <div>
                <p>100% refund on cancellation</p>
                <p>*Terms and Conditions applied*</p>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2"
              >
                Buy now
              </button>
            </div>
          </div>
          
        </form>
      </HomeLayout>
    </div>
  );
}

export default Checkout;
