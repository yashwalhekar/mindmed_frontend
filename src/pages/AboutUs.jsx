import React, { lazy, Suspense } from "react";
import { aboutUsContent } from "../utils/aboutUs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { DoctorsTeam, leadershipTeam } from "../utils/aboutUs";

// Lazy load the Carousel component
const Carousel = lazy(() => import("../components/aboutUs/Carousel"));

const AboutUs = () => {
  return (
    <div className="mx-auto my-10 flex flex-col gap-5 p-2 md:p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Who we Are?</h1>

      {/* Dynamic Section Rendering */}
      <section className="w-[100%] flex-box mb-5">
        <div className="w-[100%] responsive flex flex-col gap-5">
          {Object.entries(aboutUsContent).map(([key, section]) => (
            <div key={key} className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-lg font-medium mb-2">{section.title}</h2>
              {section.points && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-lg flex gap-3 items-start text-primary"
                    >
                      <div className="text-2xl py-2">
                        <IoIosArrowDroprightCircle />
                      </div>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Team Carousel */}
      <section className="w-[100%] flex-box">
        <div className="w-[100%] responsive flex flex-col gap-5 p-5 shadow-lg rounded-lg bg-orange-200">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Carousel data={DoctorsTeam} />
          </Suspense>
        </div>
      </section>

      {/* Leadership Team Carousel */}
      <section className="w-[100%] flex-box">
        <div className="w-[100%] responsive flex flex-col gap-5 p-5 shadow-lg rounded-lg bg-secondary">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Carousel data={leadershipTeam} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
