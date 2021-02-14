import styled from 'styled-components';


export const Container = styled.div`
    border-radius: 5px;
    box-shadow: #808080 2px 2px 5px;
    display: flex;
    margin-left: 5%;
    margin-top: 20px;
    width: 90%;
`;

export const Img = styled.img`
    margin: 5px;
    width: 200px;

`;


export const Article = styled.div`
  margin: 0px 10px 5px 5px;
`;

export const Title = styled.div`
    margin-bottom: 10px;

p {
    font-size: 1.4rem;
    font-weight: bold;
}
    
`;

export const Body = styled.div`
font-size: 1rem;
margin-bottom: 10px;
    
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.button`
    border: none;
    border-radius: 10px;
    box-shadow: #808080 1px 1px 3px;
    height: 30px;
    padding: 5px;

    a {
        color: #04A6D1;
        font-weight: bold;
    }
    
    &:hover {
        background-color: #DBD9D9;    
    }

    &:active {
        background-color: #CACACA;    
    }

`;

export const Source = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 30px;
        margin-bottom: 5px;
    }
`;