import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCancel } from "react-icons/md";
import userProfile from "../../assets/images/user-profile-icon.svg";

const Carousel = ({ data }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedMember]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[95%] mx-auto pb-10">
      <h2 className="text-2xl text-white font-semibold text-center mb-5">
        {data.title}
      </h2>
      <Slider {...settings}>
        {data?.teamMembers?.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src={member.image ? member.image : userProfile}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold  line-clamp-1">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.designation}</p>
              <p className="text-gray-700 text-center mt-2 text-sm  line-clamp-2">
                {member.description}
              </p>
              <button
                className="mt-2 text-blue-600 hover:underline"
                onClick={() => setSelectedMember(member)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal with Custom Thin Scrollbar */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto relative custom-scroll">
            <button
              className="absolute top-2 right-2 text-2xl text-red-500 hover:text-red-700"
              onClick={() => setSelectedMember(null)}
            >
              <MdOutlineCancel />
            </button>
            <div className="text-center">
              <img
                src={selectedMember.image ? selectedMember.image : userProfile}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
              <p className="text-gray-500">{selectedMember.designation}</p>
            </div>
            <div className="mt-4 max-h-[50vh] overflow-y-auto px-2 custom-scroll">
              <p className="text-gray-700">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
