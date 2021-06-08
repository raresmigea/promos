import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Search.scss';

const Search = ({ e }) => {
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
          onKeyUp={handleInput}
          className='input-search'
          type='text'
          placeholder='search'
        />

        <Button onClick={handleClick}>reset</Button>
      </div>
    </div>
  );
};

export default Search;
