import React from "react";

const ComponentFrame = ({
  component,
  height = 100,
  width = 100,
  className,
  ...props
}) => {
  const baseClass = `flex h-[${height}px] w-[${width}px] ${className}`;

  return (
    <>
      <div className={baseClass}>
        <component {...props} />
      </div>
    </>
  );
};

export default ComponentFrame;
