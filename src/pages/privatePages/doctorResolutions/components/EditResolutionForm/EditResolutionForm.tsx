import { editResolution } from "network/fetchOperations";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "components/BaseButton/Button";
import * as Styled from "./EditResolutionFormStyles";
import userSvg from "media/user.svg";
import blankSvg from "media/clipboard-blank.svg";
import multiplySvg from "media/multiply.svg";

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
    <Styled.FormWrapper>
      <Styled.Form action="" onSubmit={submitHandler}>
        <Styled.FormTitle>Edit a Resolution</Styled.FormTitle>
        <Styled.NameWrapper>
          <Styled.Image src={userSvg} alt="user icon" />
          <Styled.Name>{`${firstName} ${lastName}`}</Styled.Name>
        </Styled.NameWrapper>
        <Styled.TextAreaWrapper>
          <Styled.Label htmlFor="resolution">Resolution</Styled.Label>
          <Styled.TextArea
            name="resolution"
            id="resolution"
            cols={30}
            rows={10}
            value={value}
            onChange={onChangeHandler}
          ></Styled.TextArea>
        </Styled.TextAreaWrapper>
        <Styled.ButtonWrapper>
          <Button
            onClick={onClickHandler}
            type="button"
            width="117px"
            height="48px"
            altStyle={true}
          >
            <Styled.Image src={multiplySvg} alt="blank svg" /> Cancel
          </Button>
          <Button
            type="submit"
            disabled={value.length < 4}
            width="117px"
            height="48px"
          >
            <Styled.Image src={blankSvg} alt="blank svg" /> Edit
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.FormWrapper>
  );
};

export default EditResolutionForm;
