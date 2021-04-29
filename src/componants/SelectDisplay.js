import { useState } from "react";
import WeaponSort from "../constants/WeaponSort";
import styled from "styled-components";
import Select from "./Select";
import SelectAnimation from "./SelectAnimation";

const FirstMain = styled.main`
  display: flex;
  justify-content: center;
`
const FirstDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  background-color: ${props => {
    if(props.selectedValue === "") return "red";
    else return "white";
  }}
`;

function SelectDisplay() {
  const [selectObjectValue, setSelectObjectValue] = useState("");

  const handleChangeObjectValue = ({ target: { value } }) => {
    setSelectObjectValue(value);
  };

  return (
    <>
      <FirstMain>
        <FirstDiv selected={ selectObjectValue } selectedValue={ selectObjectValue }>
          <Select onChange={handleChangeObjectValue} options={WeaponSort}/>
          <SelectAnimation value={ selectObjectValue }/>
        </FirstDiv>  
      </FirstMain>
      <p>Object : {selectObjectValue}</p>
    </>
  );
}

export default SelectDisplay;
