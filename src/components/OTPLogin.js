import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OTPLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOTP = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
      .then((confirmation) => {
        setConfirmationResult(confirmation);
        alert("OTP Sent!");
      })
      .catch((error) => alert(error.message));
  };

  const verifyOTP = () => {
    confirmationResult.confirm(otp)
      .then((result) => alert("OTP Verified!"))
      .catch((error) => alert("Invalid OTP"));
  };

  return (
    <div>
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verifyOTP}>Verify OTP</button>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OTPLogin;
