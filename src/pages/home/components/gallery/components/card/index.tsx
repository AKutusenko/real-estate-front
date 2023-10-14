import React from 'react';
import { CardItem, CardText, CardTitle, Image, TextWrapper } from './styles';
import { CardTypes } from './types';

export default function Card({
  name,
  imageUrl,
  generalPrice,
  oneTicketPrice,
  rate,
  timeLeft,
  sold,
}: CardTypes): JSX.Element {
  return (
    <CardItem>
      <Image src={imageUrl}></Image>
      <CardTitle>{name}</CardTitle>
      <TextWrapper>
        <CardText>{generalPrice} Dhs</CardText>
        <CardText>Yield {rate}%</CardText>
        <CardText>Sold {sold}%</CardText>
        <CardText>Ticket - {oneTicketPrice} Dhs</CardText>
        <CardText>Days left {timeLeft}</CardText>
      </TextWrapper>
    </CardItem>
  );
}
