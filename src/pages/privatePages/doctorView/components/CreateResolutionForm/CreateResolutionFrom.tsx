import { CreateResolution } from "network/fetchOperations";
import React, { useState } from "react";
import { useQuery } from "react-query";
import * as Styled from "./CreateResolutionStyles";
import userSvg from "media/user.svg";
import blankSvg from "media/clipboard-blank.svg";
import multiplySvg from "media/multiply.svg";
import Button from "components/Button";

type CreateResolutionProps = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalProps: { id: string; visitDate: string; name: string };
};

const CreateResolutionForm = ({
  toggleModal,
  modalProps,
}: CreateResolutionProps) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const fetchCreateResolution = () => {
    const requestBody = {
      resolution: textAreaValue,
      appointmentID: modalProps.id,
    };
    CreateResolution(requestBody).then(() => toggleModal(false));
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  const onClickHandler = () => {
    toggleModal(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const { isLoading, refetch } = useQuery(
    "createResolution",
    fetchCreateResolution,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  console.log(`isLoadin: `, isLoading);

  return (
    <Styled.FormWrapper>
      <Styled.Form action="" onSubmit={submitHandler}>
        <Styled.FormTitle>Create a Resolution</Styled.FormTitle>
        <Styled.NameWrapper>
          <Styled.Image src={userSvg} alt="" />
          <Styled.Name>{modalProps.name}</Styled.Name>
        </Styled.NameWrapper>
        <Styled.TextAreaWrapper>
          <Styled.Label htmlFor="resolution">Resolution</Styled.Label>
          <Styled.TextArea
            name="resolution"
            id="resolution"
            cols={30}
            rows={10}
            value={textAreaValue}
            onChange={onChangeHandler}
          ></Styled.TextArea>
        </Styled.TextAreaWrapper>
        <Styled.ButtonWrapper>
          <Button
            type="button"
            width="117px"
            height="48px"
            altStyle={true}
            onClick={onClickHandler}
          >
            <Styled.Image src={multiplySvg} alt="blank svg" /> Cancel
          </Button>
          <Button
            type="submit"
            disabled={textAreaValue.length < 4}
            width="117px"
            height="48px"
          >
            <Styled.Image src={blankSvg} alt="blank svg" /> Create
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.FormWrapper>
  );
};

export default CreateResolutionForm;
