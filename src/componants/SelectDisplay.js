import { useState } from "react";
import WeaponSort from "../constants/WeaponSort";
import Select from "./Select";

function SelectDisplay() {
  const [selectObjectValue, setselectObjectValue] = useState("");

  const handleChangeObjectValue = ({ target: { value } }) => {
    setselectObjectValue(value);
  };

  return (
    <>
      <Select onChange={handleChangeObjectValue} options={WeaponSort} />
      <p>Object : {selectObjectValue}</p>
    </>
  );
}

export default SelectDisplay;
