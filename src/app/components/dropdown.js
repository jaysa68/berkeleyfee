import { useState } from 'react';

export default function Dropdown({ id, items, selectedItem, setSelectedItem }) {
  return (
    <select id={id} value={selectedItem} onChange={e => setSelectedItem(e.target.value)}>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
