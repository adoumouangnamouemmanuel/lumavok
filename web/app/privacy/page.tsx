"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function PrivacyPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    
     useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50)
        }
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])

  const sections = [
    {
      title: "1. Introduction",
      content:
        "BYTE ('we', 'us', 'our', or 'Company') operates the byte.africa website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
    },
    {
      title: "2. Information Collection and Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our Service to you. Types of Data Collected include: Personal Data (name, email address, phone number, cookies and usage data), and Usage Data (pages visited, time and date of visit, time spent on pages, device information).",
    },
    {
      title: "3. Use of Data",
      content:
        "BYTE uses the collected data for various purposes: to provide and maintain our Service; to notify you about changes to our Service; to allow you to participate in interactive features of our Service; to provide customer support; to gather analysis or valuable information so that we can improve our Service; to monitor the usage of our Service; and to detect, prevent and address technical issues.",
    },
    {
      title: "4. Security of Data",
      content:
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    },
    {
      title: "5. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy.",
    },
    {
      title: "6. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at privacy@byte.africa or by mail at BYTE, Lagos, Nigeria.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-foreground/60">Last updated: October 2025</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h2 className="text-xl font-bold mb-4 text-primary">
                  {section.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 rounded-lg bg-muted border border-border"
          >
            <p className="text-sm text-foreground/60">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@byte.africa
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
