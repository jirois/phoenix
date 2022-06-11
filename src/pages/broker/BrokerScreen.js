import React from "react";
import "./broker.css";

function BrokerScreen(props) {
  return (
    <div className="broker">
      <h2>Our Recommended Broker</h2>
      <p className="paraone">
        Choosing a reliable broker is vital in Forex, There are some qualities
        we always recommend people to look for when choosing a broker. We have
        done our research and that is why we are recommending these brokers.
      </p>
      <div className="broker-img">
        <img src="/img/exness-img.jpeg" alt="broker partner logo" />
      </div>

      <h3> Exness Broker</h3>
      <p>
        This is an amazing option for those that are looking for broker with
        flexibility. This broker accept clients from so many countries all over
        the world but also a very good option if you are in Africa and you are
        struggling to make deposits. A lot of people especially those in Africa
        struggle to deposit with a broker abroad due to restrictions in their
        country. Exness has made it super easy by allowing deposit and
        withdrawals by using cryptocurrencies. These is very easy and fast.
      </p>

      <a href="https://www.exness.asia/a/k5to5aaech" className="broker-btn">
        Sign Up Here
      </a>
    </div>
  );
}

export default BrokerScreen;
