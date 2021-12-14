import { CreateResolution } from "network/fetchOperations";
import { errorNotification } from "notifications";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

type CreateResolutionProps = {
  onToggleModal: () => void;
  modalProps: { id: string; visitDate: string; name: string };
};

const CreateResolutionForm = ({
  onToggleModal,
  modalProps,
}: CreateResolutionProps) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const fetchCreateResolution = () => {
    const requestBody = {
      resolution: textAreaValue,
      appointmentID: modalProps.id,
    };
    CreateResolution(requestBody);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const { isLoading, error, refetch } = useQuery("key", fetchCreateResolution, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  // console.log(`isLoadin: `, isLoading);
  useEffect(() => {
    errorNotification();
  }, [error])

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <h4>Create a Resolution</h4>
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
          <button onClick={onToggleModal} type="button">
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

export default CreateResolutionForm;
