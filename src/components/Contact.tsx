"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HiSparkles, 
  HiEnvelope, 
  HiMapPin, 
  HiClock,
  HiPaperAirplane,
  HiCheckCircle,
  HiXCircle
} from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
};

const CONTACT_INFO = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: "thapamilan9762@gmail.com",
    href: "mailto:thapamilan9762@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HiMapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HiClock,
    label: "Response Time",
    value: "Within 24 hours",
    gradient: "from-orange-500 to-red-500",
  },
];

const SOCIAL_LINKS = [
  { 
    href: "https://github.com/milan-thapa", 
    icon: FaGithub, 
    label: "GitHub",
    color: "hover:text-purple-400"
  },
  { 
    href: "https://www.linkedin.com/in/milanthapa1/", 
    icon: FaLinkedin, 
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
{
  href: "https://instagram.com/milanthapa.soul",
  icon: FaInstagram,
  label: "Instagram",
  color: "hover:text-pink-500" // Instagram-like hover color
}

];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormIncomplete =
    !formData.name || !formData.email || !formData.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isFormIncomplete) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    if (formData._gotcha) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xyzjewok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden"
      aria-label="Contact section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
          >
            <HiSparkles className="text-yellow-400" />
            <span className="text-sm font-medium text-white/80">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Have a project in mind? I'm always open to discussing new opportunities, 
            creative ideas, or partnerships.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {CONTACT_INFO.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
                          <info.icon className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-white/60 mb-4">Connect with me</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/70 ${social.color} transition-all duration-300 hover:border-white/30 hover:bg-white/10`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-400">Available for work</p>
                  <p className="text-xs text-white/60">Open to new opportunities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />

              <div className="relative space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._gotcha || ""}
                  onChange={handleChange}
                  className="hidden"
                />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Milan Thapa"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                      {focusedField === "name" && (
                        <motion.div
                          layoutId="inputFocus"
                          className="absolute inset-0 border-2 border-blue-400/50 rounded-xl pointer-events-none"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="milanthapa@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                      {focusedField === "email" && (
                        <motion.div
                          layoutId="inputFocus"
                          className="absolute inset-0 border-2 border-blue-400/50 rounded-xl pointer-events-none"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 resize-none focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                    {focusedField === "message" && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 border-2 border-blue-400/50 rounded-xl pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-xs text-white/40">
                    {formData.message.length} / 500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "sending" || isFormIncomplete}
                    className={`relative flex-1 inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                      status === "sending" || isFormIncomplete
                        ? "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                    }`}
                    whileTap={{ scale: status === "sending" || isFormIncomplete ? 1 : 0.98 }}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <HiPaperAirplane className="text-xl" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <HiCheckCircle className="text-2xl text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-green-400">Message sent successfully!</p>
                      <p className="text-xs text-white/60">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                  >
                    <HiXCircle className="text-2xl text-red-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-red-400">Failed to send message</p>
                      <p className="text-xs text-white/60">Please check all fields and try again.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Screen reader feedback */}
      <div className="sr-only" aria-live="polite">
        {status === "success" && "Message sent successfully"}
        {status === "error" && "Failed to send message"}
      </div>
    </section>
  );
}