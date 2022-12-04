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

const freqArray = [Freq.Daily,Freq.Weekly,Freq.Monthly,Freq.Quarterly,Freq.Yearly]

export default function App() {

  function renderLists(items:Item[], freqs) {
    return freqs.map(freq => {
      return items.some((item) => item.freq === freq) ? (
        <List
          handleComplete={itemComplete}
          header={freq}
          freq={freq}
          items={items}
        />
      ) : (
        ''
      )
    })
  }

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

  const onSubmit = ({ text, freq, due }) => {
    const newItems: Item[] = [
      {
        id: items.length + 1,
        text,
        freq,
        due: dayjs(due).toDate(),
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

      {renderLists(items, freqArray)}

    </div>
  );
}
