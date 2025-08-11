import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-8 lg:py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question, proposal, or just want to say hi? Drop me a message
            and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition">
              <FaEnvelope className="text-indigo-400 text-3xl" />
              <div>
                <h4 className="text-white font-semibold text-lg">Email</h4>
                <p className="text-gray-300">youremail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition">
              <FaPhoneAlt className="text-indigo-400 text-3xl" />
              <div>
                <h4 className="text-white font-semibold text-lg">Phone</h4>
                <p className="text-gray-300">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition">
              <FaMapMarkerAlt className="text-indigo-400 text-3xl" />
              <div>
                <h4 className="text-white font-semibold text-lg">Location</h4>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800/60 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/50 transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
