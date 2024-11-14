// https://www.google.com/maps/@23.5472419,87.2925633,17.28z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D

import React, { useState } from "react";
import PageContainer from "../Components/PageContainer";
import { MdMail, MdMessage, MdPerson, MdPhone } from "react-icons/md";
import UiInput from "../Components/Input";
import UITextArea from "../Components/Input/TextArea";
import { db, addDoc, collection } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      query: query,
    };
    try {
      await addDoc(collection(db, "contactMessages"), formData);
      toast.success("submitted successfully!");
      console.log("Form submitted successfully!");
      setName("");
      setEmail("");
      setQuery("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <PageContainer>
      <div className=" flex flex-col justify-center items-center pt-10 mb-10 mt-7">
        <ToastContainer />
        <p className="text-3xl text-primaryPink  font-bold">
          FEEL FREE TO CONTACT US
        </p>

        {/* <div className=" w-full h-max relative flex justify-center items-center ">
          <div className="absolute  w-52 h-52 bg-primaryPink rounded-full blur-3xl z-20"></div>
          <img
            src={
              "https://res.cloudinary.com/dogqbjx8a/image/upload/contact_kldkjl.webp"
            }
            alt="contact"
            className="w-96 h-96 z-30"
          />
        </div> */}
        <p className="text-center text-lg w-4/5 mx-auto">
          Have questions, feedback, or need assistance? We’re here to help!
          Reach out to us, and our team will get back to you as soon as
          possible.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row w-[90%] mx-auto gap-4   my-5">
        <div className="w-full md:w-1/2 md:min-h-[60vh] border-1 glass-card flex flex-col items-center py-5">
          <p className=" text-2xl text-secondaryPink font-bold mb-4">
            Get in touch with us
          </p>
          <p className="text-center text-lg mb-7 w-[90%] mx-auto">
            We're excited to hear from you and can't wait to make this hackathon
            experience memorable!
          </p>
          <form className="flex flex-col w-[90%] md:w-4/5  mx-auto gap-4 dark">
            <p className=" text-base">
              Enter Your Name <span className="text-red-500">*</span>
            </p>
            <UiInput
              placeholder="John Doe"
              label={"Name"}
              isRequired={true}
              type={"text"}
              value={name} 
              startContent={<MdPerson />}
              onChange={handleNameChange}
            />
            <p className=" text-base">
              Enter Your Email <span className="text-red-500">*</span>
            </p>

            <UiInput
              placeholder="john.doe@gmail.com"
              label={"Email"}
              isRequired={true}
              type={"email"}
              value={email} 
              startContent={<MdMail />}
              onChange={handleEmailChange}
            />
            <p className=" text-base">
              Suggestions/ Feedback/ Queries{" "}
              <span className="text-red-500">*</span>
            </p>

            <UITextArea
              placeholder="Your message"
              label={"Message"}
              isRequired={true}
              type={"text"}
              value={query} 
              startContent={<MdMessage />}
              onChange={handleQueryChange}
            />
            <button
              type="submit"
              className="bg-primaryPink text-white py-2 px-4 rounded-md hover:bg-pink-500 transition-colors duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" w-full md:w-1/2 md:min-h-[60vh] flex flex-col gap-4">
          <div className="w-full min-h-[18vh] border-1 glass-card flex flex-col justify-center items-center">
            <p className="text-2xl text-secondaryPink font-bold">
              Sponsorship and Partnership
            </p>
            <div className="flex items-center mt-4">
              <MdPhone className="mr-2" />
              <a href="tel:+91 7890912728" className="text-lg">
               +91 7890912728
              </a>
              <p className="ml-2">(Ayush Bhartia) </p>
            </div>
            <div className="flex items-center mt-4">
              <MdPhone className="mr-2" />
              <a href="tel:+91 9679670516" className="text-lg">
               +91 9679670516
              </a>
              <p className="ml-2">(Suman Karmakar) </p>
            </div>
            <div className="flex items-center mt-2">
              <MdMail className="mr-2" />
              <a href="mailto:nitdlug@gmail.com" className="text-lg">
                nitdlug@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:min-h-[40vh] border-1 glass-card">
            {" "}
            <img
              src={
                "https://res.cloudinary.com/dogqbjx8a/image/upload/map_oucub4.webp"
              }
              alt="map"
              className="w-full rounded-xl cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/@23.5472419,87.2925633,17.28z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Contact;
