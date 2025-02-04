import React from "react";

const teamStructure = [
  {
    name: "Mr.Marwan al-Sayyah",
    position: "Owner",
    image: "/images/john_doe.jpg",
    children: [
      {
        name: "Walid Shekho",
        position: "Operation Manager",
        image: "/images/jane_smith.jpg",
        children: [
          {
            name: "HR & Finance Team",
            position: "Department",
            image: "/images/hr_finance.jpg",
            children: [
              { name: "Usman Kuttoth", position: "HR Coordinator/PRO", image: "/images/michael_brown.jpg" },
              { name: "Kutaiba Mhaish", position: "Senior Accountant", image: "/images/michael_brown.jpg" },
              { name: "Ahmad Saied", position: "Accountant", image: "/images/emily_wilson.jpg" },
              { name: "Obaida Hammad", position: "Accountant", image: "/images/emily_wilson.jpg" },
            ],
          },
         
          {
            name: "Operations Team",
            position: "Department",
            image: "/images/operations_team.jpg",
            children: [
              { name: "Walid Shekho", position: "Companies Manager", image: "/images/chris_evans.jpg" },
              { name: "Samah Faek", position: "Companies Manager", image: "/images/sophia_martinez.jpg" },
            ],
          },
        ],
      },
    ],
  },
];

const TeamNode = ({ member }) => {
  return (
    <div className="border-2 border-gray-500 ">

    <div className="relative flex flex-col items-center bg-white  border border-gray-300 p-4 md:p-6 w-48 md:w-64 text-center shadow-lg transition transform -m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
      {/* Image */}
      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 ">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>

      {/* Name & Position */}
      <h3 className="text-sm md:text-lg font-semibold text-gray-800 mt-3">{member.name}</h3>
      <p className="text-xs md:text-sm text-gray-600">{member.position}</p>

      {/* Connector Line */}
      {member.children && <div className="w-1 h-6 md:h-8 bg-gray-400 absolute bottom-[-12px]"></div>}
    </div>
</div>
  );
};

const renderTeam = (members, isRoot = false) => {
  return (
    <div className={`flex flex-col items-center ${isRoot ? "mt-4 md:mt-6" : "mt-8 md:mt-12"} space-y-6`}>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <TeamNode member={member} />
            {member.children && <div className="w-1 h-6 md:h-8 bg-gray-400"></div>}
            {member.children && <div className="flex flex-wrap justify-center gap-4 md:gap-8">{renderTeam(member.children)}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamHierarchy = () => {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6">
      {renderTeam(teamStructure, true)}
    </div>
  );
};

export default TeamHierarchy;
