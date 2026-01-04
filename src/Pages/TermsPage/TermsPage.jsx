import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserLock,
  FaFileContract,
  FaGlobeAsia,
} from "react-icons/fa";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsPage = () => {
  return (
    <section className="min-h-screen bg-base-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="text-4xl font-bold text-center flex items-center justify-center gap-3"
        >
          <FaShieldAlt className="text-green-600" /> Terms & Conditions
        </motion.h1>

        {/* Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaFileContract className="text-green-600" /> Acceptance of Terms
            </h2>
            <p>
              By accessing and using Habit Tracker, you agree to be bound by
              these Terms and Conditions. If you do not agree, please refrain
              from using the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaUserLock className="text-green-600" /> User Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and for all activities that occur under your account. You
              agree not to misuse the platform or share false information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-green-600" /> Privacy & Data
            </h2>
            <p>
              We respect your privacy. Please refer to our Privacy Policy to
              understand how we collect, use, and protect your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaGlobeAsia className="text-green-600" /> Modifications & Updates
            </h2>
            <p>
              Habit Tracker reserves the right to update these terms at any
              time. Continued use of the service after changes implies
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-green-600" /> Limitation of Liability
            </h2>
            <p>
              Habit Tracker is not liable for any indirect, incidental, or
              consequential damages arising from your use of the platform.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsPage;
