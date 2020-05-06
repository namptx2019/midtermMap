import React, {useEffect, useState} from 'react';
import StatsVN from './CovidViet';
import StatTotal from './CovidTotal'

import {Container, Card} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

const CovidStats = () => {

    return ( 

        <Container style={{borderRadius: '5px', backgroundColor: '#282c34', padding: '10px', paddingBottom: '50px', marginBottom: '10px',height: '700px', width:'100vh'}}>
            <h3 style={{textAlign:"center", paddingTop: '5px', color: 'white'}}>Chart Data Analist</h3>
            <Row>
                <Col xs={6} style={{width: '700px'}}>
                    <Card>
                        <h6>Việt Nam</h6>
                        <div>
                            <StatsVN></StatsVN>
                        </div> 
                    </Card> 
                </Col>

                <Col xs={6} style={{width: '700px'}}>
                    <Card>
                        <h6>World</h6>
                        <div>
                            <StatTotal></StatTotal>
                        </div> 
                    </Card> 
                </Col>   
            </Row>
        </Container>
    )
};

export default CovidStats;