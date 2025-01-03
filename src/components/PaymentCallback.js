import React, { useEffect } from "react";

const PaymentCallback = () => {
    const handleCallback = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const orderId = urlParams.get("orderId");
        const amount = urlParams.get("amount");
        const transactionStatus = urlParams.get("transactionStatus");
        const transactionId = urlParams.get("transactionId");
        const paymentMode = urlParams.get("paymentMode");

        try {
            const response = await fetch("http://localhost:5000/api/ccavenue/callback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orderId,
                    amount,
                    transactionStatus,
                    transactionId,
                    paymentMode,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    alert("Payment processed successfully!");
                } else {
                    alert("Payment failed.");
                }
            } else {
                alert("Error processing payment callback.");
            }
        } catch (error) {
            console.error("Callback handling failed:", error);
        }
    };

    useEffect(() => {
        handleCallback();
    }, []);

    return <div>Processing your payment, please wait...</div>;
};

export default PaymentCallback;