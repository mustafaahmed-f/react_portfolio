import PropType from "prop-types";

Institute.propTypes = {
  number: PropType.number,
  instituteName: PropType.string,
  year: PropType.string,
  location: PropType.string,
  Degree: PropType.string,
};

function Institute({ number, instituteName, year, location, Degree }) {
  return (
    <div className="relative px-3 py-4 border rounded-tl-2xl rounded-br-2xl sm:px-5 border-mainColor sm:py-6 min-w-[70%] text-lg sm:text-xl">
      <div className="absolute top-0 left-0 px-5 py-1 text-mainColor">
        {number}
      </div>
      <div className="flex flex-col w-full gap-1 mt-5 sm:gap-2">
        <div className="flex items-center justify-between flex-nowrap">
          <h3 className="text-xl font-bold text-white sm:text-3xl">
            {instituteName}
          </h3>
          <p className="text-darkFont">{year}</p>
        </div>
        <p className="text-secondaryColor">{location}</p>
        <p className="text-darkFont">{Degree}</p>
      </div>
    </div>
  );
}

export default Institute;
