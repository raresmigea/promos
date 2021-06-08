import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Search.scss';

const Search = ({ data }) => {
  const toggleButton = (data) => {
    console.log('data: ', data);
  };
  return (
    <div>
      <div className='services-title'>Services</div>{' '}
      <div>
        <input className='input-search' type='text' placeholder='search' />
        <Button onClick={() => toggleButton(data)}>reset</Button>
      </div>
    </div>
  );
};

export default Search;
