import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ArticleTitlesList from "./articleTitlesList/ArticleTitlesList";
import {FOOTBALL, TRAVEL, UK_NEWS} from "../../../utils/articleTitleConstants";
import { NavBar, NavLinkStyled } from './TabbedComponentStyled';


const TabbedComponent = () => {

    return (
        <BrowserRouter>
            <NavBar >
                <NavLinkStyled to={`/titles/${UK_NEWS}`}>UK news</NavLinkStyled>
                <NavLinkStyled to={`/titles/${FOOTBALL}`}>Football</NavLinkStyled>
                <NavLinkStyled to={`/titles/${TRAVEL}`}>Travel</NavLinkStyled>
            </NavBar>
            <Routes>
                <Route path='/titles/:url' element={<ArticleTitlesList/>}/>
                <Route path="*" element={<Navigate to={`/titles/${UK_NEWS}`}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default TabbedComponent
