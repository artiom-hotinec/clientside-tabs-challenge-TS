import React, { useState } from 'react';
import {Tabs} from '../../components/Tabs/Tabs';
import {ArticleTitlesList} from "./tabbedComponent/articleTitlesList/ArticleTitlesList";
import {FOOTBALL, TRAVEL, UK_NEWS} from "../../utils/articleTitleConstants";

const options = [
    {
        key: '1',
        title: 'UK NEWS',
    },
    {
        key: '2',
        title: 'FOOTBALL',
    },
    {
        key: '3',
        title: 'TRAVEL',
    },
]

export const TabbedContainer: React.FC = () => {
    const [url, setUrl] = useState(UK_NEWS)

    const changeHandler = (key: any) => {
        if(key==='1'){
            setUrl(UK_NEWS)
        }else if(key==='2'){
            setUrl(FOOTBALL)
        }else{
            setUrl(TRAVEL)
        }

    }

    return (
        <Tabs
            options={options}
            activeKey={'1'}
            Content={() => <ArticleTitlesList url={url}/> }
            changeHandler={changeHandler}
        />
    )
}




