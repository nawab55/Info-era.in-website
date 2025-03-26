import axios from "axios";

export const initializeRazorpay = () => {
    // if (window.Razorpay) return true;
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};   
`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/all`

export const createRazorpayOrder = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/payments/create-order`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create order' + error);
    
  }
};

