import React, { useState } from "react";
import GeneralQuestions from "../components/question/GeneralQuestions";
import SOSQuestions from "../components/question/SOSQuestions";
import TechnicalQuestions from "../components/question/TechnicalQuestions";
import SupportQuestions from "../components/question/SupportQuestions";

export default function FAQ() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className=" bg-white">
      <section className="w-full bg-gray-100 flex justify-center border ">
        <div className="w-[100%] responsive flex flex-col items-center rounded-xl p-5 ">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-center text-primary text-lg">
            We’ve compiled answers to some of the most common questions we
            receive about our services. If you have a question that isn’t
            addressed here, feel free to reach out to us via our Contact Us
            page.
          </p>

          {/* Buttons for sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-8">
            <button
              onClick={() => setActiveSection("general")}
              className={`px-4 py-2 font-semibold rounded ${
                activeSection === "general"
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-primary hover:bg-red-100"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveSection("sos")}
              className={`px-4 py-2 font-semibold rounded ${
                activeSection === "sos"
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-primary hover:bg-red-100"
              }`}
            >
              SOS Application
            </button>
            <button
              onClick={() => setActiveSection("technical")}
              className={`px-4 py-2 font-semibold rounded ${
                activeSection === "technical"
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-primary hover:bg-red-100"
              }`}
            >
              Technical & Security
            </button>
            <button
              onClick={() => setActiveSection("support")}
              className={`px-4 py-2 font-semibold rounded ${
                activeSection === "support"
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-primary hover:bg-red-100"
              }`}
            >
              Support & Payment
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-white flex justify-center border min-h-[400px] ">
        <div className="w-[100%] responsive flex flex-col items-center rounded-xl p-5 ">
          {activeSection === "general" && <GeneralQuestions />}
          {activeSection === "sos" && <SOSQuestions />}
          {activeSection === "technical" && <TechnicalQuestions />}
          {activeSection === "support" && <SupportQuestions />}
        </div>
      </section>
    </div>
  );
}
