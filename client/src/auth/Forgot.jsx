import React from "react";

const Forgot = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <h1>Cái gì không nhớ mật khẩu</h1>
        <div className="w-[340px] h-[60px] mt-10 flex items-center justify-center p-7 rounded-sm border border-solid border-gray-400">
          <span>
            Quay lại trang đăng nhập ?{" "}
            <a href="" className="text-[#67b5fa]">
              Log In
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Forgot;
