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
  const [memoryToggleVisible, setMemoryToggleVisible] = useState(false);
  const [memoryNumber, setMemoryNumber] = useState("0");

  const changePrevValue = (val) => setPrevValue(val);
  const changeCurValue = (val) => setCurValue(val);
  const changeCurOperand = (val) => setCurOperand(val);
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
      setMemoryNumber(0);
      setMemoryToggleVisible(false);
    } else if (val === "MS") {
      setMemoryNumber(curValue);
      setMemoryToggleVisible(true);
    } else if (val === "MR") {
      setCurValue(memoryNumber);
    }
    else if(val === "M+") {
        setMemoryNumber(+memoryNumber + +curValue);
    }
    else if(val === "M-") {
        setMemoryNumber(+memoryNumber - +curValue);
    }
  };

  useEffect(() => {
    changeDisplay();
  }, [curValue]);

  return (
    <div className="calculator-container">
      <Display memoryToggle={memoryToggleVisible} display={display} />
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
