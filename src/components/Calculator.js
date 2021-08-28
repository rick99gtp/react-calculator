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

  const changeDisplay = () =>
    setDisplay(`${prevValue}${curOperand}${curValue}`);

  const clearHandler = () => {
    setPrevValue("");
    setCurValue("0");
    setCurOperand("");
  };

  const decimalHandler = () => {
    if (curValue.includes(".")) {
      return;
    }

    setCurValue(curValue + ".");
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

  const memoryHandler = (val) => {
    if (val === "MC") {
      setMemoryNumber(0);
      setMemoryToggleVisible(false);
    } else if (val === "MS") {
      setMemoryNumber(curValue);
      setMemoryToggleVisible(true);
    } else if (val === "MR") {
      setCurValue(memoryNumber);
    } else if (val === "M+") {
      setMemoryNumber(+memoryNumber + +curValue);
    } else if (val === "M-") {
      setMemoryNumber(+memoryNumber - +curValue);
    }
  };

  const operandHandler = (val) => {
      if(curOperand === "") {
        setCurOperand(val);
      }
      else {
          calculate();
          setCurValue("");
      }
  };

  const equalsHandler = () => {
    calculate();
    setCurValue("");
    setCurOperand("");
  };

  const calculate = () => {
    switch (curOperand) {
      case "+":
        setPrevValue(+prevValue + +curValue);
        break;
      case "-":
        setPrevValue(+prevValue - +curValue);
        break;
      case "*":
        setPrevValue(+prevValue * +curValue);
        break;
      case "/":
        setPrevValue(+prevValue / +curValue);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    calculate();
    if(curOperand !== "") {
        setCurValue("");
    }
  }, [curOperand]);

  useEffect(() => {
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
