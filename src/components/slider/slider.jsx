import { Carousel } from 'antd';
import React from 'react';
import './slider.css';
import slider1 from '../../slider1.png';
import slider2 from '../../slider2.jpg';
import slider3 from '../../slider3.png';
import slider4 from '../../logo-2.png';

export default class Home extends React.Component{

    render(){
        return(

            <div>

<Carousel style={{hieght:'60vh !important'}} autoplay>
    <div>
      <img src={slider1}  height="450px" width="100%" style={{marginTop:"140px"}}/>
    </div>
    <div style={{backgroundColor:"white !important",display:"flex !important",justifyContent:"center",alignItems:"center"}}>
    <img src={slider4} style={{marginTop:"60px"}}/> 
    </div>
  </Carousel>     
            </div>
        )
    }
}