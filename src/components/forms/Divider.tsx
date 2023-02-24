import React from "react";

type DividerProps = {};

const Divider: React.FC<DividerProps> = () => {
  return (
    <>
      <div className="relative flex items-center">
        <div className="flex-grow border-t dark:border-Background-Variations border-Background-Variations-LT"></div>
        <span className="flex-shrink mx-4 dark:text-Background-Variations text-Background-Variations-LT dark:font-medium">OR</span>
        <div className="flex-grow border-t dark:border-Background-Variations text-Background-Variations-LT"></div>
      </div>
    </>
  );
};
export default Divider;
