import styled from "styled-components";
import backgroundImg from './images/404.jpeg';

export const NotFoundItem = styled.section`
  background: no-repeat url(${backgroundImg});
  background-position: center center;
	height: 1024px;
	width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 630px;
`

export const GoHomeButton = styled.a`
text-decoration: none;
text-align: center;
padding: 13px 0;
text - align: center;
width: 160px;
height: 44px;
font - weight: 700;
color: #000000;
border: 1px solid #000000;
border-radius: 5px;
background: #fff;
margin - right: 10px;
cursor: pointer;
transition: all 200ms ease;
  
  &: hover,
  focus {
  background: rgba(0, 0, 0, 0)
  color: #3a7999;
  box-shadow: inset 0 0 0 3px #3a7999;
`