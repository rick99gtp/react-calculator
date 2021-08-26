import './Button.css';

const Button = (props) => {
    return (
        <div className='btn' name={props.value}>
            {props.value}
        </div>
    )
};

export default Button;