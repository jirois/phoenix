import React from 'react';
import { services, products } from '../../data';
import Hero from '../../components/carousel/Hero';
import './home.css';


function HomeScreen(props) {
    return (
        <div className="home">
             <Hero />
            <main className="main-bg" >
            <div className="home-btn-container">
                <a href="/brooker" className="btn btn-lg">our recommended Brokers</a>
                <a href="/telegram" className="btn btn-lg">Join our free telegram</a>
            </div>
            <section className="services">
                <div className="service-container">
                    <div className="service-content">
                        {services.map((service, index) => {
                            const {id, image: images, header, para} = service
                            console.log(header, images)

                            return (
                                <div
                                 key={id} 
                                 className="service-content-inner"
                          
                                 >
                                    <div className="service-image">
                                    <img src={images}  alt="services"/>
                                    </div>
                                    <h1>{header}</h1>
                                    <p>{para}</p>


                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
            <section className="products -mt-8 lg:py-8 lg:order-3">
                <div className="product-container">
                    <div className="product-content">
                        {products.map((product, index) => {
                            const {id, image, header, para} = product

                            return (
                                <div key={id} className="product-content__inner mt-4 text-black text-center lg: w-1/4 lg:mx-auto lg:px-2 lg:mr-4 lg:ml-16">
                                    <div className="product-image w-72 h-60 mx-auto mt-4 pt-4">
                                        <img className="w-full h-full object-cover" src={image} alt="products" />
                                    </div>
                                    <div className="product-body-content">
                                        <h2 className="header-color font-bold text-xl mb-2 -mt-4 ">{header}</h2>
                                        <p className="text-gray-700 border-b border-gray-300 mb-6">{para}</p>
                                        <a className="btn w-32 mx-auto gold-sm px-8" href="/get">Get Now</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
            </main>
        </div>
    );
}

export default HomeScreen;