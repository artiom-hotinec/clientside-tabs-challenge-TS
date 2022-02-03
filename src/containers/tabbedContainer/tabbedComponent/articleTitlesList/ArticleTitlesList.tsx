import React from 'react';
import {ArticleTitle} from "./articleTitle/ArticleTitle";
import {useParams} from "react-router-dom";
import {useFetch} from "../../../../hooks/useFetchData";
import {Loader} from "../../../../components/UI/Loader/Loader";
import { TitlesListStyled } from './TitlesListStyled';


const ArticleTitlesList: React.FC = () => {

    const params = useParams();
    const {data, isLoading} = useFetch(params.url);

    return (
        <TitlesListStyled>
            {
                isLoading
                ? <Loader/>
                : data ? data.map((articlesTitle, index: number) => {
                    return <ArticleTitle webTitle={articlesTitle.webTitle}
                                         webUrl={articlesTitle.webUrl} index={index + 1} key={articlesTitle.id}/>
                }) : null
            }

        </TitlesListStyled>
    )
}

export default ArticleTitlesList
