import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './Search.scss';

const Search = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(`State: ${input}`);
  }, [input]);

  function handleClick() {
    setInput('');
  }

  function handleInput(e) {
    const {
      target: { value },
    } = e;
    setInput(value);
  }
  return (
    <div>
      <div className='services-title'>Services</div>
      <div>
        <input
          onChange={handleInput}
          className='input-search'
          type='text'
          placeholder='search'
          value={input}
        />

        <Button onClick={handleClick}>reset</Button>
      </div>
    </div>
  );
};

export default Search;
