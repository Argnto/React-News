import { Header, Logo, Nav, NavList, NavItem, SearchBox, SearchBtn, SearchBar } from './NavBar.styles';
import Link from 'next/link';
import Image from 'next/image';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar: React.FC = () => {
    return (
      <Header>
          <Logo>
              <Image 
                src="/logo1.png"
                width={60}
                height={50} />
              <h2>React News</h2>
          </Logo>
        <Nav>
            <NavList>
                <NavItem>
                    <Link href="/"><a>Noticias del día</a></Link>
                </NavItem>
                <NavItem>
                    <Link href="/memes"><a>Memes</a></Link>
                </NavItem>
                <NavItem>
                    <Link href="/about"><a>About</a></Link>
                </NavItem>
            </NavList>
        </Nav>
            <SearchBox>
                <SearchBar type="text" placeholder="Busca tu noticia" />
                <SearchBtn> <FontAwesomeIcon icon={faSearch} /> </SearchBtn>
            </SearchBox>
      </Header>
    );
}
 
export default NavBar;