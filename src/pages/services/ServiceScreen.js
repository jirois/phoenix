import React from 'react';
import { Link } from 'react-router-dom';
import { servicesSession } from '../../data';
import "./service.css"

function ServiceScreen(props) {
    return (
        <div className="service">
            <h2>Choose Your Pricing Plan</h2>
            <div className="service-cards">
                {
                    servicesSession.map((service) => {
                        return(
                        <div key={service.id} className="service-card">
                            <span className="service-title">{service.title}</span>
                            <div className="service-price">
                                <span>$</span>
                                <span className="price">{service.price}</span>
                            </div>
                            <span className="duration">{service.duration}</span>
                            <span className="description">{service.description}</span>

                            <Link to="/">
                                <button className="service-btn">Purchase Now</button>
                            </Link>

                        </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default ServiceScreen;