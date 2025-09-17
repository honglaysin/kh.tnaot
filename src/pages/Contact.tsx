import React, { useState } from "react";
import Header from "../components/Header";
import { Send, Phone, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const subjectBlocks = [
        { type: "paragraph", children: [{ type: "text", text: formData.subject }] },
      ];
      const messageBlocks = [
        { type: "paragraph", children: [{ type: "text", text: formData.message }] },
      ];

      const res = await fetch("https://kohthmey-strapi-api.onrender.com/api/contact-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: { name: formData.name, email: formData.email, subject: subjectBlocks, message: messageBlocks },
        }),
      });

      if (!res.ok) setSubmitStatus("error");
      else {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("success");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-72 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFE5E5] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#FFB6B6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-[#FF9999] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-[#FFCCCC] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700">We'd love to hear from you! Reach out with any questions or inquiries.</p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we’ll get back to you as soon as possible.</p>

            {/* Alerts */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
                <span>Thank you for your message! We'll get back to you soon.</span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm0-4a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1z"/><path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zM10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"/></svg>
                <span>There was an error sending your message. Please try again.</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full h-12 px-3 border rounded ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full h-12 px-3 border rounded ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block font-medium">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className={`w-full h-12 px-3 border rounded ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className={`w-full min-h-[140px] px-3 py-2 border rounded resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white font-medium rounded flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Customer Service", email: "support@tnaot.com", phone: "(+855) 023 922 788" },
              { title: "Advertising", email: "chenghuyleng@kohthmey.net", phone: "(+855) 010 688 511" },
              { title: "Business", email: "chenghuyleng@kohthmey.net", phone: "(+855) 010 688 511" },
              { title: "Careers", email: "hr@kohthmey.net", phone: "Telegram : 015 856 322 / 061 538 022" },
            ].map((contact) => (
              <div key={contact.title} className="p-6 border border-[#FFE5E5] rounded shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h4>
                <p className="flex items-center text-gray-700"><Mail size={16} className="mr-2 text-[#E53E3E]" /> {contact.email}</p>
                <p className="flex items-center text-gray-700 mt-1"><Phone size={16} className="mr-2 text-[#E53E3E]" /> {contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="mt-12 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d565.9863493451629!2d104.92969849675013!3d11.544271094967597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517a45a7bed5%3A0xd8a2ae37461e456b!2sKohthmey%20Technology%20Co%2C.Ltd!5e0!3m2!1skm!2skh!4v1756973984208!5m2!1skm!2skh"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="my-12 border-t" />
    </div>
  );
};

export default ContactUs;
