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
    { text: "=", buttonType: "calc" },
    { text: "1", buttonType: "number" },
    { text: "2", buttonType: "number" },
    { text: "3", buttonType: "number" },
    { text: "-", buttonType: "operand" },
    { text: "0", buttonType: "number" },
    { text: ".", buttonType: "decimal" },
    { text: "+", buttonType: "operand" },
  ];

  const buttonHandler = (e) => {
      console.log(e.target.innerText);
    switch (e.target.dataset.attr) {
      case "number":
        numberHandler(e.target.innerText);
        break;
      default:
        break;
    }
  };

  const numberHandler = (val) => {
      console.log(props.display);
    if (props.display === "0") {
        console.log('zero');
      // replace number
      props.changePrevValue(val);
    } else {
      // add to end of display value
      props.changePrevValue(props.display + val);
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
