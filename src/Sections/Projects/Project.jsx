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
    <div className="relative flex flex-col items-center gap-2 overflow-hidden text-base rounded-lg sm:text-lg sm:rounded-xl sm:gap-3 bg-projects">
      <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-darkBorder">
        <img src={icon} className="w-full" />
      </div>
      <img
        src={imgUrl}
        alt={name}
        className="w-full min-h-[190px] sm:min-h-[260px] "
      />
      <div className="flex flex-col items-center w-full h-full gap-3 px-2 py-3">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-darkFont">{description}</p>
        <p className="w-full text-darkFont text-start">
          <span className="text-white font-[500]">Tech Stack : </span>
          {technologies.join(", ")}
        </p>
        <div className="flex items-center justify-between gap-24 mt-auto text-white flex-nowrap">
          {liveLink || packageLink ? (
            <div className="flex items-center gap-[2px] sm:gap-1">
              <LinkIcon />
              <a
                href={liveLink ? liveLink : packageLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                {liveLink ? "Live" : "NPM"}
              </a>
            </div>
          ) : null}

          <div className="flex items-center gap-[2px] sm:gap-1">
            <GitHubIcon />
            <a
              target="_blank"
              rel="noreferrer"
              href={githubLink}
              className="hover:text-cyan-400"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
