import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import SectionContainer from "./SectionContainer";
import { slideIn, textVariant } from "../utils/motion";
import { github, linkedIn, gmail } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: process.env.REACT_APP_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          alert("Thank you for dropping a message!");
        },
        (err) => {
          setLoading(false);
          alert("Something went wrong!.Please try again");
        }
      );
  };
  const handleChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <SectionContainer id="contact">
      <div className="xl:mt-12 md:w-[50%] mx-auto">
        <motion.div variants={textVariant()} className="mb-4">
          <h3 className={styles.sectionHeadText}>Get in touch</h3>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-3xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="gap-8 mt-10 flex-col"
          >
            <label className="flex flex-col text-xl">
              <span className="my-6">Your name</span>
              <input
                type="text"
                name="name"
                placeholder="What's your name"
                value={form.name}
                onChange={(e) => handleChange(e.target)}
                className="bg-tertiary rounded-xl text-secondary outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col text-xl">
              <span className="my-6">Your email</span>
              <input
                type="email"
                name="email"
                placeholder="What's your email"
                value={form.email}
                onChange={(e) => handleChange(e.target)}
                className="bg-tertiary rounded-xl text-secondary outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col text-xl">
              <span className="my-6">Your message</span>
              <textarea
                type="text"
                rows={7}
                name="message"
                placeholder="Drop in a message"
                value={form.message}
                onChange={(e) => handleChange(e.target)}
                className="bg-tertiary rounded-xl text-secondary outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <button
              type="submit"
              className="px-8 py-4 text-xl bg-tertiary m-4 rounded-xl outline-none font-bold shadow-md shadow-primary"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <div>
            <p>Feel free to connect</p>
            <div>
              <button className="rounded-full w-9 mx-1 hover:shadow-2xl hover:shadow-white shadow-inner">
                <img src={github} />
              </button>
              <button className="rounded-full w-9 mx-1 hover:shadow-2xl hover:shadow-white">
                <img src={linkedIn} className="rounded-3xl" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
