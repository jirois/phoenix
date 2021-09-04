import React from 'react';

function Hero(props) {
    return (
        <div classNameName="bg-no-repeat bg-cover bg-center relative" styles="background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80);">
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                <div className="self-start lg:flex flex-col  text-white">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome Back Aji </h1>
                <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                    and publishing industries for previewing layouts and visual mockups</p>
            </div>
      </div>
      </div>
      </div>
    );
}

export default Hero;