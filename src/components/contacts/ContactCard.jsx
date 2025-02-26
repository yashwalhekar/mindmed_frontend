import { FaCircleCheck } from "react-icons/fa6";
function ContactCard({ icon, title, description }) {
  return (
    <div className="flex bg-white p-5  items-center gap-2 shadow-md">
      <div className="text-5xl text-ternary">
        <icon />
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-primary">{title}:</h2>
        <p className="text-md text-primary">{description}</p>
      </div>
    </div>
  );
}

export default ContactCard;
