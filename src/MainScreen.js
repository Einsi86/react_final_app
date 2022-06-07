import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Row, Col, Form, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import lilbits from './image/lilbits.png'

const MainScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const DelCurrentOrder = () => {
        localStorage.removeItem("currentDish");
        localStorage.removeItem("currentDrinks");
        localStorage.setItem("orderStatus", 0);
        navigate("/SelectDish");
    };

    const searchOrder = () => {
        console.log(email);
        localStorage.setItem("orderStatus", 1);
        let currentDish = [];
        let currentDrinks = [];
        let currentOrder = [];

        const orders = JSON.parse(localStorage.getItem("orders"));

        if (orders != null) {
            const index = orders.findIndex((item) => item.email === email);
            if (index > -1) {
                console.log("Found!");
                currentDish = orders[index].Dish;
                currentDrinks = orders[index].Drinks;
                currentOrder = {
                    email: orders[index].email,
                    date: orders[index].date,
                    people: orders[index].people,
                };

                localStorage.setItem("currentDish", JSON.stringify(currentDish));
                localStorage.setItem("currentDrinks", JSON.stringify(currentDrinks));
                localStorage.setItem("order", JSON.stringify(currentOrder));

                navigate("/SelectDish");
            } else {
                console.log("Not found!");
                setError("Email not found!");
            }
        } else {
            setError("Email not found!");
            orders = [];
        }
    };

    return (
        <Container className="padding: 10px">
            <StyledContainer>
                <Row>
                    <Col className="col-8">
                        <CarouselWrapper>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.picsum.photos/id/404/400/200.jpg?hmac=wYudVOCjw6ZDV9z2U4VtZ6TDqB_xbaTY93DP3fyFONs"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Fresh as the sea!</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.picsum.photos/id/323/400/200.jpg?hmac=L7L60zoQEou8PSgaz8hq5yK9-6lkj8YNY-7WEfnxGVw"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Fresh as a Fjord!</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.picsum.photos/id/705/400/200.jpg?hmac=B4E1nYhyVlblG36_ag6zOGudt8BPgnsbq7R-wp-lYpM"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Fresh as the sky!</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </CarouselWrapper>
                    </Col>

                    <Col className="col-4">
                        <OrderCardWrapper>
                            <h2>Order site</h2>
                            <h3>Click the button below to begin your order!</h3>
                            <Button onClick={() => DelCurrentOrder()} variant="primary">
                                Order here
                            </Button>
                        </OrderCardWrapper>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-8">
                        <EmailInputWrapper>
                            <Form>
                                <Form.Label>Already ordered?</Form.Label>
                                <p>Enter email below to find your order</p>
                                <Form.Control className="form-control"
                                    name="email"
                                    id="inp_Email"
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={((e) => setEmail(e.target.value))}
                                    required
                                />
                                <div className="text-danger">
                                    <h4 className="text-alert">{error}</h4>
                                </div>
                                <Button onClick={() => searchOrder()} variant="primary">
                                    Find Order
                                </Button>
                            </Form>
                        </EmailInputWrapper>
                    </Col>
                    <Col className="col-4">
                        <ContentBoxWrapper>
                            <img className="img-fluid" src={lilbits} />
                        </ContentBoxWrapper>
                    </Col>
                </Row>
            </StyledContainer>
        </Container>
    )
}

export default MainScreen;

const StyledContainer = styled(Container)`
  background-color: #e0e39a;
  overflow: hidden;
  max-width: auto;
  background-size: contain;
  //margin: auto;
  //max-height: auto;

`;

const CarouselWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #e0e39a;
  Nav {
    background-color: #e0e39a;
  }
`;
const OrderCardWrapper = styled.div`
  background-color: #e0e39a !important;
  margin: 0px;
  Button {
    width: 80%;
    background-color: #c16757;
    :hover {
        background-color: brown;
    } 
  }
