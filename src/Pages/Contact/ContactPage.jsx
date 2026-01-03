import React, { useContext, useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import
import { AuthContext } from "../../AuthContext/AuthContext";

const ContactPage = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ Auto-fill name & email if user exists
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Show SweetAlert on submit
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for reaching out. We'll get back to you soon.",
      confirmButtonColor: "#22c55e",
    });

    // ✅ Reset form after submit
    setForm({
      name: user?.displayName || "",
      email: user?.email || "",
      subject: "",
      message: "",
    });

    // Optional: send to backend here
    console.log("Submitted:", form);
  };

  return (
    <section className="min-h-screen bg-base-100 px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold ">
          Let’s Connect And Move Forward Together
        </h2>
        <p className=" mt-4">
          Have questions, feedback, or partnership inquiries? We’d love to hear
          from you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="bg-base-300 rounded-xl shadow p-6 space-y-6">
          <h3 className="text-xl font-semibold ">Contact Information</h3>
          <p className="">
            Reach out to our team anytime—your journey matters to us.
          </p>

          <div className="flex items-center gap-3 ">
            <FaEnvelope className="text-primary" />
            <span>support@fitmoveapp.com</span>
          </div>
          <div className="flex items-center gap-3 ">
            <FaPhoneAlt className="text-primary" />
            <span>+1 (555) 012-3456</span>
          </div>
          <div className="flex items-center gap-3 ">
            <FaMapMarkerAlt className="text-primary" />
            <span>1206 Westview Drive, San Diego, CA 92103, USA</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/sakib30278/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/nazmus-sakib-anik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-base-300 rounded-xl shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="textarea  textarea-bordered w-full h-32"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-full bg-green-500 text-white hover:bg-green-600 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
