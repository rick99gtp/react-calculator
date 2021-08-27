import './Button.css';

const Button = (props) => {

    return (
        <div className='btn' data-attr={props.data_attr} onClick={props.getValue}>
            {props.value}
        </div>
    )
};

export default Button;