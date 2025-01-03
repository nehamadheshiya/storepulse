import React from "react";

const SuccessPage = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
            <a href="/">Back to Home</a>
        </div>
    );
};

export default SuccessPage;