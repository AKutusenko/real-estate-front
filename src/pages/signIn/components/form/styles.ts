import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 550px;
	margin-top: 255px;
`

export const FormItem = styled.form`
	font-family: Merriweather;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`

export const Title = styled.h2`
	font-weight: 700;   
	font-size: 28px;
	margin-bottom: 20px;
`

export const Label = styled.label`
	display: block;
	font-weight: 700;   
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 3px;
`

export const Input = styled.input`
	width: 350px;
	height: 48px;
	border-radius: 3px;
	border: none;
	background: #E0E0E0;
	font-family: Lato;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: #172234;
	padding: 0 20px;
	margin-bottom: 20px;
`

export const SubmitBtn = styled.button`
	margin-top: 42px;
	background: #B29F7E;
	color: #fff;
	height: 44px;
	border: none;
  cursor: pointer;
  transition: all 200ms ease;
  
  &:hover,
  focus {
    background: rgba(0,0,0,0);
	  color: #3a7999;
	  box-shadow: inset 0 0 0 3px #3a7999;
  }
`
export const LinkWrapper = styled.div`
	display: flex;
	flex-direction: raw;
	align-items: center;
	justify-content: center;
	font-family: Lato;
	font-weight: 400;
	font-size: 22;
`
export const Link = styled.a`
	margin-left: 6px;
	color: #B29F7E;
	cursor: pointer;
	text-decoration: none;
	transition: color 200ms ease;
  
  &:hover,
  focus {
	  color: #3a7999;
	  color: inset 0 0 0 3px #3a7999;
  }
`

export const ForgotLink = styled.a`
	margin: -10px 0 0 6px;
	color: #B29F7E;
	font-family: Lato;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	text-align: right;
	cursor: pointer;
	text-decoration: none;
	transition: color 200ms ease;
  
  &:hover,
  focus {
	  color: #3a7999;
	  color: inset 0 0 0 3px #3a7999;
  }
`

export const Text = styled.p`
`