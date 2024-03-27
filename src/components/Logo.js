import React from "react";
import ComponentFrame from "./utils/ComponentFrame";
import { BRAND_NAMES, LOGO_TYPE_TO_PATH } from "./constants";

const Logo = ({
  type = BRAND_NAMES.WWE,
  height = 30,
  width = 30,
  enclosed = false,
}) => {
  const bgClass = enclosed ? "bg-white p-1  rounded-l" : "";
  return (
    <ComponentFrame
      className={"flex items-start justify-start"}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div className={`flex  items-center justify-center  ${bgClass}`}>
        <img src={LOGO_TYPE_TO_PATH[type]} alt="wwe-logo" />
      </div>
    </ComponentFrame>
  );
};

export default Logo;
