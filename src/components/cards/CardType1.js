import React from "react";
import Logo from "../Logo";
import ComponentFrame from "../utils/ComponentFrame";
import WrestlerAvatar from "../WrestlerAvatar";
import { useWrestler } from "../../contextProviders/WrestlerContextProvider";
import { BRAND_AURA_IMAGE, BRAND_NAMES } from "../constants";

const LogoHeader = () => {
  const { wrestler } = useWrestler();
  const wrestlerBrand = BRAND_NAMES[wrestler.brand];
  return (
    <div className="flex">
      <Logo height={30} width={30} type={BRAND_NAMES.WWE} />
      {wrestlerBrand === BRAND_NAMES.RAW && (
        <div className="ml-auto">
          <Logo height={30} width={60} type={wrestlerBrand} enclosed={true} />
        </div>
      )}
      {wrestlerBrand === BRAND_NAMES.SMACKDOWN && (
        <div className="ml-auto">
          <Logo height={30} width={120} type={wrestlerBrand} enclosed={true} />
        </div>
      )}
    </div>
  );
};

const CardType1 = ({}) => {
  const { wrestler } = useWrestler();
  return (
    <ComponentFrame
      heightClass={"h-[336px]"}
      widthClass={"w-[240px]"}
      className="relative bg-black rounded-2xl shadow-md p-2 border border-gray-300"
      style={{
        backgroundImage: `url(${BRAND_AURA_IMAGE[wrestler.brand]})`,
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
