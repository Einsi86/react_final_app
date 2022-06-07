import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Card>
                <Card.Img variant="top" src="https://i.picsum.photos/id/566/200/100.jpg?hmac=3lVePN0dhUgx9_-DBz8-vZ0VKnq-yLqhk8-LvmdUSv8" />
                <Card.Body className="OrderBody">
                    <Card.Title>Order site</Card.Title>
                    <Card.Text>
                        Click the button below to begin your order!
                    </Card.Text>
                    <Button onClick={() => navigate("/SelectDish")} variant="primary">Order here</Button>
                </Card.Body>
            </Card>
        </Wrapper>
    )
}

export default OrderCard;

const Wrapper = styled.div`

background-color: #C16757 !important;
margin: 0px;
    Button {
        width:100%;
        background-color: #C16757;
    }
    Card {
        background-color: #C16757;
    }
    
` 