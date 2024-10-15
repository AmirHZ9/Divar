import React from "react";
import { checkOtp } from "services/auth";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getUserProfile from "../../services/user";

function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const navigat = useNavigate();
  const { refetch } = useQuery(["profile"], getUserProfile);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigat("/");
      refetch();
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="container mx-auto w-fit my-[100px] border border-solid rounded-lg p-5 "
    >
      <h1 className="text-titleX font-bold">تایید کد اس ام اس شده</h1>
      <p className="my-5 ">{`کد پیامک شده به شماره <<${mobile}>> را وارد کنید.`}</p>
      <div>
        <label htmlFor="input">کد تایید را وارد کنید.</label>
        <input
          type="text"
          id="input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border rounded-lg my-3 -start-1/2 outline-none p-2"
        />
      </div>
      <button className="bg-base text-white rounded-md px-4 py-2 ml-3">ورود</button>
      <button onClick={() => setStep(1)} >تغییر شماره همراه</button>
    </form>
  );
}

export default CheckOtpForm;
