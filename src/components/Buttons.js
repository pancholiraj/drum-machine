import React from "react";
import styled from "styled-components";
import dataJson from "../data/Bank1.json";
import data2Json from "../data/Bank2.json";

const Buttons = ({ setId, isOn, bank1, value }) => {
  let data = bank1 ? dataJson : data2Json;

  window.addEventListener("keydown", (e) => {
    if (isOn) {
      let keyPress = e.keyCode;
      let details = data.filter((item) => {
        return item.keyCode === keyPress;
      });
      setId(details[0].id);
      const audio = new Audio(details[0].url);
      audio.volume = value / 100;
      audio.play();
      audio.currentTime = 0;
      e.stopImmediatePropagation();
    }
  });

  const onButtonCLick = (e) => {
    if (isOn) {
      let details = data.filter((item) => {
        return item.keyTrigger === e.target.innerText;
      });
      e.target.style.backgroundColor = "yellow";
      const audio = new Audio(details[0].url);
      audio.volume = value / 100;
      audio.play();
      audio.currentTime = 0;
      setId(details[0].id);
      setTimeout(() => {
        e.target.style.backgroundColor = "#808080";
      }, 200);
    }
  };

  return (
    <PadButtonBox>
      <PadFlex>
        {data.map(({ id, keyTrigger, url, keyCode }) => {
          return (
            <PadButton onClick={onButtonCLick} key={id}>
              {keyTrigger}
            </PadButton>
          );
        })}
      </PadFlex>
    </PadButtonBox>
  );
};

const PadButtonBox = styled.div`
  width: 70%;
`;

const PadFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  width: 100%;
`;

const PadButton = styled.div`
  flex: 0 0 10%;
  text-align: center;
  font-size: 30px;
  background-color: #808080;
  padding: 10px 20px;
  margin: 10px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 5px;
  box-shadow: 4px 4px 5px black;
`;

export default Buttons;
