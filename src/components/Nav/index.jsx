import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

export default class Nav extends Component {

    state={
        imgs:["./media/1.jpeg","./media/2.jpeg","./media/3.jpeg","./media/4.jpeg","./media/5.jpeg"],
    }
    
    render() {
        const {imgs}=this.state
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            fade: true,
            centerMode:true
       };

        return (
            <div className='nav'>
                    <div className='box'>
                            <Slider {...settings}>
                                {
                                    imgs.map((value,index)=>{
                                        return(
                                            <img src={value} alt="輪播圖" key={index}/>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
            </div>
        )
    }
}
