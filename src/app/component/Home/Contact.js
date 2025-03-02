'use client'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5q22n7j",  // Replace with your EmailJS Service ID
        "template_4821jmv", // Replace with your EmailJS Template ID
        formRef.current,
        "rdwNKDnyWwB-Ams6n"   // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          alert(status)
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send email: " + error.text);
          alert(status)
        }
      );
  };
  return (
    <div className="min-h-screen  w-full flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
        {/* Left Column */}
        <div className="w-full flex flex-col justify-center ">
          <p className="text-8xl">Let's Talk</p>
          <p className="w-1/2 GlowText"> If you have an ambitious project, we'd love to help. Reach out to us via the contact form or schedule a call.</p>
          <p className="mt-4 text-blue-800 GlowText">Follow Me</p>
          <p className=" pointer-events-auto cursor-pointer GlowText">Instagram</p>
          <p className=" pointer-events-auto cursor-pointer GlowText">Linkedin</p>
          <p className=" pointer-events-auto cursor-pointer GlowText">Twitter/X</p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-1/2">

          <form ref={formRef} onSubmit={sendEmail} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl space-y-6">
            <h2 className="text-3xl font-bold text-black text-center">Contact Us</h2>
            
            <div>
              <label className="block  text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="pointer-events-auto w-full px-4 py-3 border-2 border-black/20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10  placeholder-white/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block  text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="pointer-events-auto w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10  placeholder-white/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="pointer-events-auto w-full px-4 py-3 border-2 border-black/20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10  placeholder-white/50"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="pointer-events-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;