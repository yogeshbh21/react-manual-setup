import React from "react";
import ComponentFrame from "./utils/ComponentFrame";

const VerticalName = ({ name }) => {
  return (
    <div className="vertical-text text-white font-mono">
      {name.split("").map((letter, index) => (
        <div key={index} className="text-center">
          {letter}
        </div>
      ))}
    </div>
  );
};
const WrestlerAvatar = ({ wrestler }) => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <ComponentFrame heightClass={"h-full"} widthClass="w-full" className={""}>
        <div className="flex w-full h-full">
          <div className=" mr-auto mt-8">
            <VerticalName name={"Aj Styles"} />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/wrestler-covers/aj-styles.png"
              className="h-[200px] w-[100px]"
              alt="wwe-logo"
            />
          </div>
        </div>
      </ComponentFrame>
    </div>
  );
};

export default WrestlerAvatar;
