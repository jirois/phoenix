import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./service.css";
import useLocalState from "../../hooks/localState";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { baseUrl } from "../../utils/url";

function ServiceScreen() {
  const { loading, setLoading } = useLocalState();
  const { services, setServices } = useGlobalContext();
  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(baseUrl + "service");
      setServices(data.services);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="service">
      <h2>Choose Your Pricing Plan</h2>
      <div className="service-cards">
        {services.map((service) => {
          if (loading) {
            return (
              <div className="flex flex-wrap font-bold text-2xl">
                Loading...
              </div>
            );
          }
          return (
            <>
              {/* <div className="fullcourse">
                <div className="service-card">
                  <div className="percent-div">
                    <span className="percent">60% OFF</span>
                  </div>

                  <span className="service-title">{service[0].title}</span>

                  <div className="service-price">
                    <span>$</span>
                    <span className="price">{service[0].price}</span>
                  </div>
                  <span className="duration"></span>
                  <span className="description">{service[0].description}</span>

                  <Link to={user ? "/checkout" : "/signin"}>
                    <button className="service-btn">Purchase Now</button>
                  </Link>
                </div>
              </div> */}
              <Link to={`/services/${service._id}`}>
                <div key={service._id} className="service-card">
                  <span className="service-title">{service.title}</span>
                  <div className="service-price">
                    <span>$</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <span className="duration">{service.duration}</span>
                  <span className="description">{service.description}</span>

                  <Link to={`/services/${service._id}`} className="service-btn">
                    Purchase Now
                  </Link>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceScreen;
