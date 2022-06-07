import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function Receipt() {
    const navigate = useNavigate();
    const [receipt, setReceipt] = useState([]);

    const getData = () => {
        const currentDrinks = JSON.parse(localStorage.getItem("currentDrinks"));
        const currentDish = JSON.parse(localStorage.getItem("currentDish"));
        const order = JSON.parse(localStorage.getItem("order"));

        const dateString = order.date;
        const timeString = order.date;

        const formatDate = (dateString) => {

            return new Date(dateString).toLocaleDateString()
        }
        const formatTime = (timeString) => {

            return new Date(timeString).toLocaleTimeString()
        }

        //console.log(formatDate(dateString))


        let lines = [];

        lines.push({ line: "   -- Food --" });
        currentDish && lines.push({ line: currentDish.name });
        lines.push({ line: "" });
        lines.push({ line: "   -- Drinks --" });

        currentDrinks.forEach((drink) => {
            lines.push({ line: drink.name });
        });
        lines.push({ line: "" });
        lines.push({ line: "   -- Order info --" });
        lines.push({ line: "Customer Email:" + " " + order.email })
        lines.push({ line: "Amount of people:" + " " + order.people })
        lines.push({ line: (formatDate(dateString)) + "  " + (formatTime(timeString)) })


        console.log(lines);

        setReceipt(lines);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container className="padding: 10px">
            <Wrapper>
                <Row>
                    <div className="container">
                        <div>
                            <table className="table table-striped table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Vöruheiti</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {receipt.map(({ line }) => (
                                        <tr>
                                            <td>{line}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={2}>
                        <Button onClick={() => navigate("/")} variant="primary">
                            Back To Home
                        </Button>
                    </Col>
                </Row>
            </Wrapper >
        </Container>
    );
}

export default Receipt;


const Wrapper = styled(Container)`
    background-color: #e0e39a;
    padding: 10px;

    Button {
    background-color: #C16757;
    color: white;
    :hover {
        background-color: brown;
    } 
}
`