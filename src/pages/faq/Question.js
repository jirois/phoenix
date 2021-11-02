import React, { useState } from 'react';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import './faq.css'


function Question({title, info}) {
    console.log(title)

    const {showInfo, setShowInfo} = useState(false)
    return (
        <article className='question'>
          <h1>Welcome</h1>
         <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
    );
}

export default Question;