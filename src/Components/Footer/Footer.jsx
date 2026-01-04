import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Website Name */}
        <div>
          <Link to="/" className="flex mb-4 items-center gap-2">
            <img
              src="/logo.png"
              alt="Habit Tracker Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold">Tracker</span>
          </Link>
          <p className="text-md text-base-600">
            Helping you build better habits with the right tools and support.
            Create, track, and manage daily habits to build streaks and boost productivity.
          </p>
        </div>

        {/* Contact Detail */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaEnvelope /> Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <a href="/contact" className="hover:text-green-600">
                Email Support
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>Khulna, Bangladesh</span>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:text-green-600 flex items-center gap-2">
                <span>📜</span> Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-green-600 flex items-center gap-2">
                <span>🔒</span> Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              className="primary-col rounded-full p-3 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/i/flow/login"
              className="primary-col rounded-full p-3 hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              className="primary-col rounded-full p-3 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="primary-col rounded-full p-3 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2 border-gray-300 pt-6 mt-10">
        <p className="text-center text-sm text-gray-500">
          © habit-tracker.com 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;