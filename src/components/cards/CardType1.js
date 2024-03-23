import React from "react";
import Logo, { LOGO_TYPES } from "../Logo";
import ComponentFrame from "../utils/ComponentFrame";
import WrestlerAvatar from "../WrestlerAvatar";

const BRAND_AURA_IMAGE = {
  SMACKDOWN: "/auras/smackdown-aura.png",
};

const LogoHeader = () => {
  return (
    <div className="flex">
      <Logo height={30} width={30} type={LOGO_TYPES.WWE} />
      <div className="ml-auto">
        <Logo height={30} width={120} type={LOGO_TYPES.SMACKDOWN} />
      </div>
    </div>
  );
};

const CardType1 = ({}) => {
  return (
    <ComponentFrame
      heightClass={"h-[336px]"}
      widthClass={"w-[240px]"}
      className="relative bg-black rounded-2xl shadow-md p-2 border border-gray-300"
      style={{
        backgroundImage: `url(${BRAND_AURA_IMAGE.SMACKDOWN})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col h-full w-full">
        <LogoHeader />
        <WrestlerAvatar />
      </div>
    </ComponentFrame>
  );
};

export default CardType1;
