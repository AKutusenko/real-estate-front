import React from 'react';
import { Table, Title, Wrapper } from './styles';
import Card from './components/card';
import { CardTypes } from './components/card/types';
import { useGetCardsQuery } from 'store/api/cardsApi';

export default function Gallery(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataBackup = [
    {
      id: 1,
      name: 'The Marina Torch',
      imageUrl: 'https://i.ibb.co/BwX04W3/Rectangle-274-2.jpg',
      generalPrice: '6 500 000',
      oneTicketPrice: '60 000',
      rate: '9.25',
      timeLeft: '150',
      sold: '75',
    },
    {
      id: 2,
      name: 'HHHR Tower',
      imageUrl: 'https://i.ibb.co/RY3j4gG/Rectangle-274-1.jpg',
      generalPrice: '6 500 000',
      oneTicketPrice: '60 000',
      rate: '9.25',
      timeLeft: '150',
      sold: '75',
    },
    {
      id: 3,
      name: 'Ocean peaks',
      imageUrl: 'https://i.ibb.co/1JM6WBx/Rectangle-274-3.jpg',
      generalPrice: '6 500 000',
      oneTicketPrice: '60 000',
      rate: '9.25',
      timeLeft: '150',
      sold: '75',
    },
    {
      id: 4,
      name: 'Al Yaqoub Tower',
      imageUrl: 'https://i.ibb.co/GfmGtRG/Rectangle-274.jpg',
      generalPrice: '6 500 000',
      oneTicketPrice: '60 000',
      rate: '9.25',
      timeLeft: '150',
      sold: '75',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data = dataBackup, error, isLoading } = useGetCardsQuery('');

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
