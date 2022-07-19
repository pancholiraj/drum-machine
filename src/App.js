import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Buttons from "./components/Buttons";
import Controls from "./components/Controls";
function App() {
  const [id, setId] = useState();
  const [isOn, setIsOn] = useState(true);
  const [bank1, setBank1] = useState(true);
  const [value, changeValue] = useState(10);

  return (
    <>
      <Wrapper>
        <DrumBox>
          <Buttons
            id={id}
            setId={setId}
            isOn={isOn}
            bank1={bank1}
            value={value}
          />
          <Controls
            id={id}
            setId={setId}
            isOn={isOn}
            setIsOn={setIsOn}
            setBank1={setBank1}
            bank1={bank1}
            changeValue={changeValue}
          />
        </DrumBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #8d8d8d;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DrumBox = styled.div`
  width: 35%;
  height: 35%;
  background-color: #b3b3b3;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default App;
