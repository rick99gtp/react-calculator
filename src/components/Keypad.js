import "./Keypad.css";
import Button from "./Button";

const Keypad = (props) => {
  const buttonArray = [
    { text: "MC", buttonType: "memory" },
    { text: "MR", buttonType: "memory" },
    { text: "MS", buttonType: "memory" },
    { text: "M+", buttonType: "memory" },
    { text: "M-", buttonType: "memory" },
    { text: "7", buttonType: "number" },
    { text: "8", buttonType: "number" },
    { text: "9", buttonType: "number" },
    { text: "/", buttonType: "operand" },
    { text: "C", buttonType: "clear" },
    { text: "4", buttonType: "number" },
    { text: "5", buttonType: "number" },
    { text: "6", buttonType: "number" },
    { text: "*", buttonType: "operand" },
    { text: "=", buttonType: "equals" },
    { text: "1", buttonType: "number" },
    { text: "2", buttonType: "number" },
    { text: "3", buttonType: "number" },
    { text: "-", buttonType: "operand" },
    { text: "0", buttonType: "number" },
    { text: ".", buttonType: "decimal" },
    { text: "+", buttonType: "operand" },
  ];

  const buttonHandler = (e) => {
    switch (e.target.dataset.attr) {
      case "decimal":
        props.decimal();
        break;
      case "clear":
        props.clear();
        break;
      case "memory":
        props.memoryHandler(e.target.innerText);
        break;
      case "operand":
        props.operandHandler(e.target.innerText);
        break;
      case "equals":
        props.equalsHandler(e.target.innerText);
        break;
      default:
        props.numberHandler(e.target.innerText);
        break;
    }
  };

  const buttons = buttonArray.map((btn) => (
    <Button
      data_attr={btn.buttonType}
      key={btn.text}
      value={btn.text}
      getValue={buttonHandler}
    />
  ));

  return <div className="keypad">{buttons}</div>;
};

export default Keypad;
