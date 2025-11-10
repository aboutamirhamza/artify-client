import React from "react";
import { FaFacebookSquare, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-neutral ">
      <footer className="footer sm:footer-horizontal text-neutral-content p-10 container mx-auto">
        <nav>
          <h6 className="footer-title font-raleway">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-raleway">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-raleway">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title font-raleway">Social Media</h6>
          <div className="grid grid-cols-4 gap-4">
            <a className="link link-hover">
              <FaFacebookSquare className="w-6 h-6 text-[#1877F2] hover:scale-120 transition-transform" />
            </a>
            <a className="link link-hover">
              <FaSquareInstagram className="w-6 h-6 text-[#C13584] hover:scale-120 transition-transform" />
            </a>
            <a className="link link-hover">
              <FaYoutube className="w-6 h-6 text-[#FF0000] hover:scale-120 transition-transform" />
            </a>
            <a className="link link-hover">
              <FaPinterest className="w-6 h-6 text-[#E60023] hover:scale-120 transition-transform" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
