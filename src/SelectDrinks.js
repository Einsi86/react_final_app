import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import DrinkCard from "./components/DrinkCard";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SelectDrinks() {
    const [listOfDrinks, setListOfDrinks] = useState([]);
    const SavedDrinks = JSON.parse(localStorage.getItem("currentDrinks"));

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const fullJson = await response.json();

        fullJson.forEach((drink, index) => {
            const found = SavedDrinks && SavedDrinks.find((f) => f.id === drink.id);
            if (found) {
                fullJson[index].cardColour = "lightgreen";
            } else {
                fullJson[index].cardColour = "lightgray";
            }
        });

        setListOfDrinks(fullJson);
    };

    const complete = () => {
        const tmpSavedDrinks = JSON.parse(localStorage.getItem("currentDrinks"));
        console.log(tmpSavedDrinks)
        if (tmpSavedDrinks) {
            if (tmpSavedDrinks.length > 0) {
                Navigate("/SelectDateAndPeople")
            }
        }
    }

    const Navigate = useNavigate();

    return (
        <StyledContainer>
            <Row>
                <Col md={10}>
                    <div className="card-deck">
                        <div className="d-flex align-content-start flex-wrap">
                            <>
                                {listOfDrinks.map(({ id, name, tagline, image_url, cardColour }) => (
                                    <div key={id}>
                                        <DrinkCard
                                            id={id}
                                            name={name}
                                            tagline={tagline}
                                            image_url={image_url}
                                            cardColour={cardColour}
                                        />
                                    </div>
                                ))}
                            </>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h2>When you are happy with your selection of drinks, you can continue to the next page below</h2>
                    <Button onClick={() => complete()} variant="primary">Select Date And People</Button>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default SelectDrinks;

const StyledContainer = styled(Container)`
    h2 {
        text-align: left;
        margin-bottom:40px;
    }

    Button {
        background-color: #C16757;
        :hover {
            background-color: brown;
        }
    }
`