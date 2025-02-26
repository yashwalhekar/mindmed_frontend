// Services.js
import { servicesContent } from "../utils/servicesContent"; // Adjust the path based on your folder structure
import ServicesCard from "../components/home/ServicesCard";
import ai_driven_img from "../assets/images/ai_driven.jpg";
import sos_img from "../assets/images/sos.jpg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
export default function Services() {
  return (
    <div className=" mx-auto bg-white">
      {/* Heading */}
      <section className="w-[100%] flex-box mb-8">
        <div className=" w-[100%] responsive p-5">
          <h1 className="text-3xl font-bold text-center mb-6">
            {servicesContent.heading}
          </h1>
          <p className="text-center text-primary mb-8 text-lg">
            {servicesContent.introduction}
          </p>
        </div>
      </section>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-500">
        {servicesContent.subheading}
      </h2>
      {/* Render each service */}
      <section className="w-[100%] flex-box p-2 mb-10">
        <div className="min-h-[500px] w-[100%] responsive flex-box flex-col lg:flex-row  p-5 gap-5 bg-orange-200 rounded-xl">
          <div className="w-[100%] lg:w-[50%] h-[100%] flex-box">
            <img
              src={ai_driven_img}
              alt=""
              className="w-[100%] sm:w-[90%] lg:w-[100%]  h-[100%] rounded-xl"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-3 ">
            <h3 className="text-2xl text-primary font-semibold">
              {servicesContent.aiDrvenService.title}
            </h3>
            <p className="text-primary text-md">
              {servicesContent.aiDrvenService.description}
            </p>
            <ul className="list-disc list-inside text-primary text-md">
              {servicesContent.aiDrvenService.features.map((feature, index) => (
            <li
            key={index}
            className="text-primary text-md flex gap-2 items-center"
          >
            <div className="text-xl">
              <IoIosArrowDroprightCircle />
            </div>
            <div>
              <p> {feature}</p>
            </div>
          </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[100%] flex-box p-2 mb-10">
        <div className="min-h-[500px] w-[100%] responsive flex-box flex-col lg:flex-row p-5 gap-5 bg-secondary rounded-xl">
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-3 ">
            <h3 className="text-2xl text-white font-semibold">
              {servicesContent.sosService.title}
            </h3>
            <p className="text-white text-md">
              {servicesContent.sosService.description}
            </p>
            <p className="text-white text-md">
              {servicesContent.sosService.additionalInfo}
            </p>
         
            <ul className="list-disc list-inside text-white text-md">
              {servicesContent.sosService.features.map((feature, index) => (
                 <li
                 key={index}
                className="text-white text-md flex gap-2 items-center"
               >
                 <div className="text-xl">
                   <IoIosArrowDroprightCircle />
                 </div>
                 <div>
                   <p> {feature}</p>
                 </div>
               </li>
              ))}
            </ul>
          </div>
          <div className="w-[100%] lg:w-[50%] h-[100%] flex-box">
            <img
              src={sos_img}
              alt=""
              className="w-[100%] sm:w-[90%] lg:w-[100%]  h-[100%] rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="w-full bg-white flex-box">
        <div className="w-[100%] responsive flex flex-col items-center rounded-xl mb-8 p-5 ">
          <h3 className="text-3xl font-semibold mb-4">
            {servicesContent.whyChooseUs.title}
          </h3>
          <div className="grid  grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4">
            {servicesContent.whyChooseUs.items.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                className="mb-2"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
