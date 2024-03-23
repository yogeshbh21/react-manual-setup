import React from "react";
import ComponentFrame from "./components/utils/ComponentFrame";
import CardType1 from "./components/cards/CardType1";

const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <ComponentFrame
        heightClass={"h-screen"}
        widthClass={"w-full"}
        className="flex bg-blue-200 items-center justify-center"
      >
        <CardType1></CardType1>
      </ComponentFrame>
    </div>
  );
};

export default App;
