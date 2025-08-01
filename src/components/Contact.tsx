"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string; // Honeypot field
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormIncomplete = !formData.name || !formData.email || !formData.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormIncomplete) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Honeypot check - if filled, treat as spam and silently do nothing
    if (formData._gotcha) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xyzjewok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-white dark:bg-black text-neutral-800 dark:text-white"
      aria-label="Contact Form Section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Have a project in mind, want to collaborate, or just say hi? Fill out
          the form below and I’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot hidden field */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha || ""}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="flex-1 p-4 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-4 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status === "sending" || isFormIncomplete}
            aria-disabled={status === "sending" || isFormIncomplete}
            className={`px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 ${
              status === "sending" || isFormIncomplete
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Screen reader status announcements */}
        <div aria-live="polite" className="sr-only" role="status">
          {status === "success" && "Message sent successfully."}
          {status === "error" && "Failed to send the message."}
        </div>
      </div>
    </section>
  );
}
