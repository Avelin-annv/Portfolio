import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import SectionContainer from "./SectionContainer";
import { slideIn, textVariant } from "../utils/motion";
import { github, linkedIn, rocket } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants";

const Contact = () => {
  const navigate = useNavigate();
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
      <div className="xl:mt-12 md:w-[70%] mx-auto ">
        <motion.div variants={textVariant()} className="mb-4">
          <h3 className={styles.sectionHeadText}>Get in touch</h3>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 moon-bg rounded-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="gap-8 mt-10 flex-col w-[90%] mx-auto text-white"
          >
            <label className="flex flex-col text-xl lg:mx-8">
              <span className="my-6 sm:text-xl font-semibold">Name</span>
              <input
                type="text"
                name="name"
                placeholder="What's your name"
                value={form.name}
                onChange={(e) => handleChange(e.target)}
                className="bg-transparent rounded-xl text-white outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col text-xl">
              <span className="my-6 sm:text-xl font-semibold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="What's your email"
                value={form.email}
                onChange={(e) => handleChange(e.target)}
                className="bg-transparent rounded-xl text-white outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col sm:text-xl font-semibold">
              <span className="my-6 sm:text-xl">Drop in a message</span>
              <textarea
                type="text"
                rows={7}
                name="message"
                placeholder="Drop in a message"
                value={form.message}
                onChange={(e) => handleChange(e.target)}
                className="bg-transparent rounded-xl text-white outlined-none py-4 border-none shadow-md shadow-primary "
              />
            </label>
            <button
              type="submit"
              className="px-2 py-1 text-xl bg-tertiary m-4 rounded-xl outline-none font-bold shadow-md shadow-primary mx-auto flex flex-col"
              onClick={(e) => handleSubmit(e)}
              style={{ backgroundImage: rocket }}
            >
              <img src={rocket} className="w-10 h-10 mx-auto" />
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <div>
            <p>Feel free to connect</p>
            <div>
              <Link to={SOCIAL_LINKS.github}>
                <button className="rounded-full w-9 mx-1 hover:shadow-2xl hover:shadow-white shadow-inner">
                  <img src={github} />
                </button>
              </Link>
              <Link to={SOCIAL_LINKS.linkedIn}>
                <button className="rounded-full w-9 mx-1 hover:shadow-2xl hover:shadow-white">
                  <img src={linkedIn} className="rounded-full " />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
