import styled from 'styled-components';
import backgroundImg from './imgs/1.jpeg';

export const Wrapper = styled.section`
	background: url(${backgroundImg});
	height: 1024px;
	width: 100%;
  background-blend-mode: multiply;
	background-color: rgba(23,38,52,.7);
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
`

export const Title = styled.h1`
	font-weight: 700;
	font-size: 64px;
	font-family: Merriweather;
	margin: 10px;
	margin-top: 335px;
`

export const Mission = styled.h3`
	font-family: Lato;
	font-size: 24px;
	line-height: 32px;
	font-weight: 400;
	width: 822px;
	text-align: center;
`

export const HeroBtn = styled.button`
	padding: 15px;
	margin-top: 30px;
	font-family: Merriweather;
	font-size: 20px;
	font-weight: 600;
	background: rgba(0,0,0,0);
	color: #fff;
	width: 175px;
	heigth: 54px;
	border: 1px solid #fff;
	border-radius: 5px;
	cursor: pointer;
	transition: box-shadow 200ms ease;
  
    &:hover,
     focus {
      background: rgba(0,0,0,0);
	    color: #3a7999;
	    box-shadow: inset 0 0 0 3px #3a7999;
     }
`