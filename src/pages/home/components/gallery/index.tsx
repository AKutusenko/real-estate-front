import React, { useEffect, useState } from 'react';
import { Table, Title, Wrapper } from './styles';
import Card from './components/card';
import { CardTypes } from './components/card/types';
import { CardService } from 'services/cards.service';

export default function Gallery(): JSX.Element {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await CardService.getAll();
      setCards(data);
    } catch (error) {
      return error;
    }
  };

  return cards.length > 0 ? (
    <Wrapper>
      <Title>Open Deals</Title>
      <Table>
        {cards.map((el: CardTypes) => (
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
  ) : (
    <></>
  );
}
