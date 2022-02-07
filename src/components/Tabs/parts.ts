import styled from 'styled-components'

interface TabPaneProps {
    activeKey: string;
    id: string
}

// export const TabPane = styled.div.attrs<TabPaneProps>(() => ({
//
// }))<TabPaneProps>`
//   display: ${({activeKey, id }) => activeKey === id ? "flex" : "none"};
//   width: 100%;
// `;

export const TabPane = styled.div`
  display: flex;
  width: 100%;
`


export const TabbedContainerStyled = styled.div`
  margin: 40px auto;
  background: #f8efe6;
  padding: 10px 5px;
  font-size: 20px;
  max-width: 960px;

 

  @media (max-width: 576px) {
    font-size: 16px;
    margin: 10px 0
  }
`
