import React, {ReactElement, useCallback, useState} from 'react';
import {TabTitle, TabTitleWrapper} from "./TabsTitle/TabsTitle";
import * as P from './parts'


type TabsType = {
    activeKey: string
    options: {
        key: string
        title: string
        content: () => ReactElement
    }[]
}

export const Tabs: React.FC<TabsType> = ({activeKey, options}) => {

    const [activeItem, setActiveItem] = useState(activeKey)


    const changeKeyHandler = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLTextAreaElement
            setActiveItem(target.title)
        },
        [activeItem]
    );

    return (
        <P.TabbedContainerStyled>
            <TabTitleWrapper>
                {options.map(({key, title}) =>
                    <TabTitle
                        key={key}
                        title={key}
                        onClick={changeKeyHandler}
                        className={activeItem === key ? "active" : ""}>
                        {title}
                    </TabTitle>
                )}
            </TabTitleWrapper>

            {options.map(({key, content}) =>
                <P.TabPane key={key + "_"}>
                    {
                        activeItem === key
                            ? <div style={{width: '100%'}}>
                                {content()}
                            </div>
                            : null
                    }

                </P.TabPane>
            )}
        </P.TabbedContainerStyled>
    )
}
