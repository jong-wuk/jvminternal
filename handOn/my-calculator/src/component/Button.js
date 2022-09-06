function getStyleName(btn) {

    const className = {
        '=':'equals',
        '*':'opt',
        '-':'opt',
        '+':'plus',
        '/':'opt',
    }
    return className[btn];
}


const Button = ({value}) =>{
    function handleBtnClick() {
        const results = {

        }
    }
    return(
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button;