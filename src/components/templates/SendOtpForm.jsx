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
 

    <form onSubmit={submitHandler} className="container mx-auto w-fit my-[100px] border border-solid rounded-lg p-5 ">
      <h1 className="text-titleX font-bold">ورود به حساب کاربری</h1>
      <p className="my-5 ">
        برای استفاده از امکانات دیوارو لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </p>
      <div className="">
        
      <label htmlFor="input" className="text-title"> شماره موبایل خود را وارد کنید.</label>
      <input
        type="text"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border rounded-lg my-3 -start-1/2 outline-none p-2"
      />

      </div>
      <button className="bg-base text-white rounded-md px-4 py-2"> ارسال کد تایید</button>
    </form>
 
  );
}

export default SendOtpForm;
