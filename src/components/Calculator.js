import "./Calculator.css";
import "./Display.css";
import Display from "./Display";
import Keypad from "./Keypad";
import { useEffect, useState } from "react";

const Calculator = () => {

  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState("0");
  const [curValue, setCurValue] = useState("");
  const [curOperand, setCurOperand] = useState("");

  const [memoryNumber, setMemoryNumber] = useState('');

  const changePrevValue = val => setPrevValue(val);
  const changeCurValue = val => setCurValue(val);
  const changeCurOperand = val => setCurOperand(val);
  const changeDisplay = () => setDisplay(`${prevValue}${curOperand}${curValue}`);
  const clearMemoryNumber = () => setMemoryNumber('');
  const saveMemoryNumber = val => setMemoryNumber(val);

  useEffect(() => {
    changeDisplay();
    console.log('changed');
  },[prevValue, curValue, curOperand]);

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
        display={display}
        clearMemoryNumber={clearMemoryNumber}
        saveMemoryNumber={saveMemoryNumber}
        memoryNumber={memoryNumber}
      />
    </div>
  );
};

export default Calculator;
