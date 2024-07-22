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
      } py-1 px-2 text-white`}
      onClick={() => fn}
    >
      <p className="hidden sm:block">{section}</p>
      <span className="block sm:hidden">{icon}</span>
    </div>
  );
}

export default NavElement;
