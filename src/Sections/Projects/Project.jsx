import PropTypes from "prop-types";
import LinkIcon from "./LinkIcon";
import GitHubIcon from "./GitHubIcon";

Project.propTypes = {
  imgUrl: PropTypes.string,
};

function Project({
  imgUrl,
  name,
  icon,
  technologies,
  githubLink,
  liveLink,
  packageLink,
  description,
}) {
  return (
    <div className="relative flex flex-col items-center overflow-hidden text-lg rounded-lg sm:rounded-xl sm:gap-3 bg-projects">
      {/* <div className="absolute top-0 left-0 p-1 bg-darkBorder">{icon}</div> */}
      <img src={imgUrl} alt={name} className="w-full min-h-[260px] " />
      <div className="flex flex-col items-center h-full gap-3 mx-2 my-3">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-darkFont">{description}</p>
        <p className="text-darkFont">
          <span className="text-white">Tech Stack : </span>
          {technologies.join(", ")}
        </p>
        <div className="flex items-center justify-between gap-24 mt-auto text-white flex-nowrap">
          {liveLink || packageLink ? (
            <div className="flex items-center gap-[2px] sm:gap-1">
              <LinkIcon />
              <a href={liveLink ? liveLink : packageLink}>
                {liveLink ? "Live" : "NPM"}
              </a>
            </div>
          ) : null}

          <div className="flex items-center gap-[2px] sm:gap-1">
            <GitHubIcon />
            <a href={githubLink}>Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
