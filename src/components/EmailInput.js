import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const EmailInput = () => {
    return (
        <Wrapper>
            <Form>
                <Form.Label>Already ordered?</Form.Label>
                <p>Enter email below to find your order</p>
                <Form.Control type="email" placeholder="name@example.com" />
                <Button variant="primary">Find Order</Button>
            </Form>

        </Wrapper>
    )
}

export default EmailInput;

const Wrapper = styled.div`
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
