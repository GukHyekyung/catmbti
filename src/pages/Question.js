import { Button, ProgressBar } from "react-bootstrap";

import { QuestionDate } from "../assets/date/questiondate";
import React from "react";
import styled from "styled-components";

const Question = () => {
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={80}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionDate[0].title}</Title>
      <ButtonGroup>
        <Button style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>
          {QuestionDate[0].answera}
        </Button>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginLeft: "20px",
          }}
        >
          {QuestionDate[0].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "EF_Diary(윈도우용TTF)";
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "EF_Diary(윈도우용TTF)";s
`;
