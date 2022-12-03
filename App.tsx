import React, { useState } from 'react';
import dayjs from 'dayjs';
import './style.css';

import List from './Components/List';
import NewItem from './Components/NewItem';

enum Freq {
  Daily = 'DAILY',
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Yearly = 'YEARLY',
}

type Item = {
  id: number;
  text: string;
  freq: Freq;
  due: Date;
  complete: boolean;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 0,
      text: 'Pickup Clutter',
      freq: Freq.Daily,
      due: new Date(2022, 12, 3),
      complete: true,
    },
    {
      id: 1,
      text: 'Vaccum Front Room',
      freq: Freq.Weekly,
      due: new Date(2022, 12, 5),
      complete: false,
    },
    {
      id: 2,
      text: 'Clean Toilet',
      freq: Freq.Weekly,
      due: new Date(2022, 12, 5),
      complete: false,
    },
    {
      id: 3,
      text: 'Empty Water Heater',
      freq: Freq.Yearly,
      due: new Date(2023, 1, 1),
      complete: false,
    },
  ]);

  const onSubmit = (data) => {
    const newItems: Item[] = [
      {
        id: items.length + 1,
        text: data.text,
        freq: data.freq,
        due: dayjs(data.due).toDate(),
        complete: false,
      },
      ...items,
    ];

    setItems(newItems);
  };

  const itemComplete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }

      return item;
    });

    setItems(newItems);
  };

  return (
    <div>
      <NewItem getData={onSubmit} />

      {items.some((item) => item.freq === 'DAILY') ? (
        <List
          handleClick={itemComplete}
          header={'Daily'}
          freq={Freq.Daily}
          items={items}
        />
      ) : (
        ''
      )}
      {items.some((item) => item.freq === 'WEEKLY') ? (
        <List
          handleClick={itemComplete}
          header={'Weekly'}
          freq={Freq.Weekly}
          items={items}
        />
      ) : (
        ''
      )}
      {items.some((item) => item.freq === 'MONTHLY') ? (
        <List
          handleClick={itemComplete}
          header={'Monthly'}
          freq={Freq.Monthly}
          items={items}
        />
      ) : (
        ''
      )}
      {items.some((item) => item.freq === 'QUARTERLY') ? (
        <List
          handleClick={itemComplete}
          header={'Quarterly'}
          freq={Freq.Quarterly}
          items={items}
        />
      ) : (
        ''
      )}
      {items.some((item) => item.freq === 'YEARLY') ? (
        <List
          handleClick={itemComplete}
          header={'Yearly'}
          freq={Freq.Yearly}
          items={items}
        />
      ) : (
        ''
      )}
    </div>
  );
}
