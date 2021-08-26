import './Calculator.css';
import './Display.css';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
    return (
        <div className='calculator-container'>
            <Display />
            <Keypad />
        </div>
    )
};

export default Calculator;