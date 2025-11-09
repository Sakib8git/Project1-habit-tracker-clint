import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Mission */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Habit Tracker
          </h2>
          <p className="text-sm text-gray-600">
            We're dedicated to helping you achieve your habits goals, providing
            you with the tools, support.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600">
                Our Journey
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600">
                Product Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Price
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600">
                Offerings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              <a href="#" className="hover:text-green-600">
                Informations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Contact Form
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Relation Map
              </a>
            </li>
          </ul>

          {/* <button className="bg-green-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-green-800">
            Join Us Now
            <span className="bg-white text-green-700 rounded-full p-1">
              →
            </span>
          </button> */}
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 mb-5 flex flex-col md:flex-row items-center justify-center text-sm text-gray-500 ">
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className=" border-t  ">
        <p className="text-center">© copyright habit.com 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
