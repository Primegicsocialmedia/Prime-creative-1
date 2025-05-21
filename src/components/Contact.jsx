import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary ">
          {" "}
          Get in touch
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none"
              placeholder="Name..."
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="w-full bg-primary text-black rounded font-medium px-4 py-3 transition hover:bg-primary/80">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
