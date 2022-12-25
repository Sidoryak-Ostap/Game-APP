

import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function StartPage(props)
{   
    const [buttonState, SetButtonState] = useState(false);
    const [operands, SetOperand]= useState([]);

    useEffect(()=>{
        props.GetData(operands);
    },[operands])


    useEffect(()=>{
        if(operands.length===0)
        {
         SetButtonState(false);
        }
        else{
         SetButtonState(true);
        }
 
 
     },[operands]);

    const add_to_Array = (el) =>{
        
        if(operands.includes(el.target.innerText))
        {

            let index = operands.indexOf(el.target.innerText);
            operands.splice(index,1);
            el.target.style.background = 'transparent';
            return;
        }

        else{
            let new_operand = el.target.innerText;
            SetOperand([...operands, new_operand]);

            el.target.style.background = '#1976d2';
            return;
        }
         
    }



    
    

    return(
        <div className ='start_page'>

            <div className='start_page_holder'>
                <div onClick={add_to_Array} className='start_page_operand'>+</div>
                <div onClick={add_to_Array} className='start_page_operand'>-</div>
                <div onClick={add_to_Array} className='start_page_operand'>x</div>
                <div onClick={add_to_Array} className='start_page_operand'>/</div>
            </div>

            <NavLink to='/game' className={buttonState ? 'start_page_button active' : 'start_page_button'}>Start Game</NavLink>
        </div>
    );
}

export default StartPage;