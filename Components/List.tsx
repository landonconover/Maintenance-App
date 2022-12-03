import * as React from 'react';
import dayjs from 'dayjs';

export default function List({ header, freq, items }) {
  return (
    <div>
      <h1>{header}</h1>
      <ul>
        {items
          .filter((item) => item.freq === freq)
          .map((item) => (
            <li key={item.id}>
              {item.text} - {dayjs(item.due).format('dddd - MMM.DD.YYYY')}
            </li>
          ))}
      </ul>
    </div>
  );
}
