import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";



const NewsFetch = () => {

    const [card, setsCard] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const url = 'https://api.jornalia.net/api/v1/articles?apiKey=c31300f5d18347c1a00ea1843498fee2';
        const resp = await fetch(url);
        const { articles } = await resp.json();

        const news = articles.map(article => {
            return {
                id: article.id,
                title: article.title,
                description: article.description,
                image: article.imageUrl,
                link: article.sourceUrl,
            }
        })

        setsCard(news);       

    }



    return (

        <div>
            {
                card.map( article => (
                    <NewsCard
                        key={article.id}
                        {...article}
                    />
                ))
            }


        </div>
    );
}

export default NewsFetch;