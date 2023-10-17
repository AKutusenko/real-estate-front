import styled from "styled-components";

export const Wrapper = styled.header`
  height: 80px;
  width: 1440px;
  background: #172234;
  font-family: Merriweather;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
	position: absolute;	
`

export const Logo = styled.a`
  font-size: 28px;
  font-weight; 400;
  color: #fff;
  text-decoration: none;
  transition: color 200ms ease;
  
  &:hover,
  focus {
    background: rgba(0,0,0,0);
	  color: #3a7999;
	  color: inset 0 0 0 3px #3a7999;
`

export const LinkWrapper = styled.div`
  display: flex;
`

export const LoginLink = styled.a`
  text-decoration: none;
  padding: 13px 0;
  text-align: center;
  width: 160px;
  height: 44px;
  font-weight: 700;
  color: #B29F7E;
  border: 1px solid #B29F7E;
  border-radius: 5px;
  background: #172234;
  margin-right: 10px;
  cursor: pointer;
  transition: box-shadow 200ms ease;
  
  &:hover,
  focus {
    background: rgba(0,0,0,0);
	  color: #3a7999;
	  box-shadow: inset 0 0 0 3px #3a7999;
  }
`
export const LogOutBtn = styled.button`
  text-decoration: none;
  padding: 13px 0;
  text-align: center;
  width: 160px;
  height: 44px;
  font-weight: 700;
  color: #B29F7E;
  border: 1px solid #B29F7E;
  border-radius: 5px;
  background: #172234;
  margin-right: 10px;
  cursor: pointer;
  transition: box-shadow 200ms ease;
  
  &:hover,
  focus {
    background: rgba(0,0,0,0);
	  color: #3a7999;
	  box-shadow: inset 0 0 0 3px #3a7999;
  }
`
export const SignUpLink = styled.a`
  text-decoration: none;
  padding: 13px 0;
  text-align: center;
  width: 160px;
  height: 44px;
  font-weight: 700;
  color: #fff;
  background: #B29F7E;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: box-shadow 200ms ease;
  
  &:hover,
  focus {
    background: rgba(0,0,0,0);
	  color: #3a7999;
	  box-shadow: inset 0 0 0 3px #3a7999;
  }
`