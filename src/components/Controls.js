import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import styled from "styled-components";

const Controls = ({
  id,
  setId,
  isOn,
  setIsOn,
  setBank1,
  bank1,
  changeValue,
}) => {
  return (
    <ControlsBox>
      <Power>
        <ControlH1>Power</ControlH1>
        <div onClick={() => setIsOn(!isOn)}>
          {isOn ? <BsToggleOn /> : <BsToggleOff />}
        </div>
      </Power>
      <DisplayId>{isOn ? id : " "}</DisplayId>
      <input type="range" onChange={(e) => changeValue(e.target.value)} />
      <Bank>
        <ControlH1>Bank</ControlH1>
        <div onClick={() => setBank1(!bank1)}>
          {bank1 ? <BsToggleOn /> : <BsToggleOff />}
        </div>
      </Bank>
    </ControlsBox>
  );
};

const ControlsBox = styled.div`
  width: 48%;
  text-align: center;
`;
const Power = styled.div`
  font-size: 25px;
`;
const ControlH1 = styled.h1`
  font-size: 18px;
  margin: 0;
`;

const DisplayId = styled.div`
  background-color: #808080;
  padding: 15px 0;
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Bank = styled.div`
  margin-top: 10px;
  font-size: 25px;
`;

export default Controls;
