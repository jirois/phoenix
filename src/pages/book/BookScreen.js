import React from "react";
import { Link } from "react-router-dom";
import { booksession } from "../../data";
import "./book.css";

function BookScreen(props) {
  return (
    <div className="book">
      <div className="book-nav">
        <span>Passion</span>
        <span>Patience</span>
        <span>Persistence</span>
        <span>Profit</span>
      </div>
      <p className="first-para">
        Our coordinated one-on-one sessions are the ideal platform for you to
        feature distinguish and correct all the issues you might be encountering
        your individual trading profession and put you on the way to
        profitability.
      </p>
      <p>
        The sessions are custom-made for each trader as we comprehend that one
        methodology doesn't exactly measure up for all. So we recognize your
        strengths and weakness to track down the most appropriate way to ensure
        your experience with us is just about as proficient and powerful as
        could be expected
      </p>
      <div className="book-wrapper">
        {booksession.map((book) => {
          return (
            <div key={book.id} className="book-card">
              <img src={book.img} alt="book" />
              <h1>{book.title}</h1>
              <span>{book.hour}</span>
              <span>{book.price}</span>
              <Link to="book">
                <button className="book-btn">Book Now </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookScreen;
