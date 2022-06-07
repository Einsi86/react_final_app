import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Card, Row, Col, Button, Stack, CardGroup } from "react-bootstrap";
import DrinkCard from "./components/DrinkCard";
import Styled from 'styled-components';


function SelectDrinks() {
  const [listOfDrinks, setListOfDrinks] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const fullJson = await response.json();
    setListOfDrinks(fullJson);
  };

  const handleCardClick = () => {
    console.log("clicked card is ");
  };



  useEffect(() => {
    getData();
    //console.log("First loaded");
  }, []);

  return (
    <Container>
      <Wrapper>
        <CardGroup>
          <Row xs={1} md={4} className="g-4">
            {listOfDrinks.map(({ id, name, tagline, image_url }) => (
              <p key={id}>
                <DrinkCard
                  id={id}
                  name={name}
                  tagline={tagline}
                  image_url={image_url}
                  cardobject={handleCardClick}
                />
              </p>
            ))}
          </Row>
        </CardGroup>
      </Wrapper>
    </Container>
  );
}

export default SelectDrinks;

const Wrapper = Styled.div`

  flex-wrap: wrap;
  display: flex;
 
  flex-direction: row;
  max-height: auto;



.flex-item {
  background-color: red;
  width: 50px;
  border: 1px solid black;
}
`