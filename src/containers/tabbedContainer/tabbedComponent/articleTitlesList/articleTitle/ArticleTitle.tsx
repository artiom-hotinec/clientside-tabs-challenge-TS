import * as React from 'react';
import {InnerLI, LinkTitles, Index, HR} from './ArticleTitleStyles';


type ArticleTitleProps = {
    webTitle: string
    webUrl: string
    index: number
}


export const ArticleTitle: React.FC<ArticleTitleProps> = ({webTitle, webUrl, index}) => {
    return (
        <li>
            <InnerLI>
                <Index>
                    {index}
                </Index>
                <LinkTitles href={webUrl}>{webTitle}</LinkTitles>
            </InnerLI>
            <HR />
        </li>
    )
}

