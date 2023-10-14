import styled from "styled-components";
import backgroundImg from "./images/2.jpeg"

export const MainItem = styled.section`
	display: flex;
	flex-direction: row;
`

export const MainImage = styled.img`
  background: url(${backgroundImg});
	width: 890px;
	height: 943px;
`