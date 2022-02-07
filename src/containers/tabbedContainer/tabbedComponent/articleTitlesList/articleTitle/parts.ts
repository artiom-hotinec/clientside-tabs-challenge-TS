import styled from 'styled-components'

export const InnerLI = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
  padding: 5px 0 15px;
  @media (max-width: 576px) {
    padding-bottom: 5px;
  }
`

export const Index = styled.span`
  padding-right: 30px;
  display: block;
  width: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  
  @media (max-width: 576px) {
    padding-right: 15px;
    font-size: 12px;
    line-height: 23px
  }
`

export const LinkTitles = styled.a.attrs<{ href: string }>(({href}) => ({
    type: "text",
    href: href,
    target: '_blank',
}))`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline rgba(0, 0, 0, 0.84);
    color: rgba(0, 0, 0, 0.84);
  }
`;

export const HR = styled.hr`
  margin: 0;
  &:last-child{
    background: #72b63b;
  }
`