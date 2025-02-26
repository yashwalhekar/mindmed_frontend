import { FaCircleCheck } from "react-icons/fa6";
function WhyChooseUsCard({ title, description }) {
  return (
    <div className="flex-box flex-col w-[300px] h-[300px] border-4 border-secondary bg-white p-5  gap-2 rounded-full">
      <h2 className="text-md font-bold text-primary">{title}</h2>
      <p className="text-md text-primary text-center">{description}</p>
    </div>
  );
}

export default WhyChooseUsCard;
