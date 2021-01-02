import React from 'react'
import Slider from 'react-slick'
import slide_one from  '../../photos/about1.jpg'
import slide_two from '../../photos/about2.jpg'


export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    return (
        <div  className = "carrousel_wrapper"
                style = {{
                    height: '60vh',
                    overflow: 'hidden',
                    background: 'green'
                }}
                >
            <Slider {...settings} >
                <div>
                    <div 
                            className="carrousel_image"
                            style={{
                                background:`url(${slide_one})`,
                                
                                backgroundPosition: 'center',
                                height:'60vh'
                            }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height:'60vh'
                        }}
                   ></div>
                </div>
               

            </Slider>          
        </div>
    )
}
