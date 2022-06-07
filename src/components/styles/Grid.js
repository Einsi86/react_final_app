import styled from 'styled-components';

export const Grid = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    height: auto; 
`;

export const Row = styled.div`
display: flex;
`

export const Col = styled.div`
flex: ${(props) => props.size};
`