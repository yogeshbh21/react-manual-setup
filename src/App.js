import React from "react";
import Button, { BUTTON_STATES } from "./components/Button";

const App = () => {
  const onClick = ({ buttonState }) => {
    if (buttonState === BUTTON_STATES.ON) {
      console.log("Turning off");
    }
    if (buttonState === BUTTON_STATES.OFF) {
      console.log("Turning on");
    }
  };
  return (
    <div className="App  ">
      <header className="App-header flex-col gap-4">
        <Button state={BUTTON_STATES.ON} onClickHandler={onClick} />
        <Button state={BUTTON_STATES.OFF} onClickHandler={onClick} />
        <Button state={BUTTON_STATES.OFF} onClickHandler={onClick} />
      </header>
    </div>
  );
};

export default App;
