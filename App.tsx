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
};

export default function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      text: 'Pickup Clutter',
      freq: Freq.Daily,
      due: new Date(2022, 12, 3),
    },
    {
      id: 1,
      text: 'Vaccum Front Room',
      freq: Freq.Weekly,
      due: new Date(2022, 12, 5),
    },
    {
      id: 2,
      text: 'Clean Toilet',
      freq: Freq.Weekly,
      due: new Date(2022, 12, 5),
    },
    {
      id: 3,
      text: 'Empty Water Heater',
      freq: Freq.Yearly,
      due: new Date(2023, 1, 1),
    },
  ]);

  const onSubmit = (data) => {
    const newItems = [
      {
        id: items.length + 1,
        text: data.text,
        freq: data.freq,
        due: dayjs(data.due).toDate(),
      },
      ...items,
    ];

    console.log(newItems);

    setItems(newItems);
  };
  return (
    <div>
      <NewItem getData={onSubmit} />

      {items.some(item => item.freq === "DAILY") ? 
        <List header={'Daily'} freq={Freq.Daily} items={items} /> : ""}
      {items.some(item => item.freq === "WEEKLY") ? 
        <List header={'Weekly'} freq={Freq.Weekly} items={items} /> : ""}
      {items.some(item => item.freq === "MONTHLY") ? 
        <List header={'Monthly'} freq={Freq.Monthly} items={items} /> : ""}
      {items.some(item => item.freq === "QUARTERLY") ? 
        <List header={'Quarterly'} freq={Freq.Quarterly} items={items} /> : ""}
      {items.some(item => item.freq === "YEARLY") ? 
        <List header={'Yearly'} freq={Freq.Yearly} items={items} /> : ""}


    </div>
  );
}
