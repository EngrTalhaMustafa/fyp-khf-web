import React from 'react';
import { Row, Col } from 'antd';
import './stats-count.css'
import CountUp from 'react-countup';
export default class StatsCount extends React.Component {

    render() {
        return (
            <div>
                <Row id="row" type="flex" span={24}>
                    <Col>
                            <h1 style={{fontSize:'3em',marginBottom:'0.17em',color:'#D70F64'}}>
                            <CountUp end={5010} duration={5} />
                        </h1>
                        <p style={{color:'black'}}>
                            Deliveries
                        </p>
                    </Col>
                    <Col>
                        <h1 style={{fontSize:'3em',marginBottom:'0.17em',color:'#D70F64'}}>
                            <CountUp end={90} duration={5} />
                        </h1>
                        <p style={{color:'black'}}>
                        Master Chiefs
                        </p>
                    </Col>
                    <Col>
                        <h1 style={{fontSize:'3em',marginBottom:'0.17em',color:'#D70F64'}}>
                            <CountUp end={32} duration={5} />
                        </h1>
                        <p style={{color:'black'}}>
                            Riders
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

} 