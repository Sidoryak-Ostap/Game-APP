

import React, { useEffect, useState } from "react";
import "./style.css";

import { NavLink } from "react-router-dom";

function GamingPage(props)
{

    const [count, SetCount] = useState(0);
    const [firstNum, SetFirstNum] = useState(0);
    const [secondNum, SetSecondNum] = useState(0);
    const [operand, SetOperand] = useState('-');

    const [firstAnswer, SetFirstAnswer] = useState(0);
    const [secondAnswer, SetSecondAnswer] = useState(0);
    const [rightAnswer, SetRightAnswer] = useState();
    const [looseWindow, SetlooseWindow]= useState(false);

    const mas=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    useEffect(()=>{
        
    
        const index_1 = Math.floor(Math.random() * mas.length);
        const firstNumber = mas[index_1];
        SetFirstNum(firstNumber);
    
        const index_2 = Math.floor(Math.random() * mas.length);
        const secondNumber = mas[index_2];
        SetSecondNum(secondNumber);

        const index_3 = Math.floor(Math.random()* props.operands.length);
        const operand = props.operands[index_3];
        console.log(operand);
        SetOperand(operand);

        const right_answer = Math.floor(operand == '+' ? firstNumber + secondNumber: operand=='-' ? firstNumber - secondNumber
        : operand=='x' ? firstNumber*secondNumber : firstNumber/ secondNumber);
        SetRightAnswer(right_answer);

        Seperate_Answers(right_answer);
        
        
    
    },[count])

    

    const Seperate_Answers = (true_answer) =>{
        const random_num = Math.floor(Math.random() * 2);
        
        if(random_num == 0)
        {
            SetFirstAnswer(true_answer);
            SetSecondAnswer(Math.floor(Math.random()*10)+5);
            return;
        }
        else{
            SetFirstAnswer(Math.floor(Math.random()*10)+5);
            SetSecondAnswer(true_answer);
        }
    }

    const [lineState, SetLineState] = useState(true);

    const RestartLine = () =>{
        SetLineState(false);

        setInterval(() => {
            SetLineState(true);
        },100)
        
    }

    const CheckAnswer = (el) =>{
        if(el.target.innerText == rightAnswer)
        {
            SetCount(count => count+1);
            RestartLine();
        }
        else{
            SetlooseWindow(true);
        }
    }



    return(
    <div className="gaming_page">

        <div className="game_time_line">
            <div className={lineState ? "game_timeline_overline reducing_timeline" :'game_timeline_overline'}></div>
        </div>

        <div className="gaming_holder">
            <div className="gaming_block">{firstNum}</div>
            <div className="gaming_block">{operand}</div>
            <div className="gaming_block">{secondNum}</div>
        </div>

        <div className="answers_holder">
            <div onClick={CheckAnswer} className="answer_block">{firstAnswer}</div>
            <div onClick={CheckAnswer} className="answer_block">{secondAnswer}</div>
        </div>

        <div className="gaming_counter">{count}</div>

        <NavLink to='/' className="gaming_restart_button">Restart</NavLink>

        <div className={looseWindow ? 'loose_window showed': 'loose_window'}>
            You loose 
            <div className="record">Your record is {count}</div>
        </div>
    </div>
    );
}


export default GamingPage;