// ContactUs.js
import React from "react";
import { contactContent } from "../utils/contactContent"; // Adjust the path based on your folder structure
import ContactForm from "../components/contacts/ContactForm"; // Assuming you have a ContactForm component
import { TiMail } from "react-icons/ti";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export default function ContactUs() {
  return (
    <div className="mx-auto ">
      <div className="flex  flex-box w-full py-10 bg-white ">
        <div className="w-[100%] responsive flex-box flex-col lg:flex-row  gap-10">
          {/* Heading */}
          <section className="w-[90%] lg:w-[40%] ">
            <h1 className="text-3xl font-bold text-center mb-6 ">
              {contactContent.heading}
            </h1>
            <p className="text-center text-primary text-lg p-2">
              {contactContent.introText}
            </p>
          </section>

          {/* How to Reach Us Section */}
          <section className="w-[90%] lg:w-[40%] bg-white rounded-bl-3xl rounded-tr-3xl shadow-lg ">
            <h3 className="text-3xl text-gray-500 font-semibold rounded-tr-3xl mb-4 p-5 bg-gradient-to-r from-orange-300  to-orange-100">
              {contactContent.howToReachUs.title}
            </h3>

            {/* Email */}

            <div className="w-[100%] flex gap-5 justify-start items-center border-b-2 p-5">
              <p className="text-4xl font-bold text-orange-400">
                <TiMail />
              </p>
              <div className="flex flex-col">
                <p className="text-sm">
                  {contactContent.howToReachUs.email.description}{" "}
                </p>
                <a
                  href={`mailto:${contactContent.howToReachUs.email.address}`}
                  className="text-blue-500 hover:underline"
                >
                  {contactContent.howToReachUs.email.address}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="w-[100%] flex gap-5 justify-start items-center border-b-2 p-5">
              <p className="text-3xl font-bold text-orange-400">
                <MdPhoneInTalk />
              </p>
              <div className="flex flex-col">
                <p className="text-sm">
                  {contactContent.howToReachUs.phone.description}{" "}
                </p>
                <a
                  href={`tel:${contactContent.howToReachUs.phone.number}`}
                  className="text-blue-500 hover:underline"
                >
                  {contactContent.howToReachUs.phone.number}
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="w-[100%] flex gap-5 justify-start items-center border-b-2 p-5">
              <p className="text-3xl font-bold text-orange-400">
                <IoLocationOutline />
              </p>
              <div className="flex flex-col">
                <p className="text-sm">
                  {" "}
                  {contactContent.howToReachUs.office.address
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}{" "}
                </p>
              </div>
            </div>
            {/* Business Hours */}

            <div className="w-[100%] flex gap-5 justify-start items-center p-5">
              <p className="text-3xl font-bold text-orange-400">
                <MdAccessTime />
              </p>
              <div className="flex flex-col">
                <p className="text-sm">
                  {contactContent.howToReachUs.businessHours.hours
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Connect with Us Section */}
      <section className="py-8 flex-box">
        <div className="  w-[95%] lg:w-[90%] xl:w-[80%] flex-box flex-col ">
          <h3 className="text-3xl font-semibold mb-4">
            {contactContent.connectWithUs.title}
          </h3>
          <p className="text-primary text-lg mb-4">
            {contactContent.connectWithUs.description}
          </p>

          <ul className="flex gap-5 text-2xl">
            <li className="text-blue-800">
              <a href={contactContent.connectWithUs.linkedin.url}>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href={contactContent.connectWithUs.twitter.url}>
                <FaXTwitter />
              </a>
            </li>
            <li className="text-blue-500">
              <a href={contactContent.connectWithUs.facebook.url}>
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 flex-box bg-white">
        <div className="w-[95%] lg:w-[90%] xl:w-[80%] flex-box flex-col  gap-5">
          <h3 className="text-3xl text-primary font-semibold mb-4">
            {contactContent.contactForm.title}
          </h3>
          <p className="text-primary text-lg">
            {contactContent.contactForm.description}
          </p>
          <div className="border w-[90%] md:w-[70%] xl:w-[50%] rounded-xl p-5 shadow-lg shadow-orange-200">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
