import axios from "axios";

export const encryptPaymentData = async (paymentData) => {
  try {
    const response = await axios.post(
      "http://103.211.202.247:5114/api/FinanceVendor/EncryptPaymentData",
      paymentData
    );
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.error("Error encrypting payment data:", error);
    throw error;
  }
};
