import React, { useState } from "react";

type EditResolutionProps = {
  onToggleModal: () => void, modalProps: any;
}

const EditResolution = ({ onToggleModal, modalProps }: EditResolutionProps) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(modalProps.id);
    console.log(modalProps.visitDate);
    console.log(textAreaValue);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value)
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <h3>Edit a Resolution</h3>
        <div>
          <img src="" alt="" />
          <p>{modalProps.name}</p>
        </div>
        <p>Resolution</p>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={textAreaValue}
          onChange={onChangeHandler}
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
