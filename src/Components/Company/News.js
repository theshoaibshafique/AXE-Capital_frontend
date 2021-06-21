import React from 'react'
import NewsDetail from '../cards/NewsDetail'

const News = ({newsData}) => {
  
    return (  newsData.map((news)=>{
            return(
                <NewsDetail 
                title={news.title}
                summary={news.text}
                source={news.source_name}
                date={news.date}
                url={news.news_url}
                impact={news.sentiment}  
                />
            ) 
        })
        )
}

export default News
