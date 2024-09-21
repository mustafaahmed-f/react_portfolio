import GithubIcon from "../../SVGIcons/Github";
import LinkedInIcon from "../../SVGIcons/linkedIn";

function Links() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-2 sm:gap-6">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mustafafekry/"
        className="p-2 bg-transparent border rounded-full cursor-pointer border-hoverBtn"
      >
        <LinkedInIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mustafaahmed-f"
        className="p-2 border rounded-full cursor-pointer bg-slate-400 border-hoverBtn"
      >
        <GithubIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://leetcode.com/u/mustafaahmed1997/"
        className="px-3 py-2 bg-transparent border rounded-full cursor-pointer border-hoverBtn"
      >
        <img src="../leetCode.svg" width={35} height={35} alt="leetCode" />
      </a>
    </div>
  );
}

export default Links;
