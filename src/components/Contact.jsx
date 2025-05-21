import { useState } from "react";
;
import emailjs from "@emailjs/browser";

const Contact = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const SERVICE_ID = "service_khsaxwn";
  const TEMPLATE_ID = "template_3rl94m8"; 
  const PUBLIC_KEY = "X5JR42Fw7JG23IG9a";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then(
            (result) => {
               
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again.");
            });
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary ">
          {" "}
          Get in touch
        </h2>
        <form className="space-y-6 " onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
