import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-full h-full bg-[url('https://www.mbbank.com.vn/images/hp_bg_special_product.png')] flex justify-center items-center gap-3 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <img
          className="w-[30%] hidden lg:block"
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <form className="p-7 rounded-sm border border-solid border-gray-400 w-[340px] h-[380px]">
            <h1 className="text-3xl text-center mb-10 font-medium">
              Story - 2024
            </h1>
            <input
              className="w-full mb-1 border border-solid border-gray-300 p-2 rounded-md focus:border-gray-500"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="w-full mb-3 border border-solid border-gray-300 p-2 rounded-md focus:border-gray-500"
              type="password"
              placeholder="Password"
            />
            <button
              type="button"
              className="w-full bg-[#67b5fa] p-2 rounded-md text-white mb-5"
            >
              Log in
            </button>
            <div className="flex items-center justify-between mb-4">
              <div className="w-[40%] h-[2px] bg-gray-300"></div>
              <span>OR</span>
              <div className="w-[40%] h-[2px] bg-gray-300"></div>
            </div>
            <a href="" className="flex justify-center">
              Forgot password?
            </a>
          </form>
          <div className="w-[340px] h-[60px] flex items-center justify-center p-7 rounded-sm border border-solid border-gray-400">
            <span>
              Don't have an account?{" "}
              <a href="" className="text-[#67b5fa]">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
