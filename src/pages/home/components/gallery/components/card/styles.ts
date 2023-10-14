import styled from "styled-components";

export const CardItem = styled.div`
  width: 630px;
  heigth: 400px;
  position: relative;
  color: #fff;
  margin-bottom: 20px;

  &:nth-child(even){
      margin-left: 20px;
    }
`

export const CardTitle = styled.span`
  font-family: Merriweather;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  position: absolute;
  top: 288px;
  left: 14px;
`

export const CardText = styled.span`
  font-family: Lato;
  font-weight: 400;
  line-height: 22px;
  font-size: 18px;
  margin-right: 62px;
  margin-top: 5px;
  width: 170px;
`

export const Image = styled.img`
  width: 100%;
  heigth: 100%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 326px;
  left: 14px;
  margin-right: -82px;
`