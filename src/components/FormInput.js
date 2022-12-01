import React from "react";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="flex flex-col pt-5">
      <label className="text-white">{label}</label>
      <input className="p-2 rounded w-96" {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
