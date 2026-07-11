import React from "react";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />

      <div className="mx-auto p-4 flex flex-col items-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral-100">
          © {new Date().getFullYear()} Atharva Wangikar
        </div>

        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <a
            href="https://www.linkedin.com/in/atharva-wangikar-ba9a36219/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin
              size={30}
              className="text-neutral-500 hover:-translate-y-1 transition-transform dark:text-neutral-100"
            />
          </a>

          <a
            href="mailto:atharvawangikar@gmail.com"
            aria-label="Email"
          >
            <AiOutlineMail
              size={30}
              className="text-neutral-500 hover:-translate-y-1 transition-transform dark:text-neutral-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
