import * as React from 'react';
import * as P from './parts';

type ArticleTitleProps = {
    webTitle: string
    webUrl: string
    index: number
}


export const ArticleTitle: React.FC<ArticleTitleProps> = ({webTitle, webUrl, index}) => {
    return (
        <li>
            <P.InnerLI>
                <P.Index>
                    {index}
                </P.Index>
                <P.LinkTitles href={webUrl}>{webTitle}</P.LinkTitles>
            </P.InnerLI>
            <P.HR />
        </li>
    )
}

