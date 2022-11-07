import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Slide from "./Slide";
import img from "../assets/slide.png";
import img1 from "../assets/slide2.png";
import img2 from "../assets/slide33.png";
import img3 from "../assets/slide3.png";
import Form from "./Form";
import Switch from "./Switch";
import OtherApp from "./OtherApp";

const Login = () => {
  return (
    <div className="min-h-sceen overflow-hidden flex flex-col bg-red-600">
      <main className="flex flex-col flex-grow bg-zinc-50">
        <section className="flex max-w-screen-lg mx-auto md:mt-8">
          <div className={classNames(styles.Left)}>
            <div className={classNames("relative", styles.LeftWrapper)}>
              <img
                src="./insta.png"
                alt="pic"
                width={454}
                height={618}
                className="w-full h-full"
              />
              <div className="absolute inset-0 ">
                <Slide images={[img, img1, img2, img3]} />
              </div>
            </div>
          </div>
          <div className={classNames("flex flex-col flex-grow justify-center mt-3", styles.Right)}>
            <Form />
          <Switch />
          <OtherApp />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
