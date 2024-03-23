import React from "react";
import ComponentFrame from "./utils/ComponentFrame";

export const LOGO_TYPES = {
  WWE: "WWE",
  SMACKDOWN: "SMACKDOWN",
};

const LOGO_TYPE_TO_PATH = {
  [LOGO_TYPES.WWE]: "logos/wwe.png",
  [LOGO_TYPES.SMACKDOWN]: "logos/smackdown.png",
};

const Logo = ({ type = LOGO_TYPES.WWE, height = 30, width = 30 }) => {
  return (
    <ComponentFrame
      className={"flex items-start justify-start"}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div className={`flex  items-center justify-center`}>
        <img src={LOGO_TYPE_TO_PATH[type]} alt="wwe-logo" />
      </div>
    </ComponentFrame>
  );
};

export default Logo;
