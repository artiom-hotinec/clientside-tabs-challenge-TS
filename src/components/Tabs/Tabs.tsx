import React, {ReactElement, useState} from 'react';
import {TabTitle, TabTitleWrapper} from "./TabsTitle/TabsTitle";
import * as P from './parts'


type TabsType = {
    activeKey: string
    options: {
        key: string
        title: string
        Content: () => ReactElement
    }[]
}


export const Tabs: React.FC<TabsType> = ({activeKey, options}) => {

    const [activeItem, setActiveItem] = useState(activeKey)

    const changeKeyHandler = (e: any) => {
        setActiveItem(e.target.title)
    }

    return (
        <P.TabbedContainerStyled>
            <TabTitleWrapper>
                {options.map(({key, title}) => <TabTitle
                        key={key}
                        title={key}
                        onClick={changeKeyHandler}
                        className={activeItem === key ? "Active" : ""}>
                        {title}
                    </TabTitle>
                )}
            </TabTitleWrapper>

            {options.map(({key, Content}) => <P.TabPane
                key={key+ "_"}
                activeKey = {activeItem}
             id={key}
                >
                <div style={{width: '100%'}}>
                    {Content()}
                </div>
                </P.TabPane>
            )}
        </P.TabbedContainerStyled>
    )
}
