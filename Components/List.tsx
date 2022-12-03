import * as React from 'react';
import * as dayjs from 'dayjs'

export default function List({ header, freq, items }) {
  console.log(dayjs)
  return (
    <div>
      <h1>{header}</h1>
      <ul>
        {items
          .filter((item) => item.freq === freq)
          .map((item) => (
            <li>{item.text} - {"date"}</li>
          ))}
      </ul>
    </div>
  );
}
