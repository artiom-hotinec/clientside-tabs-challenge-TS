import React from 'react';
import {Tabs} from '../../components/Tabs/Tabs';
import {ArticleTitlesList} from "./tabbedComponent/articleTitlesList/ArticleTitlesList";
import {FOOTBALL, TRAVEL, UK_NEWS} from "../../utils/articleTitleConstants";

const options = [
    {
        key: '1',
        title: 'Title1',
        Content: () => <ArticleTitlesList url={UK_NEWS}/>
    },
    {
        key: '2',
        title: 'Title2',
        Content: () => <ArticleTitlesList url={FOOTBALL}/>
    },
    {
        key: '3',
        title: 'Title2',
        Content: () => <ArticleTitlesList url={TRAVEL}/>
    },
]

export const TabbedContainer: React.FC  = () => <Tabs options={options}  activeKey={'1'}/>




