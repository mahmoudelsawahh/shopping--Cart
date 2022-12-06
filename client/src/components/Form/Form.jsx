import React from "react";
import { useState } from "react";
import "../../css/Form/Form.css";
const Form = ({ handelForm }) => {
  const [val, setVal] = useState(false);
  const handelChange = (e) => {
    return setVal((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };
  return (
    <div className="form-control">
      <span className="close" onClick={() => handelForm(false)}>
        &times;
      </span>
      <form onSubmit={handelSubmit}>
        <div>
          <label>Name</label>
          <input type={"text"} name="name" required onChange={handelChange} />
        </div>
        <div>
          <label>E-Mail</label>
          <input type={"text"} name="email" required onChange={handelChange} />
        </div>
        <div>
          <input className="handelSubmit" type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
