import React from "react";
import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    console.log(response);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1 className="text-2xl">ورود به حساب کاربری</h1>
      <p>
        برای استفاده از امکانات دیوارو لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </p>
      <label htmlFor="input">موبایل خود را وارد کنید.</label>
      <input
        type="text"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button> ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
