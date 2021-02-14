import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background-color: #24252A;

    li , a , button {
        font-weight: 500;
        font-size: 18px;
        color: white;
        text-decoration: none;
    }
`;

export const Nav = styled.nav`

`;

export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    h2 {
        font-size: 30px;
        color: white;
        padding-left: 10px;
    }
`;

export const NavList = styled.ul`
    list-style:none;
`;

export const NavItem = styled.li`
    display: inline-block;
    padding: 0px 20px;

    a {
        transition: all 0.3s ease 0s;
    }

    a:hover{
        color: #0088A9;
    }
`;

export const SearchBox = styled.div`
    background: #2f3640;
    border-radius: 40px;
    padding: 5px;
    display: flex;
`

export const SearchBar = styled.input`
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    color: white;
    font-size: 16px;
    margin: auto 10px;
`

export const SearchBtn = styled.a`
    padding: 10px 12px;
    background-color: rgba(0,126,169,1);
    border: none;
    border-radius: inherit;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    outline: none;
    
    &:hover {
        background-color: rgba(0,126,169,0.8);
    }
`;