import React from "react";
import ComponentFrame from "./components/utils/ComponentFrame";
import CardType1 from "./components/cards/CardType1";
import WrestlerContextProvider from "./contextProviders/WrestlerContextProvider";

const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <ComponentFrame
        heightClass={"h-screen"}
        widthClass={"w-full"}
        className="flex bg-blue-200 items-center justify-center"
      >
        <WrestlerContextProvider wrestlerIndex={0}>
          <CardType1></CardType1>
        </WrestlerContextProvider>
      </ComponentFrame>
      <ComponentFrame
        heightClass={"h-screen"}
        widthClass={"w-full"}
        className="flex bg-blue-200 items-center justify-center"
      >
        <WrestlerContextProvider wrestlerIndex={1}>
          <CardType1></CardType1>
        </WrestlerContextProvider>
      </ComponentFrame>
    </div>
  );
};

export default App;
