import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Styled from 'styled-components';

const DrinkCard = (props) => {
    const [currentColour, setCurrentColour] = useState(props.cardColour);
    let SavedDrinks = JSON.parse(localStorage.getItem("currentDrinks"));

    const handleClick = (event) => {
        console.log(event.currentTarget.id + " " + currentColour);

        SavedDrinks = JSON.parse(localStorage.getItem("currentDrinks"));
        if (SavedDrinks == null) {
            SavedDrinks = [];
        }

        if (currentColour === "lightgreen") {
            setCurrentColour("lightgray");
            if (SavedDrinks) {
                const index = SavedDrinks.findIndex((item) => item.id === props.id);
                SavedDrinks.splice(index, 1);
                localStorage.setItem("currentDrinks", JSON.stringify(SavedDrinks));
            }
        } else {
            setCurrentColour("lightgreen");
            const itemToAdd = {
                id: props.id,
                name: props.name,
            };
            SavedDrinks.push(itemToAdd);
            localStorage.setItem("currentDrinks", JSON.stringify(SavedDrinks));
        }
    };

    return (
        <CardDiv>
            <Card
                id={props.id}
                onClick={handleClick}
                style={{
                    width: "15rem",
                    height: "30rem",
                    margin: "5px",
                    backgroundColor: currentColour,
                }}
            >
                <ImgDiv className="d-flex mx-auto my-auto">
                    <Card.Img
                        style={{
                            width: "5rem",
                            alignSelf: "right",
                            margin: "40px",
                        }}
                        variant="top"
                        src={props.image_url}
                    />
                </ImgDiv>
                <TextDiv>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.tagline}</Card.Text>
                </TextDiv>
            </Card>
        </CardDiv>
    );
};

export default DrinkCard;

const CardDiv = Styled.div`

    Card {
        
    }
    
`

const TextDiv = Styled.div`
    text-align: center;
    margin: 0px;
    padding-bottom: 10px;

`
const ImgDiv = Styled.div`
    min-height: 100px;
`
