import { FaCircleCheck } from "react-icons/fa6";
function ServicesCard({ title, description , iconColor}) {
  return (
    <div className="flex bg-white p-5  items-center gap-2 shadow-md">
      <div className={`text-5xl text-ternary`}>
        <FaCircleCheck />
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-gray-500">{title}:</h2>
        <p className="text-md text-primary">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
