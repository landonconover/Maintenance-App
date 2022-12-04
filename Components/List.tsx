import * as React from 'react';
import dayjs from 'dayjs';

export default function List({ header, freq, items, handleComplete }) {


  return (
    <div>
      <h1>{header}</h1>
      <ul>
        {items
          .filter((item) => item.freq === freq)
          .map((item) => (
            <span><li className={item.complete ? "complete": ""} onClick={() => handleComplete(item.id)} key={item.id}>
              {item.text} - {dayjs(item.due).format('dddd - MMM.DD.YYYY')}
            </li><button className="editBtn">Edit</button></span>
          ))}
      </ul>
    </div>
  );
}
