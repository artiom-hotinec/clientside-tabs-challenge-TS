import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const TabTitleWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const  TabTitle = styled.li`
       color: black;
       text-decoration: none;
       flex-grow: 1;
       text-align: center;
       padding: 10px 0;
  
  &.Active{
    background:white;
  }
`