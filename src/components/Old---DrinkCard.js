import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";
//import SelectDishCard from './components/SelectDishCard'
import Styled from 'styled-components';
//import "./styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap/';
//import SelectDrinks from '../';



const DrinkCard = (props) => {
    return (
        <CardGroup>
            <Wrapper>
                < Card >
                    <CardActionArea>
                        <CardMedia className="imgcont"
                            component="img"
                            image={props.image_url}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="Container">
                                {props.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.tagline + "......"}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button /* onClick={getData} */ size="small" color="primary">
                            Generate new
                        </Button>
                    </CardActions>
                </Card >
            </Wrapper>
        </CardGroup >


    );

};

export default DrinkCard;

const Wrapper = Styled.div`

.imgcont {
    max-width: auto;
    height: 35vw;
    object-fit: cover;
}
`



/* ------------------------------------------ */
/* const DrinkCard = (props) => {
    return (
        <div className="container">
            <div class="row no-gutter">
                <div class="col-sm-1"></div>
                <Card
                    onClick={() => this.props.handleClick(props.cardobject)}
                    style={{
                        width: "600px",
                        Height: "100px",
                        backgroundColor: "#c16757",
                    }}
                >
                    <Card.Img
                        style={{ width: "60px", Height: "60px" }}
                        variant="top"
                        src={props.image_url}
                    />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.tagline}</Card.Text>
                        <Button variant="primary">Select Drink</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default DrinkCard; */