import { useState } from "react";
import { experienceData } from "./ExperienceData";

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(
    experienceData[0].companyName
  );

  function handleChangeCompany(companyName) {
    setSelectedCompany(companyName);
  }

  return (
    <section
      id="Experience"
      className="flex flex-col items-center w-full gap-5 px-3 py-16 bg-black sm:gap-6 sm:px-12"
    >
      <h2 className="sectionTitle">
        <div className="leftLine"></div>
        Experience
        <div className="rightLine"></div>
      </h2>
      <div className="flex flex-col items-center justify-between w-full text-white gap-7 lg:flex-row sm:w-fit flex-nowrap sm:gap-16 lg:gap-32 sm:my-9">
        <div className="flex flex-row flex-wrap justify-center border-transparent t border-l-darkBorder lg:flex-col sm:gap-0 sm:flex-nowrap">
          {experienceData.map((item) => (
            <p
              key={item.id}
              className={` border lg:px-3 px-10 py-5 cursor-pointer border-transparent border-l-2 flex items-center justify-center ${
                selectedCompany === item.companyName
                  ? "bg-darkBorder border-l-lightBorder"
                  : "bg-transparent border-l-darkBorder"
              }`}
              onClick={() => handleChangeCompany(item.companyName)}
            >
              {item.companyName}
            </p>
          ))}
        </div>
        {experienceData.map(
          (item) =>
            item.companyName === selectedCompany && (
              <div
                className="flex flex-col gap-2 min-h-60 min-w-0 sm:min-w-[600px] lg:min-w-[780px]"
                key={item.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl text-white">{item.role}</h3>
                  <p className="text-darkFont">{item.period}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-mainColor">
                  {item.location && <p className="text-lg ">{item.location}</p>}
                  <p className="">{item.typeOfWork}</p>
                </div>
                <ul className="flex flex-col gap-2 px-5 list-disc">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-darkFont">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
    </section>
  );
}

export default Experience;
