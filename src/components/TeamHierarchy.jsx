import React from "react";
import { marwan, samah, walid, AhmadSaeid, kutaibaMhaish, ObaidaHammad, UsmanUmmar } from "@/images/team";
import Image from "next/image";

const teamStructure = {
  owner: { name: "Mr. Marwan al-Sayyah", position: "Owner", image: marwan },
  managers: [
    { name: "Walid Shekho", position: "Company Manager", image: walid },
    { name: "Samah Faek", position: "Company Manager", image: samah },
  ],
  employees: [
    { name: "Usman Kuttoth", position: "HR Coordinator/PRO", image: UsmanUmmar },
    { name: "Kutaiba Mhaish", position: "Senior Accountant", image: kutaibaMhaish },
    { name: "Ahmad Saied", position: "Accountant", image: AhmadSaeid },
    { name: "Obaida Hammad", position: "Accountant", image: ObaidaHammad },
  ],
};

const TeamNode = ({ member }) => {
  return (
    <div className="relative flex flex-col items-center bg-white border border-gray-300 p-4 md:p-6 w-48 md:w-64 text-center shadow-lg transform transition hover:-translate-y-3 hover:-translate-x-3">
      {/* Image */}
      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 mb-4">
        <Image 
          src={member.image} 
          alt={member.name} 
          height={144} 
          width={144}  
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Name & Position */}
      <h3 className="text-sm md:text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-xs md:text-sm text-gray-600">{member.position}</p>
    </div>
  );
};

const TeamHierarchy = () => {
  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-12">
      {/* Owner */}
      <div className="flex justify-center">
        <TeamNode member={teamStructure.owner} />
      </div>

      {/* Managers */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {teamStructure.managers.map((manager, index) => (
          <TeamNode key={index} member={manager} />
        ))}
      </div>

      {/* Employees */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {teamStructure.employees.map((employee, index) => (
          <TeamNode key={index} member={employee} />
        ))}
      </div>
    </div>
  );
};

export default TeamHierarchy;
