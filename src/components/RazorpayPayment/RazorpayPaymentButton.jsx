import { useState } from "react";
import { useRazorpay } from "react-razorpay";
// import { createRazorpayOrder, initializeRazorpay } from "./razorpayUtils";
import axios from "axios";
import toast from "react-hot-toast";

const RazorpayPaymentButton = () => {
const { Razorpay, error} = useRazorpay();
  const [loading, setLoading] = useState(false);

  const createRazorpayOrder = async () => {
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/payments/create-order`
      );
      console.log(data);
      return data.order;
    } catch (error) {
      throw new Error("Failed to create order" + error);
    }
  };

  const verifyPayment = async (response) => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/payments/verify-payment`,
        {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature
        }
      );
    } catch (err) {
      console.error("Verification error:", err);
      throw new Error("Payment verification failed");

    }
  };

  // useEffect(() => {
  //   initializeRazorpay();
  // }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const order = await createRazorpayOrder();
      const options = {
        key: import.meta.env.VITE_REACT_APP_RAZORPAY_KEY_ID, // Use env variable directly, // Add your Razorpay API Key or (import.meta.env.VITE_RAZORPAY_KEY_ID)
        amount: order.amount,
        currency: "INR",
        name: "Info Era Software Services",
        description: "Payment for Services",
        order_id: order.id,
        ...order,
        handler: async (response) => {
          await verifyPayment(response);
          toast.success("Payment Successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@email.com",
          contact: "+919876543210"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new Razorpay(options);
      // this will open razorpay window for take the payment in the frontend
      // under the hood it use inbuild javascript windows api
      rzp.on("payment.failed", (response) => {
        toast.error("Payment Failed: " + response.error.description);
      });
      rzp.open();
    } catch (error) {
      toast.error("Payment Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  if (error) {
    return <div>Error loading payment gateway: {error.message}</div>;
  }

  return (
    <button
      onClick={handlePayment}
      disabled={ loading}
      className="pay-button"
      aria-label="Make Payment"
      title="Secure Payment via Razorpay"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default RazorpayPaymentButton;


