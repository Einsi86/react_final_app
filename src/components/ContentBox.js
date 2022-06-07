import React from 'react'
import styled from 'styled-components';

const ContentBox = () => {
  return (
    <Wrapper>
      <h1>This is a content box. There are many like it; but this one is mine!</h1>
    </Wrapper>
  )
}

export default ContentBox;

const Wrapper = styled.div`
    padding: 10px;
    text-align: center;
    height: 300px;
    //border: 1px solid black;
    background-color: #e0e39a;

    .Form.label {
        max-width: 100px;
    }
`

