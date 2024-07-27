function InputComponent({ label, placeholder, formik, name }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start gap-2 sm:flex-row text-start">
        <label htmlFor={name} className="text-white sm:w-28">
          {label}
        </label>
        <input
          id={name}
          className="flex-grow w-full px-3 py-1 text-black bg-white rounded-full focus:outline-none ring-2 focus:ring-mainColor "
          onChange={formik.handleChange}
          value={formik.values[name]}
          name={name}
          type="text"
          placeholder={placeholder}
        />
      </div>
      {formik.errors[name] && formik.touched[name] ? (
        <p className="my-2 text-red-500 sm:ps-28">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
}

export default InputComponent;
