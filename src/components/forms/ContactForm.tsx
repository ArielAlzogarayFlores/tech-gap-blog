import React, { useState } from "react";
import CtaButton from "./CtaButton";
import Input from "./Input";

import TextArea from "./TextArea";

type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {

  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  return (
    <form className="flex flex-col gap-[15px]" action="https://formsubmit.co/tech.gap.blog@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_next" value="http://localhost:3000/contact/"></input>
      <input type="hidden" name="_template" value="box"></input>
      <Input changeProp={handleChange}/>
      <TextArea/>
      <CtaButton btnType="submit" label="Submit message" icon={<></>}/>
    </form>
  );
};
export default ContactForm;