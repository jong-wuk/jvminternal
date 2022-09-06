import {useContext} from "react";
import {CalcContext} from "../context/CalcContext";

const getStyleName = btn => {

    const className = {
        '=': 'equals',
        '*': 'opt',
        '-': 'opt',
        '+': 'plus',
        '/': 'opt',
    }
    return className[btn];
}


const Button = ({value}) => {
    const {calc, setCalc} = useContext(CalcContext);

    const clearClick = () => {
        setCalc({sign: '', num: 0, res: 0})
        console.log("reset!")
    }

    const handleClickButton = () => {
        const numberString = value.toString();
        let numberValue;

        if (numberString === '0' && calc.num === 0) {
            numberValue = "0";
        } else {
            numberValue = Number(calc.num + numberString);
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }


    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (res, num, sign) => {
                const result = {
                    "+": (res, num) => res + num,
                    "-": (res, num) => res - num,
                    "*": (res, num) => res * num,
                    "/": (res, num) => res / num,
                }
                return result[sign](res, num);
            }

        setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
        }
    }

    const handleBtnClick = () => {
        const results = {
            "CLEAR": clearClick,
            "/": signClick,
            "+": signClick,
            "*": signClick,
            "-": signClick,
            "=": equalsClick,
        }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton();
        }
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button;