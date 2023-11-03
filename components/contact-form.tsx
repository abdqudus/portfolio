"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form
      action="https://formspree.io/f/xknlyajv"
      method="POST"
      className=" px-8"
    >
      <div className="sm:grid grid-cols-2 grid-rows-5 gap-3 ">
        <div className="flex flex-col gap-2   mb-3 sm:mb-0">
          <label className="text-[#FCE09B]" htmlFor="name">
            Name:
          </label>
          <input
            className="block border-0 flex-grow rounded-md p-2 outline-0 bg-[#FCE09B] overflow-auto text-[#186F65]"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mb-3 sm:mb-0 ">
          <label htmlFor="email" className="text-[#FCE09B]">
            Email:
          </label>
          <input
            className="block border-0 flex-grow rounded-md p-2 outline-0 bg-[#FCE09B] overflow-auto text-[#186F65]"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2 row-start-2 row-end-5 flex flex-col gap-2  mb-3 sm:mb-0">
          <label htmlFor="message" className="text-[#FCE09B]">
            Message:
          </label>
          <textarea
            className="block text-[#186F65] border-0 flex-grow rounded-md p-2 outline-0 bg-[#FCE09B] overflow-auto text-[#B2186F65533E]"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="bg-[#FCE09B] mt-3 px-3 py-2 w-[100px] rounded-md text-[#186F65] font-semi-bold text-lg">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
