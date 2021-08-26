import './Keypad.css';
import Button from './Button';

const Keypad = () => {
    const buttonArray = [
        "MC", "MR", "MS", "M+", "M-",
        "7", "8", "9", "/", "C", "4",
        "5", "6", "*", "=", "1", "2",
        "3", "-", "0", ".", "+"
    ];

    const buttons = buttonArray.map(btn =>
        <Button value={btn} />
    );

    return (
        <div className='keypad'>
            {buttons}
        </div>
    )
}; 

export default Keypad;