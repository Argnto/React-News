import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 20px;
    width: 90%;
    margin-left: 5%;
    border-radius: 5px;
    box-shadow: #808080 2px 2px 5px;
    display: flex;
    background-color: #F8F8F8;
`;

export const Img = styled.img`
    margin: 5px;
    width: 200px;

`;


export const Article = styled.div`
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
    margin-bottom: 10px;

p {
    font-size: 1.4rem;
    font-weight: bold;
}
    
`;

export const Body = styled.div`
margin-bottom: 10px;
font-size: 1.1rem;
    
`;

export const Link = styled.button`
    border: none;
    border-radius: 10px;
    box-shadow: #808080 1px 1px 3px;
    padding: 5px;

    a {
        font-weight: bold;
        color: #04A6D1;
    }
    
    &:hover {
        background-color: #DBD9D9;    
    }

    &:active {
        background-color: #CACACA;    
    }

`;