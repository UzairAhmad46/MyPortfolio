import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_aa9ehjs", "template_olbixv4", form.current, {
        publicKey: "BDt6dqz7nyRFWCTS5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message not sent");
        }
      );
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center">
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-black text-xl font-semibold mb-4">
              Send Your Message
            </h1>
            <div className="flex flex-col  mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Enter Your fullName"
                className="shadow appearance-none border rounded-lx py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col  mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="user_email"
                placeholder="Enter Your Email"
                required
                className="shadow appearance-none border rounded-lx py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col  mb-4">
              <label className="block text-gray-700">Massage</label>
              <textarea
                type="text"
                id="massages"
                name="message"
                required
                placeholder="Enter Your Massage Here"
                className="shadow appearance-none border rounded-lx py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
