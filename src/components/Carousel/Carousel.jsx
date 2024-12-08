import React from 'react'
import   "./Carousel.css"
import audioDevice from "../../assets/audio-devies.jpg"

import bags from "../../assets/download.jpg"
import Slider from 'react-slick'

export default function Carousel() {

    return (
        <>
        
            <div className="photos mt-32">
                <div className="photo1">
                    <img src={bags} className='w-full h-full' alt="bags" />
                </div>
                <div className="photo2">
                    <img src={audioDevice} className='w-full h-full' alt="bags" />
                </div>
            </div>
            <div className='mt-20'>
            <Slider/>
            </div>
        </>
    )
}
