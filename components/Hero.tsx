"use client";
import Image from 'next/image';
import { CustomButton } from ".";


const Hero = () => {
    const handleScroll = () => {

    }
    
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Looking for a car to hit the roads
            </h1>
            <p className="hero__subtitle">
            Get your rental car with our effortless booking process
            </p>

            <CustomButton
            title="Wheels of the road"
            containerStyles="bg-black
            text-white rounded-full mt-10"
            handleClick={handleScroll}
             />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/lamb.png" alt="hero" fill className="object-contain" />
            </div>    
                <div className="hero__image-overlay" />
            </div>
        </div>
    
  )
}

export default Hero;
