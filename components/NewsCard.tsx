

const NewsCard = ({ id, title, description, image, link }) => {

    console.log(id, title, description, image, link);


    return (
        <div>
            <div>
                <img src={image} alt={title} width="200" />
            </div>
            <div>
                <strong> {title} </strong>
                <p> {description} </p>
            </div>
            <div>
                <a href={link}>Link</a>
            </div>
        </div>
    );
}

export default NewsCard;