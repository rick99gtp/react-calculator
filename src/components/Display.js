import './Display.css';

const Display = (props) => {
    return (
        <div className='display'>
            {props.memoryToggle ? <div className='memory-stored'>M</div> : null}
            {props.display}
        </div>
    )
};

export default Display;