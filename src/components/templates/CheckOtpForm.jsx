import React from "react";
import { checkOtp } from "services/auth";
import { setCookie } from "../../utils/cookie";

function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;
    const { response,error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>تایید کد اس ام اس شده</h1>
      <p>کد پیامک شده به شماره {mobile} را وارد کنید.</p>
      <label htmlFor="input">کد را وارد کنید.</label>
      <input
        type="text"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button>ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره همراه</button>
    </form>
  );
}

export default CheckOtpForm;
