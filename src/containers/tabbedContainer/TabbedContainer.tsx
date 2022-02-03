import React from 'react';
import './TabbedContainer.css'
import TabbedComponent from "./tabbedComponent/TabbedComponent";
import { TabbedContainerStyled } from './TabbedContainerStyled';




export const TabbedContainer: React.FC  = () => {

    return (
        <TabbedContainerStyled >
            <TabbedComponent/>
        </TabbedContainerStyled>
    )
}


