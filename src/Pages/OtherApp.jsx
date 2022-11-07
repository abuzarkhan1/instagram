import React from "react";
import App from "../assets/App.png";
import Play from "../assets/Play.png";
import "../index.css";
const OtherApp = () => {
  return (
    <div className="mt-2.5">
      <p className="text-center text-sm py-2.5 px-5 font-semibold">Get the app.</p>
      <div className="flex justify-center py-2.5">

        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
          <img className="App" alt="Available on the App Store" src={App} target="blank" />
        </a>
        <a href="">
         <img 
          alt="Available on Google Play"
          src={Play}
          className="Play"
          target="blank"
         />
        </a>
      </div>
    </div>
  );
};

export default OtherApp;
