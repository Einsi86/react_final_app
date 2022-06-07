import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



const Meals = () => {
    const navigate = useNavigate();
    let listOfMeals = [];
    const [oneMeal, setOneMeal] = useState([]);

    const getData = async () => {
        const response = await fetch(
            "https://themealdb.com/api/json/v1/1/random.php"
        );

        const fullJson = await response.json();

        listOfMeals = fullJson.meals;

        listOfMeals.map((i) => {
            setOneMeal({
                id: i.idMeal,
                name: i.strMeal,
                instructions: i.strInstructions.substring(0, 300),
                picture: i.strMealThumb,
            });
        });
    };

    const check = () => {
        const tmpDish = JSON.parse(localStorage.getItem("currentDish"));

        if (tmpDish) {
            setOneMeal(tmpDish);
        } else {
            getData()
        }
    }

    useEffect(() => {
        check();
    }, []);

    const continueClick = () => {
        const dish = {
            id: oneMeal.id,
            name: oneMeal.name,
            instructions: oneMeal.instructions,
            picture: oneMeal.picture

        }
        localStorage.setItem("currentDish", JSON.stringify(dish));
        navigate("/SelectDrinks");
    }

    return (
        <Wrapper>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="imgcont"
                                component="img"
                                image={oneMeal.picture}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {oneMeal.name}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {oneMeal.instructions + "......"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={getData} size="small" color="primary">
                                Generate new
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <h2>Continue to Drinks menu</h2>
                    <Button onClick={() => continueClick()} variant="primary">Continue</Button>
                </Col>
            </Row>
        </Wrapper >
    );
};

export default Meals


const Wrapper = styled.div`
    background-color: #e0e39a;
    margin: auto;
    text-align: center;
    max-height: auto;


min-height: auto;
.imgcont {
    max-height: 495px;
    min-height: 495px;
    aspect-ratio: auto;
}


Button {
    background-color: #C16757;
    color: white;
    :hover {
        background-color: brown;
    } 
}

`