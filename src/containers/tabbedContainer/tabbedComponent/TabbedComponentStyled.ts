import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`
export const NavLinkStyled = styled(NavLink)`
       display: inline-block;
       color: black;
       text-decoration: none;
       flex-grow: 1;
       text-align: center;
       padding: 10px 0;
  &.active{
    background:white;
  }
`