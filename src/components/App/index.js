import React, { useState } from "react";
import upDown from "../../assets/up-down.svg";
import {
  Container,
  Title,
  SecondaryButton,
  Subtitle,
  Button,
  Input,
  InpuText,
  Selector,
} from "../../styles";
import Calendar from "../Calendar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = () => {
    setModalOpen(false);
    setSelectedDate("");
  };

  return (
    <Container>
      <div>
        <Title>Have you sold subject to contract?</Title>
        <Subtitle>
          Enter your exchange date to unlock the tools you need for the next
          stage of your sale.
        </Subtitle>
      </div>
      <Selector>
        <Input>
          <InpuText selected={selectedDate}>
            {selectedDate ? selectedDate : "Please select"}
          </InpuText>
          <SecondaryButton onClick={handleModal}>
            <img src={upDown} alt="up-down" />
          </SecondaryButton>
          <Calendar
            onSelect={setSelectedDate}
            open={modalOpen}
            selected={selectedDate}
          />
        </Input>
        <Button onClick={handleSubmit}>Submit</Button>
      </Selector>
    </Container>
  );
}

export default App;
