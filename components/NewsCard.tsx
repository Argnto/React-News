import { Container, Img, Article, Title, Body, Link, Footer, Source, } from './NewsCard.styles';

const NewsCard = ({ title, description, image, link, logo, category, source }) => {

    return (
        <Container>
            <div>
                <Img src={image} alt={title} />
            </div>
            <Article>
                <Title>
                    <p> {title} </p>
                </Title>
                <Body>
                    <p> {description} </p>
                </Body>
                <Footer>
                    <Source>
                        <img src={logo} alt={source} />
                        <p> Fuente: {source} </p>
                    </Source>
                    <p> Categoria: {category} </p>
                    <Link><a href={link} >Visita el sitio web</a></Link>
                </Footer>
            </Article>
        </Container>
    );
}

export default NewsCard;