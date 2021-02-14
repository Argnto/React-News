import { Container, Img, Article, Title, Body, Link } from './NewsCard.styles';

const NewsCard = ({ id, title, description, image, link }) => {

    console.log(id, title, description, image, link);


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
                <Link><a  href={link} >Visita el sitio web</a></Link>
            </Article>
        </Container>
    );
}

export default NewsCard;