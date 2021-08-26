import "./Calculator.css";
import "./Display.css";
import Display from "./Display";
import Keypad from "./Keypad";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("");
  const [curOperand, setCurOperand] = useState("");

  const changePrevValue = val => setPrevValue(val);
  const changeCurValue = val => setCurValue(val);
  const changeCurOperand = val => setCurOperand(val);
  const changeDisplay = () => setDisplay(`${prevValue} ${curOperand} ${curValue}`);

  return (
    <div className="calculator-container">
      <Display display={display} />
      <Keypad
        changePrevValue={changePrevValue}
        changeCurValue={changeCurValue}
        changeCurOperand={changeCurOperand}
        changeDisplay={changeDisplay}
      />
    </div>
  );
};

export default Calculator;
