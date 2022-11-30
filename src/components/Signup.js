import React, { useState } from "react";
import Background from "../assets/images/background.jpg";
import FormInput from "./FormInput";

const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    dealer: "",
    email: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
    },
    {
      id: 3,
      name: "dealer",
      type: "text",
      placeholder: "Dealer",
      label: "Dealer",
    },
    {
      id: 4,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 5,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      label: "Phone",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative  min-h-[600px] max-h-[50vh] w-screen">
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center">
        Modernize Businesses with Autoroot
      </h1>
      <form
        className="absolute pb-5 flex flex-col items-center top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        onSubmit={handleSubmit}
      >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="bg-white m-5 text-lg hover:bg-slate-200 rounded-full text-black py-4 px-10">
          Submit
        </button>
      </form>
      <div className="absolute min-h-[640px] h-[50vh] w-screen bg-slate-900 bg-opacity-50"></div>
      <img
        className="object-cover min-h-[640px] h-[50vh] w-screen"
        src={Background}
        alt=""
      />
    </section>
  );
};

export default Signup;