`;

const EmailInputWrapper = styled.div`
  .form-control {
      color: white;
  }
  display: grid;

  align-items: center;
  height: 300px;
  background-color: #e0e39a;
  padding: 15px;
  

  Button {
    align-items: flex-end;
    float: left;
    background-color: #c16757;
    :hover {
        background-color: brown;
    } 
  }

  .Form.label {
    max-width: 100px;
  }
  .Form.Control {
    background-color: #e0e39a;
  }

  input[type="email"],
  textarea,
  select {
    background-color: #c16757;
    max-width: 70%;
  }
`;

const ContentBoxWrapper = styled.div`

  padding-top: 70px;
  text-align: center;
  background-color: #e0e39a;

  .Form.label {
    max-width: 100px;
  }
`;


















/* import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { Grid, Row, Col } from './components/styles/Grid';
import { Form, Card, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MainScreen() {
    const navigate = useNavigate();

    const DelCurrentOrder = () => {
        localStorage.removeItem("currentDish");
        localStorage.removeItem("currentDrinks");
        localStorage.setItem("orderStatus", 0);
        navigate("/SelectDish");
    }
    const searchOrder = () => {
        localStorage.setItem("orderStatus", 1);
        let currentDish = []
        let currentDrinks = []
        const orders = JSON.parse(localStorage.getItem("orders"))
        if (orders != null) {
            const index = orders.findIndex((item) => item.email === email);
            if (index)
        } else {
            orders = [];
        }
    }

    return (
        <StyledContainer>
            <Row>
                <Col className="col-8">
                    <CarouselWrapper>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.picsum.photos/id/404/400/200.jpg?hmac=wYudVOCjw6ZDV9z2U4VtZ6TDqB_xbaTY93DP3fyFONs"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Fresh as the sea!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.picsum.photos/id/323/400/200.jpg?hmac=L7L60zoQEou8PSgaz8hq5yK9-6lkj8YNY-7WEfnxGVw"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Fresh as a Fjord!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.picsum.photos/id/705/400/200.jpg?hmac=B4E1nYhyVlblG36_ag6zOGudt8BPgnsbq7R-wp-lYpM"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Fresh as the sky!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </CarouselWrapper>
                </Col>

                <Col className="col-4">
                    <OrderCardWrapper>
                        <h2>Order site</h2>
                        <h3>Click the button below to begin your order!</h3>
                        <Button onClick={() => DelCurrentOrder()} variant="primary">Order here</Button>
                    </OrderCardWrapper>
                </Col>
            </Row>

            <Row>
                <Col className="col-6">
                    <EmailInputWrapper>
                        <Form>
                            <Form.Label>Already ordered?</Form.Label>
                            <p>Enter email below to find your order</p>
                            <Form.Control type="email" placeholder="name@example.com" />
                            <Button onClick={() => } variant="primary">Find Order</Button>
                        </Form>
                    </EmailInputWrapper>
                </Col>
                <Col className="col-6">
                    <ContentBoxWrapper>
                        <h1>This is a content box. There are many like it; but this one is mine!</h1>
                    </ContentBoxWrapper>
                </Col>
            </Row>

        </StyledContainer>
    );
}

export default MainScreen;

const StyledContainer = styled(Container)`
    background-color: #e0e39a;
    padding: 0px;
    margin: auto;
   max-height: auto;
`


const CarouselWrapper = styled.div`
  margin: 0;
  padding:0;
  background-color: #e0e39a;
  Nav {
    background-color: #e0e39a;
  }
`
const OrderCardWrapper = styled.div`

background-color: #e0e39a !important;
margin: 0px;
    Button {
        width:80%;
        background-color: #C16757;
    }
    
`

const EmailInputWrapper = styled.div`
    display: grid;
    align-items: center;
    height: 300px;
    //border: 1px solid black;
    background-color: #e0e39a;
    padding: 15px;

    Button {
        align-items: flex-end;
        float: right;
        background-color: #C16757;
    }

    .Form.label {
        max-width: 100px;
    }
    .Form.Control {
        background-color: #e0e39a;
    } 

input[type="email"],
textarea,
select {
  background-color: #C16757;
  max-width: 70%;
}
`

const ContentBoxWrapper = styled.div`
    padding: 30px;
    text-align: center;
    background-color: #e0e39a;

    .Form.label {
        max-width: 100px;
    }
` */