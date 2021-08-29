import "./Calculator.css";
import "./Display.css";
import Display from "./Display";
import Keypad from "./Keypad";
import { useEffect, useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("0");
  const [curOperand, setCurOperand] = useState("");
  const [memoryToggleVisible, setMemoryToggleVisible] = useState(false);
  const [memoryNumber, setMemoryNumber] = useState("0");

  const changeDisplay = () =>
    setDisplay(`${prevValue}${curOperand}${curValue}`);

  const clearHandler = () => {
    setPrevValue("");
    setCurValue("0");
    setCurOperand("");
  };

  const decimalHandler = () => {
    // if the current value does not include a decimal
    if (!curValue.includes(".")) setCurValue(curValue + ".");
  };

  const numberHandler = (val) => {
    if (curValue === "0") {
      // replace number
      setCurValue(val);
    } else {
      // add to end of curValue
      setCurValue(curValue + val);
    }
  };

  const clearMemory = () => {
    setMemoryNumber("0");
    setMemoryToggleVisible(false);
  }

  const saveToMemory = () => {
    setMemoryNumber(curValue);
    setMemoryToggleVisible(true);
  };

  const memoryHandler = (val) => {
    if (val === "MC") {
      clearMemory();
    } else if (val === "MS") {
      saveToMemory();
    } else if (val === "MR") {
      setCurValue(memoryNumber);
    } else if (val === "M+") {
      setMemoryNumber(+memoryNumber + +curValue);
    } else if (val === "M-") {
      setMemoryNumber(+memoryNumber - +curValue);
    }
  };

  const operandHandler = (val) => {
    if(prevValue && curOperand && curValue) {
      setPrevValue(calculate());
      setCurValue("");
      setCurOperand(val);
    }
    else if (curOperand !== val) {
      setCurOperand(val);
    }
  };

  const equalsHandler = () => {
    if (curOperand !== "" && curValue !== "") {
      setCurValue(calculate());
      setPrevValue("");
      setCurOperand("");
    }
  };

  const calculate = () => {
    const firstNum = +prevValue;
    const secondNum = +curValue;

    if (curOperand === "+") return firstNum + secondNum;
    if (curOperand === "-") return firstNum - secondNum;
    if (curOperand === "*") return firstNum * secondNum;
    if (curOperand === "/") return firstNum / secondNum;
  };

  useEffect(() => {
    if(curOperand) {
      if(curValue) {
        setPrevValue(curValue);
        setCurValue("");
      }
    }
  }, [curOperand]);

  useEffect(() => {
    // any time these three values change, update what is displayed
    changeDisplay();
  }, [curValue, prevValue, curOperand]);

  return (
    <div className="calculator-container">
      <Display memoryToggle={memoryToggleVisible} display={display} />
      <Keypad
        clear={clearHandler}
        decimal={decimalHandler}
        numberHandler={numberHandler}
        memoryHandler={memoryHandler}
        operandHandler={operandHandler}
        display={display}
        equalsHandler={equalsHandler}
      />
    </div>
  );
};

export default Calculator;
