import React from 'react';
import Slider from '../slider/slider';
import StatsCount from '../stats-count/stats-count';
import Menu from '../menu/menu';
export default class Home extends React.Component{

    render(){
        return(

            <div style={{marginTop:'64px'}}>
                <Slider/>
                <StatsCount/>
                <Menu/>
            </div>
        )
    }


}