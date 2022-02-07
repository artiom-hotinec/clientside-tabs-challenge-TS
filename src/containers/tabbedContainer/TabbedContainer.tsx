import React from 'react';
import {Tabs} from '../../components/Tabs/Tabs';
import {ArticleTitlesList} from "./tabbedComponent/articleTitlesList/ArticleTitlesList";
import {FOOTBALL, TRAVEL, UK_NEWS} from "../../utils/articleTitleConstants";

const options = [
    {
        key: '1',
        title: 'UK NEWS',
        content: () => <ArticleTitlesList url={UK_NEWS}/>
    },
    {
        key: '2',
        title: 'FOOTBALL',
        content: () => <ArticleTitlesList url={FOOTBALL}/>
    },
    {
        key: '3',
        title: 'TRAVEL',
        content: () => <ArticleTitlesList url={TRAVEL}/>
    },
]

export const TabbedContainer: React.FC = () => {
    return <Tabs options={options} activeKey={'1'}/>
}