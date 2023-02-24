import React from 'react';

const TextArea: React.FC = () => {
    return (
      <div className="flex flex-col gap-[10px]">
        <label htmlFor="Message" className="text-Text-Relevant-LT font-medium dark:text-Text-Relevant">
          {" "}
          Message{" "}
        </label>
        <textarea
          name="Message"
          id="Message"
          className="ease-out duration-150 p-[15px] rounded dark:bg-Background-Light bg-Background-Light-LT border dark:border-Background-Variations border-Background-Variations-LT  text-base font-medium dark:text-Text-Relevant text-Text-Relevant-LT dark:placeholder-Extras placeholder-Extras-LT placeholder:font-medium outline-none focus:border-CTA-Default resize-y min-h-[76px]"
          placeholder="Enter your message"
        ></textarea>
      </div>
    );
  };
  export default TextArea;