import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaDatabase, FaShareAlt, FaCookieBite, FaLock, FaUserCheck, FaChild, FaSyncAlt, FaEnvelope } from "react-icons/fa";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPage = () => {
  return (
    <section className="min-h-screen bg-base-100 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <FaUserShield className="text-green-600" /> Privacy Policy
          </h1>
          <p className="text-sm">Last Updated: January 4, 2026</p>
          <p>
            Welcome to Habit Tracker. This Privacy Policy explains how we collect, use, and protect your personal information when you use our web application.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaDatabase className="text-green-600" /> 1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Account Information:</strong> Name, email address, and password when you register.</li>
            <li><strong>Habit Data:</strong> Your daily entries, goals, and progress logs.</li>
            <li><strong>Device & Usage Data:</strong> Browser type, IP address, and usage patterns.</li>
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserCheck className="text-green-600" /> 2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide personalized habit tracking and analytics.</li>
            <li>Improve app performance and user experience.</li>
            <li>Send reminders, updates, and motivational content (if opted in).</li>
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaShareAlt className="text-green-600" /> 3. Data Sharing
          </h2>
          <p>
            We do <strong>not</strong> sell your personal data. We may share limited data with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted service providers (e.g., hosting, analytics) under strict confidentiality.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaCookieBite className="text-green-600" /> 4. Cookies & Tracking
          </h2>
          <p>
            We use cookies to maintain your login session and analyze usage trends anonymously. You can disable cookies in your browser settings.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaLock className="text-green-600" /> 5. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your data, including encryption and secure authentication.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserCheck className="text-green-600" /> 6. Your Rights
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access and update your personal information.</li>
            <li>Delete your account and associated data.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaChild className="text-green-600" /> 7. Children’s Privacy
          </h2>
          <p>
            Habit Tracker is not intended for users under the age of 13. We do not knowingly collect data from children.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaSyncAlt className="text-green-600" /> 8. Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Significant changes will be communicated via email or in-app notification.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant} className="space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaEnvelope className="text-green-600" /> 9. Contact Us
          </h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at: <br />
            <strong>privacy@habittracker.app</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPage;