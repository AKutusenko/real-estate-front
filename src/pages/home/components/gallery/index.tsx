import React from 'react';
import { Table, Title, Wrapper } from './styles';
import Card from './components/card';
import { CardTypes } from './components/card/types';
import { useGetCardsQuery } from '../../../../store/api/cardsApi';

export default function Gallery(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data = [], error, isLoading } = useGetCardsQuery('');

  return (
    <Wrapper>
      <Title>Open Deals</Title>
      <Table>
        {data.map((el: CardTypes) => (
          <Card
            key={el.id}
            name={el.name}
            imageUrl={el.imageUrl}
            generalPrice={el.generalPrice}
            oneTicketPrice={el.oneTicketPrice}
            rate={el.rate}
            timeLeft={el.timeLeft}
            sold={el.sold}
          />
        ))}
      </Table>
    </Wrapper>
  );
}
