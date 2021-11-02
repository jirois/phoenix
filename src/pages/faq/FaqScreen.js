import React from 'react';
import { questions } from '../../data';
import SingleQuestion from './Question'
import "./faq.css"

function FaqScreen(props) {
    return (
        <div className="faq">
            <div className="faq-container">
                <div className="faq-header-container">
                    <h2>Frequently asked questions</h2>

                    {/* <div className="faq-search">
                        <input type="text" />
                    </div> */}
                </div>

              <div className="faq-accordion-container">
                {questions.map((question) =>{
                    console.log(question)
                    return (
                        <SingleQuestion key={question.id} {...question} />
                    )
                })}

            </div>
            </div>
            
        </div>
    );
}

export default FaqScreen;