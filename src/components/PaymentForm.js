import React, { useState } from "react";
import { encryptPaymentData } from "../api/paymentApi";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    amount: "",
    redirectUrl: "g6HpRTxAoaJVnLQBWBbpo/8PBdAPVEmKuDT/JzJTPlM=",
    cancelUrl: "http://localhost:3000/cancel",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Call your backend API to get the encrypted data
        const response = await fetch("http://103.211.202.247:5114/api/FinanceVendor/EncryptPaymentData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // Replace these with your actual payment details
                orderId: formData.orderId,
                amount: formData.amount,
                redirectUrl: formData.redirectUrl,
                cancelUrl: formData.cancelUrl,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to get encrypted data from backend");
        }

        const { encryptedData, accessCode } = await response.json();

        // Dynamically create the form
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

        // Add the hidden input fields
        form.innerHTML = `
            <input type="hidden" name="encRequest" value="${encryptedData}" />
            <input type="hidden" name="access_code" value="${accessCode}" />
        `;

        // Append the form to the document body and submit it
        document.body.appendChild(form);
        form.submit();
    } catch (error) {
        console.error("Error in payment process:", error);
        alert("Payment process failed. Please try again.");
    }
};

  

  return (
    <div>
      <h1>CCAvenue Payment Gateway</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
