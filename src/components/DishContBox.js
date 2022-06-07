import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap/';

const DishContBox = () => {
    return (
        <Wrapper>
            <Row>
                <Col>
                    <h2>Continue to Drinks menu</h2>
                    <Button variant="primary">Continue</Button>
                </Col>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Row>
        </Wrapper>
    )
}

export default DishContBox;

const Wrapper = styled.div`
    margin: auto;
    padding: auto;
    text-align: center;
    background-color: #e0e39a;
   // max-height: 100%;
    //flex-direction: center;
    max-height: auto;

Button {
    flex-direction: center;
}
`
