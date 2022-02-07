import React from 'react';
import {ArticleTitle} from "./articleTitle/ArticleTitle";
import {useFetch} from "../../../../hooks/useFetchData";
import {Loader} from "../../../../components/UI/Loader/Loader";
import * as P from './parts';
import {URLType} from "../../../../utils/articleTitleConstants";


export const ArticleTitlesList: React.FC<{url: URLType}> = ({url}) => {

    const {data, isLoading, error} = useFetch(url)

    return (
        <P.TitlesList>
            {
                isLoading
                    ? <Loader/>
                    : data
                        ? data.map((articlesTitle, index: number) => {
                            return <ArticleTitle webTitle={articlesTitle.webTitle}
                                                 webUrl={articlesTitle.webUrl} index={index + 1} key={articlesTitle.id}/>
                        })
                        : <h1>{!error}</h1>
            }
        </P.TitlesList>
    )
}
