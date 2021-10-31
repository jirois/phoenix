import React, { useState } from 'react';
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/ia'



function Question({title, info}) {

    const {showInfo, setShowInfo} = useState(false)
    return (
        <article className='question'>
         <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <MdOutlineKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
    );
}

export default Question;