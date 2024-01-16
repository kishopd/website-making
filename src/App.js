// ChipComponent.js
import React, { useState, useRef } from 'react';
import './ChipComponent.css'; // Add your styling here

const ChipComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const inputRef = useRef(null);

  const items = [
    { name: 'Sohan Newhan', email: 'sohan@gmail.com' },
    { name: 'Kishore', email: 'kishore@gmail.com' },
    { name: 'Hari', email: 'hari@gmail.com' },
    { name: 'Harish', email: 'harish@gmail.com' },
    { name: 'Hemanth', email: 'hemanth@gmail.com' },
    { name: 'Dinesh', email: 'dinesh@gmail.com' },
    { name: 'Ken Alvarez', email: 'ken@gmail.com' },
    { name: 'Tracy Bing', email: 'Bing@gmail.com' },
    { name: 'Bradely Wells', email: 'bradely@gmail.com' },
    { name: 'Denise Hall', email: 'denise@gmail.com' },
    { name: 'Lettia George', email: 'george@gmail.com' },
    { name: 'Brand Grant', email: 'Grant@gmail.com' },
    { name: 'Tim Hall', email: 'Tim@gmail.com' },
    { name: 'Calvin Jones', email: 'calvin@gmail.com' },
    { name: 'Rolex', email: 'Rolex@gmail.com' },
    { name: 'Dilli', email: 'Dilli@gmail.com' },
    { name: 'Leo Das', email: 'leo@gmail.com' },
    { name: 'Yakshitha', email: 'Yakshita@gmail.com' },
    { name: 'Dharani', email: 'Dharani@gmail.com' },
    { name: 'Yusuf', email: 'yusuf@gmail.com' },
    { name: 'De Villers', email: 'devillers@gmail.com' },
    { name: 'Abinaya', email: 'abi@gmail.com' },
    { name: 'Sourish', email: 'sourish@gmail.com' },
    { name: 'Neeraj Bianin', email: 'neeraj@gmail.com' },
    { name: 'Kamalhasan', email: 'Kamal@gmail.com' },
    { name: 'Senthil', email: 'senthil@gmail.com' },
    { name: 'Banu', email: 'Banu@gmail.com' },
    { name: 'Said', email: 'sai@gmail.com' },
    { name: 'Devi Priya', email: 'devipriya@gmail.com' },
    { name: 'AArish', email: 'aari@gmail.com' },
    { name: 'Tamil', email: 'Tamil@gmail.com' },
    { name: 'Mohana Sundaram', email: 'Mohan@gmail.com' },
    { name: 'Barkavi', email: 'kavi@gmail.com' },
    { name: 'Sathua', email: 'sa@gmail.com' },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setFilteredItems([]);
    } else {
      const filtered = items.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const handleItemSelect = (item) => {
    setChips((prevChips) => [...prevChips, item.name]);
    setInputValue('');
    setFilteredItems(filteredItems.filter((filteredItem) => filteredItem !== item.name));
  };

  const handleChipRemove = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip));
    setFilteredItems((prevFilteredItems) => [...prevFilteredItems, { name: chip, email: '' }]);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Backspace' && inputValue === '' && chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      handleChipRemove(lastChip);
    }
  };

  return (
    <div className="chip-container">
      <div className="chips">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <span className="remove-icon" onClick={() => handleChipRemove(chip)}>
              X
            </span>
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type here..."
        className="input-field"
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} onClick={() => handleItemSelect(item)}>
            <div className="item">
              <span className="name">{item.name}</span>
              <span className="email">{item.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipComponent;
