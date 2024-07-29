import { useFormik } from "formik";
import InputComponent from "../../Components/Input/InputComponent";
import TextAreaComponent from "../../Components/TextArea/TextAreaComponent";
import { formValidation } from "./FormValidation";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../../Hooks/useSection";

const initialValues = {
  title: "",
  message: "",
  email: "",
  name: "",
};

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;

function Contact() {
  const [loading, setLoading] = useState(false);
  const { setSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setSection("Contact");
  }, [inView, setSection]);

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: formValidation,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      emailjs
        .send(
          serviceId, // Replace with your EmailJS service ID
          templateId, // Replace with your EmailJS template ID
          values,
          userId // Replace with your EmailJS user ID
        )
        .then(
          () => {
            setLoading(false);
            alert("Email sent successfully!");
            resetForm();
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            alert("Failed to send email. Please try again later.");
          }
        );
    },
  });
  return (
    <section
      ref={ref}
      id="Contact"
      className="flex flex-col items-center w-full gap-5 px-3 py-16 bg-educationSec sm:gap-6 sm:px-12"
    >
      <h2 className="sectionTitle">
        <div className="leftLine"></div>
        <p className="font-normal">
          Contact <span className="font-semibold text-mainColor">Me</span>
        </p>
        <div className="rightLine"></div>
      </h2>
      <form
        className="flex flex-col gap-3 my-2 w-[75%]"
        onSubmit={formik.handleSubmit}
      >
        <InputComponent
          label="Email"
          name="email"
          placeholder="Enter your email ..."
          formik={formik}
        />
        <InputComponent
          label="Name"
          name="name"
          placeholder="Enter your name ..."
          formik={formik}
        />
        <InputComponent
          label="Title"
          name="title"
          placeholder="Title ..."
          formik={formik}
        />
        <TextAreaComponent
          label="Message"
          name="message"
          placeholder="Write a message ..."
          formik={formik}
        />
        <div>
          <button
            type="submit"
            className="px-3 py-2 my-2 font-[500] text-white rounded-full bg-secondaryColor hover:bg-mainColor disabled:bg-gray-500"
            disabled={Object.keys(formik.errors).length > 0 || loading}
          >
            {loading ? "Loading ..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
