import React from 'react';
import { Container } from './styles/Container.styled';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Layoutcontainer from './styles/LayoutGrid';

const PicCarousel = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0;
  padding:0;
  background-color: #e0e39a;
  Nav {
    background-color: #e0e39a;
  }
`


export default PicCarousel;