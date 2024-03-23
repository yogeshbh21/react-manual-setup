import React from "react";

const ComponentFrame = ({
  children,
  heightClass = "",
  widthClass = "",
  className,
  style,
  ...props
}) => {
  console.log(heightClass, widthClass, "ded");

  return (
    <>
      <div
        className={` ${heightClass} ${widthClass} ${className}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default ComponentFrame;
