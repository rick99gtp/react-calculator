import './Button.css';

const Button = (props) => {
    return (
        <div className='btn'>
            {props.value}
        </div>
    )
};

export default Button;