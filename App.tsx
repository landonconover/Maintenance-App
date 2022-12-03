import * as React from 'react';
import './style.css';

import List from './Components/List';

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

const items: Item[] = [
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
];

export default function App() {
  return (
    <div>
      <List header={'Daily'} freq={Freq.Daily} items={items} />
      <List header={'Weekly'} freq={Freq.Weekly} items={items} />
      <List header={'Yearly'} freq={Freq.Yearly} items={items} />
    </div>
  );
}
