"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { sendEmail } from "@/app/actions/send-email";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tripInterest: "south-india",
    destination: "",
    numberOfTravelers: "",
    adults: "",
    children: "",
    tripType: "",
    budget: "",
    otherRequirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Sending enquiry...");
    
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success(result.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        tripInterest: "south-india",
        destination: "",
        numberOfTravelers: "",
        adults: "",
        children: "",
        tripType: "",
        budget: "",
        otherRequirements: "",
      });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 relative overflow-hidden -mt-20 min-h-screen isolate bg-[#f8f4e8] md:bg-[url('/contact.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat md:bg-scroll"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      {/* Background with illustrations - removing the old background elements */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-0"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mb-0 p-0">
            <span className="italic text-[#c9a227]">Contact</span>
            <span> Us</span>
          </h2>
          <p className="text-[#1e3a5f]/70 text-lg">
            Start your adventure through incredible South India.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <ContactForm 
              className="mt-[150px]"
              formData={formData}
              onFormChange={setFormData}
            />
            <div className="text-center mt-3 mb-3 ">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
