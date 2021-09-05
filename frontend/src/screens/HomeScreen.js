import React from 'react';
import Hero from '../components/carousel/Hero'
import {services, products} from '../screens/../data'

function HomeScreen(props) {
    return (
        <div>
           <Hero />
           <main className="bg-black min-h-screen">
            <div className="flex flex-col px-6">
                <a href="/brooker" className="btn gold uppercase mt-12">our recommended Brokers</a>
                <a href="/telegram" className="btn gold uppercase">Join our free telegram</a>
            </div>
            <section className="services">
                <div className="flex">
                    <div className="m-8">
                        {services.map((service, index) => {
                            const {id, image: images, header, para} = service
                            console.log(header, images)

                            return (
                                <div key={id} className="gray-brown mb-6 px-4 pb-16 pt-1 text-center rounded-3xl text-white">
                                    <div className="w-20 h-20 mx-auto mt-2">
                                    <img className="w-full h-full object-cover" src={images}  alt="services"/>
                                    </div>
                                    <h1 className="font-bold my-8 text-xl">{header}</h1>
                                    <p className="text-xs tracking-wide">{para}</p>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
            <section className="products -mt-8">
                <div className="flex">
                    <div className="">
                        {products.map((product, index) => {
                            const {id, image, header, para} = product

                            return (
                                <div key={id} className="bg-white mt-4 text-black text-center">
                                    <div className="w-72 h-60 mx-auto mt-4 pt-4">
                                        <img className="w-full h-full object-cover " src={image} alt="products" />
                                    </div>
                                    <div className="p-8">
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