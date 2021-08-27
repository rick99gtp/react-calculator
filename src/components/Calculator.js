import "./Calculator.css";
import "./Display.css";
import Display from "./Display";
import Keypad from "./Keypad";
import { useEffect, useState } from "react";

const Calculator = () => {

  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("0");
  const [curOperand, setCurOperand] = useState("");

  const [memoryNumber, setMemoryNumber] = useState('');

  const changePrevValue = val => setPrevValue(val);
  const changeCurValue = val => setCurValue(val);
  const changeCurOperand = val => setCurOperand(val);
  const changeDisplay = () => setDisplay(curValue);

  const clearHandler = () => {
    setPrevValue("");
    setCurValue("0");
    setCurOperand("");
  };

  const decimalHandler = () => {
    if (display.includes(".")) {
        return;
      }
  
      setCurValue(curValue + ".");
  };

  const numberHandler = (val) => {
    if (display === "0") {
      // replace number
      setPrevValue("0");
      setCurValue(val);
    } else {
      // add to end of curValue
      setCurValue(curValue + val);
    }
  };

  const memoryHandler = (val) => {
    if (val === "MC") {
      setMemoryNumber('');
    } else if (val === "MS") {
      setMemoryNumber(curValue);
    } else if (val === "MR") {
      setCurValue(memoryNumber);
    }
  };

  useEffect(() => {
    changeDisplay();
  },[curValue]);

  useEffect(() => {
    console.log(memoryNumber);
  },[memoryNumber]);

  return (
    <div className="calculator-container">
      <Display display={display} />
      <Keypad
        changePrevValue={changePrevValue}
        changeCurValue={changeCurValue}
        changeCurOperand={changeCurOperand}
        clear={clearHandler}
        decimal={decimalHandler}
        numberHandler={numberHandler}
        memoryHandler={memoryHandler}
        display={display}
      />
    </div>
  );
};

export default Calculator;
