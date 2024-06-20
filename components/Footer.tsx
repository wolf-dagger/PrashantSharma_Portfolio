import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <>
      <footer className="w-full pb-10 mb-[100px]" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Thats all from <span className="text-purple">my side</span>. Please
            feel free to reach out to me.
          </h1>
          <a href="mailto:prashantp5sharma.1998@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm font-light">
            Copyright © 2024 PRASHANT SHARMA
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={profile.img} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
