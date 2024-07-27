import PropTypes from "prop-types";

NavElement.propTypes = {
  currentSection: PropTypes.string,
  section: PropTypes.string,
  icon: PropTypes.string,
  fn: PropTypes.func,
};

function NavElement({ currentSection, icon, section, fn }) {
  return (
    <div
      className={`${
        currentSection === section ? "bg-mainColor" : "bg-transparent"
      } py-1 px-2 text-white hover:bg-mainColor rounded-full cursor-pointer sm:mx-2`}
      onClick={() => fn()}
    >
      <a href={`#${section}`}>
        <p className="hidden sm:block font-semibold">{section}</p>
        <span className="block sm:hidden">{icon}</span>
      </a>
    </div>
  );
}

export default NavElement;
