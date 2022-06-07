import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Meals from './Meals';

import { Container, Row, Col } from 'react-bootstrap/';


const SelectDish = () => {
    return (
        <Container>
            <Meals />
        </Container>
    )
}


export default SelectDish;