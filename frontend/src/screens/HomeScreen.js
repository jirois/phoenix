import React, { useEffect } from 'react';
import Hero from '../components/carousel/Hero'
import {services, products} from '../screens/../data'
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'


function HomeScreen(props) {
    const {ref, inview} = useInView()
    const animation = useAnimation()


    useEffect(()=> {
        if(inview){
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.3
                }
            })
        }
        if (!inview){
            animation.start({
                x: "-100vw"
            })
        }
        // console.log("use in view inView: ", inview)
    })
    return (
        <div  className="main-bg">
           <Hero />
           <main className="main-bg bg-black min-h-screen lg:flex lg:flex-col lg:bg-scroll "  >
            <div className="flex flex-col px-6 lg:flex-row lg:container lg:justify-center lg:item-space-between lg:order-2 lg:mb-16">
                <a href="/brooker" className="btn gold uppercase mt-12">our recommended Brokers</a>
                <a href="/telegram" className="btn gold uppercase lg:mt-12">Join our free telegram</a>
            </div>
            <section className="services lg:order-1 lg: pt-12">
                <div className="flex lg:mr-16 lg:ml-16  ">
                    <div className="m-8 lg:flex"  ref={ref}>
                        {services.map((service, index) => {
                            const {id, image: images, header, para} = service
                            console.log(header, images)

                            return (
                                <motion.div
                                 key={id} 
                                 className="gray-brown mb-6 px-4 pb-16 pt-1 text-center rounded-3xl text-white lg: w-1/4 lg:mx-auto lg:px-2 lg:mr-2 lg:ml-16 lg:pt-4"
                                 
                                 >
                                    <div className="w-20 h-20 mx-auto mt-2 lg:w-44 lg:h-44 lg:mt-6">
                                    <img className="w-full h-full object-cover" src={images}  alt="services"/>
                                    </div>
                                    <h1 className="font-bold my-8 text-xl lg:text-xxl">{header}</h1>
                                    <p className="text-xs tracking-wide">{para}</p>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </section>
            <section className="products -mt-8 lg:py-8 lg:order-3">
                <div className="flex">
                    <div className="lg:flex">
                        {products.map((product, index) => {
                            const {id, image, header, para} = product

                            return (
                                <div key={id} className="bg-white mt-4 text-black text-center lg: w-1/4 lg:mx-auto lg:px-2 lg:mr-4 lg:ml-16">
                                    <div className="w-72 h-60 mx-auto mt-4 pt-4">
                                        <img className="w-full h-full object-cover" src={image} alt="products" />
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