import React, { ChangeEventHandler } from "react";

type InputProps = {
  changeProp: ChangeEventHandler;
};
const Input: React.FC<InputProps> = ({ changeProp }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="Email" className="dark:text-Text-Relevant font-medium text-Text-Relevant-LT">
        {" "}
        Email{" "}
      </label>
      <input
        onChange={changeProp}
        className="ease-out duration-150 p-[15px] rounded dark:bg-Background-Light font-medium bg-Background-Light-LT border dark:border-Background-Variations border-Background-Variations-LT text-base dark:text-Text-Relevant text-Text-Relevant-LT placeholder-Extras-LT dark:placeholder-Extras placeholder:font-medium outline-none focus:border-CTA-Default"
        placeholder="Enter your email"
        type={"email"}
        id="Email"
        name="Email"
      ></input>
    </div>
  );
};
export default Input;
