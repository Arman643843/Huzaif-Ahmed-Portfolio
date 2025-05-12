import React from "react";
import { FaInstagram, FaXFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://https://www.instagram.com/_arxman._/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://www.facebook.com/share/1HecLnQbMA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
        <FaXFacebook size={24} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
