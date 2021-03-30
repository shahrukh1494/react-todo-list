const Button = ({ text, color, click }) => {
    return (
        <button className='btn' 
        onClick={ click }
        style={{ backgroundColor: color }}>{text}</button>
    );
}

export default Button;