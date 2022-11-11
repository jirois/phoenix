import React, { useEffect } from "react";
import "./book.css";
import useLocalState from "../../hooks/localState";
import axios from "axios";
import { baseUrl } from "../../utils/url";
import { useGlobalContext } from "../../context";
import { ButtonLinK } from "../../components/ButtonElement";

function BookScreen() {
  const { loading, setLoading } = useLocalState();
  const { user, sessions, setSessions } = useGlobalContext();
  const fetchSessions = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(baseUrl + "session");
      setSessions(data.sessions);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSessions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    <div className="flex flex-wrap text-xl font-semibold"> Loading...</div>;
  }
  if (sessions.length === 0) {
    <p>There are no booking available, please Admin will soon add bookings</p>;
  }

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
        {sessions.map((book) => {
          return (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h1>{book.title}</h1>
              <span>{book.hours} hr</span>
              <span> ${book.price}</span>

              <ButtonLinK
                primary
                to={user ? `/sessions/${book._id}` : "/signin"}
              >
                Book Now
              </ButtonLinK>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookScreen;
