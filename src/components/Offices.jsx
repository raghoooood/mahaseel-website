import { FaMapMarkerAlt } from "react-icons/fa";



const Offices = ({ className, ...props }) => {
  const officeAddress = "Blue Bay Tower, Business Bay, Dubai, Office 711";

  return (
        <div className="flex items-center gap-3 text-neutral-600 pt-5">
          <FaMapMarkerAlt size={22} className="text-red-500" />
          <span className="text-base font-medium">{officeAddress}</span>
        </div>
   
  );
};

export default Offices;
