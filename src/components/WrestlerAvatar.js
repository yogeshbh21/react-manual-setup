import React from "react";
import ComponentFrame from "./utils/ComponentFrame";
import { useWrestler } from "../contextProviders/WrestlerContextProvider";

const VerticalName = ({ name }) => {
  return (
    <div className="vertical-text text-white font-smackdown">
      {name.split("").map((letter, index) => (
        <div key={index} className="text-center">
          {letter === " " ? <br /> : letter}
        </div>
      ))}
    </div>
  );
};
const WrestlerAvatar = () => {
  const { wrestler } = useWrestler();
  const { coverPic } = wrestler.otherInfo;

  return (
    <div className="flex flex-grow items-center justify-center">
      <ComponentFrame heightClass={"h-full"} widthClass="w-full" className={""}>
        <div className="flex w-full h-full">
          <div className=" mr-auto mt-8">
            <VerticalName name={wrestler.name} />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={coverPic}
              className="h-[200px] w-[120]px] object-cover"
              alt="wwe-logo"
            />
          </div>
        </div>
      </ComponentFrame>
    </div>
  );
};

export default WrestlerAvatar;
