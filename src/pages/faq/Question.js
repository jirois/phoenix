import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import "./faq.css";

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  const toggleContent = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleContent}>
          {showInfo ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </button>
        {/* <button className="btn">button</button> */}
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Question;
