import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mohdyusufhesam@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white p-4">
        <main className="mt-12 grid grid-cols-1 gap-6 w-full max-w-5xl md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
          {/* Email Card */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center lg:col-span-2 lg:row-span-1">
            <FaEnvelope className="text-4xl mb-4" />
            <p>mohdyusufhesam@gmail.com</p>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center lg:col-span-2 lg:row-span-2">
            <FaLinkedin className="text-4xl mb-4" />
            <p className="text-lg font-semibold">LinkedIn Profile</p>
            <a
              href="https://www.linkedin.com/in/mohd-yusuf-hesam-500a2b233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Connect with me on LinkedIn
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center lg:col-span-2 lg:row-span-1">
            <FaGithub className="text-4xl mb-4" />
            <p className="text-lg font-semibold">GitHub Profile</p>
            <a
              href="https://github.com/turbo7slug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Find more of my repositories
            </a>
          </div>
        </main>

        <header className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-2">Connect with me</h1>
          <p className="text-gray-300">You can also get in touch with me through this form below.</p>
        </header>

        {/* Contact Form */}
        <div className="bg-black rounded-lg p-6 w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">Contact with me</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-900 text-gray-200 border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-900 text-gray-200 border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-900 text-gray-200 border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <button
              type="submit"
              className="py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-gray-500">&copy; 2024 Yusuf. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
