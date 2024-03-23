import React, { useState } from "react";

export const BUTTON_STATES = {
  ON: "ON",
  OFF: "OFF",
};

const Button = ({ state = BUTTON_STATES.OFF, onClickHandler = () => {} }) => {
  const [buttonState, setButtonState] = useState(state);
  const onClickGlobalHandler = () => {
    onClickHandler({ buttonState });
    setButtonState(
      buttonState === BUTTON_STATES.ON ? BUTTON_STATES.OFF : BUTTON_STATES.ON
    );
  };
  return (
    <>
      <button type="button" onClick={onClickGlobalHandler}>
        {buttonState == BUTTON_STATES.ON ? (
          <img src="/button-on.png" alt="Click me" />
        ) : (
          <img src="/button-off.png" alt="Click me" />
        )}
      </button>
    </>
  );
};

export default Button;
