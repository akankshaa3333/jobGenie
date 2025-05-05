import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OTPVerification.css"; // Your CSS file

function OTPVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60); // Timer set to 60 sec
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const navigate = useNavigate();

    // 🕒 Timer Function
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);

    // 🔄 Resend OTP Function
    const handleResendOTP = () => {
        setTimer(60); // Reset timer to 60 sec
        setIsResendDisabled(true);
        console.log("OTP Resent");
    };

    // OTP Input Handler
    const handleChange = (index, event) => {
        let newOtp = [...otp];
        newOtp[index] = event.target.value;
        setOtp(newOtp);
    };

    // Handle OTP Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Entered OTP:", otp.join(""));
        navigate("/home"); // Redirect after OTP verification
    };

    return (
        <div className="otp-container">
            <div className="otp-box">
                <h2>Enter the One Time Password (OTP)</h2>
                <p>which has been sent to your email</p>

                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e)}
                        />
                    ))}
                </div>

                {/* ⏳ Resend Timer */}
                <p className="resend-text">
                    Didn't receive the OTP?{" "}
                    {isResendDisabled ? (
                        <span className="timer">Resend in {timer} sec</span>
                    ) : (
                        <span className="resend-btn" onClick={handleResendOTP}>
                            Resend OTP
                        </span>
                    )}
                </p>

                <button onClick={handleSubmit} className="otp-submit-btn">
                    Login
                </button>

                <p className="password-login">
                    <a href="/signin">Login with password</a>
                </p>
            </div>
        </div>
    );
}

export default OTPVerification;
