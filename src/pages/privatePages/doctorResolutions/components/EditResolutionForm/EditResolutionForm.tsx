import { editResolution } from "network/fetchOperations";
import React, { useState } from "react";
import { useQuery } from "react-query";

type modalProps = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalFormProps: { id: string; firstName: string; lastName: string };
};

const EditResolutionForm = ({ toggleModal, modalFormProps }: modalProps) => {
  const [value, setValue] = useState("");
  const { firstName, lastName } = modalFormProps;

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    toggleModal(false);
  };

  const fetchEditResolution = () => {
    const requestBody = {
      resolution: value,
      resolutionID: modalFormProps.id,
    };
    editResolution(requestBody).then(() => toggleModal(false));
  };

  const { isLoading, refetch } = useQuery(
    "editResolution",
    fetchEditResolution,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  console.log(isLoading);

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <h4>Edit a Resolution</h4>
        <div>
          <img src="" alt="" />
          <p>{`${firstName} ${lastName}`}</p>
        </div>
        <p>Resolution</p>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={value}
          onChange={onChangeHandler}
        ></textarea>
        <div>
          <button onClick={onClickHandler} type="button">
            <img src="" alt="" />
            Cancel
          </button>
          <button type="submit" disabled={value.length < 4}>
            <img src="" alt="" />
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditResolutionForm;
