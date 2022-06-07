import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const SelectDateAndPeople = () => {

    const navigate = useNavigate();
    const [people, setPeople] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [email, setEmail] = useState("");
    const [buttonName, setButtonName] = useState("");

    const Sub = () => {
        people > 1 && setPeople(people - 1);
    };

    const Add = () => {
        people < 10 && setPeople(people + 1);
    };

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const handleSubmit = (e) => {

        const currentDrinks = JSON.parse(localStorage.getItem("currentDrinks"));
        const currentDish = JSON.parse(localStorage.getItem("currentDish"));



        const orderObject = {
            email: email,
            date: startDate,
            people: people,
            Drinks: currentDrinks,
            Dish: currentDish,
        };

        let orders = JSON.parse(localStorage.getItem("orders"));

        if (orders != null) {
            const index = orders.findIndex((item) => item.email === email);
            index >= 0 && orders.splice(index, 1);
        } else {
            orders = [];
        }

        orders.push(orderObject);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("order", JSON.stringify(orderObject));

        navigate("/Receipt");
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };



    const setButtonText = () => {
        const orderStatus = localStorage.getItem("orderStatus")
        if (orderStatus == 0) {
            setButtonName("Complete Order")
        }
        else {
            setButtonName("Update Order")
            const order = JSON.parse(localStorage.getItem("order"))
            setEmail(order.email)
            setPeople(order.people)
            setStartDate(Date.parse(order.date))
        }
    }

    useEffect(() => {
        setButtonText()
    }, []);

    return (
        <Container className="padding: 10px">
            <StyledContainer>
                <Row>

                    <Col>
                        <TextWrapper>
                            <h1>Click the window below to select a date and time for your reservation</h1>
                        </TextWrapper>
                    </Col>
                    <Col>
                        <h1>Choose amount of people for your reservation below</h1>
                    </Col>



                </Row>
                <Row>
                    <Col>
                        <div className="react-datepicker-wrapper">
                            <div className="d-flex mx-auto my-auto">
                                <DatePicker
                                    todayButton="Select today"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    minDate={new Date()}
                                    minTime={new Date().setHours(15, 59)}
                                    maxTime={new Date().setHours(23, 0)}
                                    filterDate={isWeekday}
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                    }}
                                />
                            </div>
                        </div>
                    </Col>

                    <Col>

                    </Col>
                    <Col>
                        <ButtonWrapper>
                            <Button onClick={() => Sub()} variant="primary" size="sm">
                                -
                            </Button>{' '}
                            <h1>{people}</h1>
                            <Button onClick={() => Add()} variant="primary" size="sm">
                                +
                            </Button>{' '}
                        </ButtonWrapper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EmailWrapper>
                            <div className="d-flex ">
                                <div className="form-group">
                                    <form id="formData">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            className="form-control"
                                            id="inp_Email"
                                            aria-describedby="emailHelp"
                                            placeholder={email}
                                            required
                                        />
                                        <Button
                                            id="btn_complete"
                                            className="btn btn-success"
                                            onClick={() => handleSubmit()}
                                        >
                                            {buttonName}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </EmailWrapper>
                    </Col>
                </Row>
            </StyledContainer>
        </Container >
    )
};

export default SelectDateAndPeople;

const ButtonWrapper = styled(Container)`
display: flex;
Button {
        font-size: 30px;
        min-width: 60px;
        background-color: #C16757;
        :hover {
            background-color: brown;
    }
    }
    h1 {
        margin: 20px;
    }
`

const StyledContainer = styled(Container)`
    padding: 50px;
    background-color: #e0e39a;
`

const TextWrapper = styled.div`
    margin-bottom: 80px;
`
const EmailWrapper = styled.div`
    margin-top: 50px;

    Button {
        margin-top: 20px;
        background-color: #C16757;
        :hover {
            background-color: brown;
    }
}
`