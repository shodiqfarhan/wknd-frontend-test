import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex w-full py-[17px] pl-[24px] lg:pl-[213px]  bg-white">
        <img src="/Bitmap.png" alt="logo" width={"33px"} />
        <div className="flex-col ml-[13px]">
          <h3 className="text-[12px] leading-[14px]">Good Morning</h3>
          <h2 className="font-bold text-[16px] leading-[19px]">Fellas</h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
