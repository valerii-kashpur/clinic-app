import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EditResolution = ({ onToggleModal, modalProps }) => {
  const dispatch = useDispatch();
  const [textAreaValue, setTextAreaValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(modalProps.id);
    console.log(modalProps.visitDate);
    console.log(textAreaValue);
  };
  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <h3>Edit a Resolution</h3>
        <div>
          <img src="" alt="" />
          <p>{modalProps.name}</p>
        </div>
        <p>Resolution</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        ></textarea>
        <div>
          <button onClick={onToggleModal}>
            <img src="" alt="" />
            Cancel
          </button>
          <button type="submit">
            <img src="" alt="" />
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditResolution;
