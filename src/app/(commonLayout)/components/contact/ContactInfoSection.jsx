"use client";
import { useState } from "react";
import { PhoneCall, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    const phoneNumber = "9907376214"; // Replace with your actual WhatsApp number
    const message = "Hello, I'm interested in your services!";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Phone call redirect function
  const redirectToCall = () => {
    window.location.href = "tel:+9907376214"; // Replace with your actual phone number
  };

  const ContactButton = ({ children, className, onClick }) => (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 
                 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r 
                 before:transform before:origin-left before:transition-transform before:duration-500 
                 hover:before:origin-right hover:shadow-lg
                 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 rounded-lg overflow-hidden">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2 bg-white p-8 lg:p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-2 animate-fade-in">
              Have Any Question?
            </h2>
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Contact Us!
            </h2>

            <p className="text-center text-gray-600 mb-10">
              A bold and innovative startup agency, we empower emerging
              businesses by creating compelling digital identities that drive
              success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Call Us On */}
              <div className="border-r border-b md:border-b-0 pb-6 md:pb-0 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mr-4 transform transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12">
                    <PhoneCall className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                    Call Us On
                  </h3>
                </div>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600 hover:underline">
                  <a href="tel:+990-737-621-432">+990-737 621 432</a>
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600 hover:underline">
                  <a href="tel:+990-737-621-500">+990-737 621 500</a>
                </p>
              </div>

              {/* Send Mail */}
              <div className="border-b md:border-b-0 pb-6 md:pb-0 md:pl-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mr-4 transform transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                    Send Mail
                  </h3>
                </div>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600 hover:underline">
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600 hover:underline">
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </p>
              </div>

              {/* Address */}
              <div className="border-r pt-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mr-4 transform transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                    Address
                  </h3>
                </div>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  House 177, Avenue 01,
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  Mirpur DOHS, Dhaka
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  Bangladesh
                </p>
              </div>

              {/* Opening Hours */}
              <div className="pt-6 md:pl-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mr-4 transform transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                    Opening Hours
                  </h3>
                </div>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  Mon – Fri 8.00 am to
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  5.00 pm
                </p>
                <p className="text-gray-600 ml-16 transition-all duration-300 group-hover:text-green-600">
                  Weekend Closed
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
              <ContactButton
                className="before:from-green-500 before:to-green-600 transform hover:scale-105 transition-all duration-300"
                onClick={redirectToWhatsApp}
              >
                <Send size={18} /> Send Us A Message
              </ContactButton>
              <ContactButton
                className="before:from-blue-500 before:to-blue-600 transform hover:scale-105 transition-all duration-300"
                onClick={redirectToCall}
              >
                <PhoneCall size={18} /> Schedule A Call
              </ContactButton>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="lg:w-1/2 relative">
            <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5885655226607!2d90.41448317353958!3d23.83322528559498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c591cda717b5%3A0x426583e057ac1514!2sSUMON%20TOUR%20AND%20TRAVELS!5e0!3m2!1sen!2sbd!4v1747204346789!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SUMON TOUR AND TRAVELS location"
                className="filter brightness-90 hover:brightness-100 transition-all duration-300"
              ></iframe>
            </div>

            {/* Map Overlay with Contact Information */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs bg-opacity-90 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Visit Our Office</h4>
              <p className="text-sm text-gray-600">SUMON TOUR AND TRAVELS</p>
              <a
                href="https://maps.google.com/maps?ll=23.833225,90.414483&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=4789115322233308436"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-green-600 hover:text-green-800 transition-colors duration-300"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 lg:p-12 max-w-4xl mx-auto transform hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Send Us A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all duration-300 group-hover:text-green-600 peer-focus:text-green-600"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all duration-300 group-hover:text-green-600 peer-focus:text-green-600"
                >
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-300 peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all duration-300 group-hover:text-green-600 peer-focus:text-green-600"
              >
                Your Message
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 
                        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-blue-500
                        before:transform before:origin-left before:transition-transform before:duration-500 
                        hover:before:origin-right hover:shadow-lg transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </div>

            {submitSuccess && (
              <div className="text-center text-green-600 font-medium bg-green-50 p-3 rounded-lg animate-fade-in">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
