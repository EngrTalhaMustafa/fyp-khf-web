import { Carousel } from 'antd';
import React from 'react';
import './slider.css';
export default class Home extends React.Component{

    render(){
        return(

            <div>

<Carousel style={{hieght:'60vh !important'}} autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>     
            </div>
        )
    }
}