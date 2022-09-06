import React from 'react';
import './style.css';
import Wrapper from "./component/Wrapper";
import Screen from "./component/Screen";
import ButtonBox from "./component/ButtonBox";
import Button from "./component/Button";
import CalcProvider from "./context/CalcContext";
const btnValues=[
    ["CLEAR","/","*","-"],
    ["1","2","3","+"],
    ["4","5","6"],
    ["7","8","9"],
    ["0","="],
];

function App() {
    return (
        <CalcProvider>
            <Wrapper>
                <Screen/>
                <ButtonBox>
                    {btnValues.flat().map((btn,index)=>(
                        <Button
                            value={btn}
                            key={index}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    );
}

export default App;