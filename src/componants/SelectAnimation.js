import { useState } from "react";
import styled, { keyframes } from "styled-components";
import TempList1 from "../constants/TempList1";
import TempList2 from "../constants/TempList2";
import Select from "./Select";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeInDelay = keyframes`
  0% { opacity:0; }
  40% { opacity:0; }
  100% { opacity:1; }
`
const TempList1Div = styled.div`
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`

const TempList2Div = styled.div`
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeInDelay};
  animation-fill-mode: forwards;
`

function SelectAnimation({ value }) {

  const [selectTempValue, setSelectTempValue] = useState("");

  const handleChangeTempValue = ({ target: { value } }) => {
    setSelectTempValue(value);
  };

  console.log(selectTempValue);
  if( value ) {
    return(
      <>
        <TempList1Div><Select onChange={handleChangeTempValue} options={TempList1} /></TempList1Div>
        <TempList2Div><Select onChange={handleChangeTempValue} options={TempList2} /></TempList2Div>
      </>
    )
  } else {
    return(
      <></>
    )
  }
}

export default SelectAnimation;