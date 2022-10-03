import React, { useState } from "react";
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
  //Add states here
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your TASK and DATE or CLOSE the form",
      });
    } else if (!text && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your TASK",
      });
    } else if (text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your DATE",
      });
    } else {
      onSave({ text, day });
    }
    setText("");
    setDay("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <input type="submit" className="btn btn-block" value="SAVE TASK"></input>
    </form>
  );
};

export default AddTask;
