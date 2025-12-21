"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Users, DollarSign } from "lucide-react";

type ContactFormProps = {
  className?: string;
  formData: {
    fullName: string;
    email: string;
    phone: string;
    tripInterest: string;
    destination: string;
    numberOfTravelers: string;
    adults: string;
    children: string;
    tripType: string;
    budget: string;
    otherRequirements: string;
  };
  onFormChange: (data: {
    fullName: string;
    email: string;
    phone: string;
    tripInterest: string;
    destination: string;
    numberOfTravelers: string;
    adults: string;
    children: string;
    tripType: string;
    budget: string;
    otherRequirements: string;
  }) => void;
};

export function ContactForm({ 
  className = "", 
  formData, 
  onFormChange 
}: ContactFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-[#1e3a5f]/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl w-full max-w-3xl mx-auto ${className}`}
    >
      <h3 className="font-serif text-xl md:text-2xl text-white text-center mb-4">
        Plan Your Indian Journey
      </h3>

      <div className="space-y-3">
        {/* Row 1: Full Name, Email, Phone */}
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <label className="block text-white/80 text-xs mb-1">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e3a5f]/50" />
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/80 text-xs mb-1">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e3a5f]/50" />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/80 text-xs mb-1">Phone Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e3a5f]/50" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Trip Interest */}
        <div>
          <label className="block text-white/80 text-xs mb-1">Trip Interest *</label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripInterest"
                value="south-india"
                checked={formData.tripInterest === "south-india"}
                onChange={handleChange}
                className="w-4 h-4 text-[#c9a227] focus:ring-[#c9a227] focus:ring-2"
              />
              <span className="ml-2 text-white text-sm">South India</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripInterest"
                value="north-india"
                checked={formData.tripInterest === "north-india"}
                onChange={handleChange}
                className="w-4 h-4 text-[#c9a227] focus:ring-[#c9a227] focus:ring-2"
              />
              <span className="ml-2 text-white">North India</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripInterest"
                value="both"
                checked={formData.tripInterest === "both"}
                onChange={handleChange}
                className="w-4 h-4 text-[#c9a227] focus:ring-[#c9a227] focus:ring-2"
              />
              <span className="ml-2 text-white">Both</span>
            </label>
          </div>
        </div>

        {/* Row 3: Destination */}
        <div>
          <label className="block text-white/80 text-xs mb-1">Destination *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-[#1e3a5f]/50" />
            <textarea
              placeholder="Which destinations do you want to visit?"
              rows={2}
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227] resize-none"
            />
          </div>
        </div>

        {/* Row 4: Number of Travelers, Adults, Children */}
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <label className="block text-white/80 text-xs mb-1">Number of Travelers *</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e3a5f]/50" />
              <input
                type="number"
                placeholder="Total Travelers"
                name="numberOfTravelers"
                value={formData.numberOfTravelers}
                onChange={handleChange}
                min="1"
                required
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/80 text-xs mb-1">Adults *</label>
            <input
              type="number"
              placeholder="Number of Adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="0"
              required
              className="w-full px-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
            />
          </div>
          <div>
            <label className="block text-white/80 text-xs mb-1">Children</label>
            <input
              type="number"
              placeholder="Number of Children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-2 text-sm rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
            />
          </div>
        </div>

        {/* Row 5: Type of Trip */}
        <div>
          <label className="block text-white/80 text-xs mb-1">Type of Trip *</label>
          <textarea
            placeholder="e.g., Family, Friends, Honeymoon, Solo"
            rows={1}
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227] resize-none"
          />
        </div>

        {/* Row 6: Budget (Optional) */}
        <div>
          <label className="block text-white/80 text-xs mb-1">Budget (Optional)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e3a5f]/50" />
            <input
              type="text"
              placeholder="Your estimated budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
            />
          </div>
        </div>

        {/* Row 7: Other Requirements */}
        <div>
          <label className="block text-white/80 text-xs mb-1">Other Requirements</label>
          <textarea
            placeholder="Any special requirements or additional information..."
            rows={2}
            name="otherRequirements"
            value={formData.otherRequirements}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227] resize-none"
          />
        </div>
      </div>
    </motion.div>
  );
}
