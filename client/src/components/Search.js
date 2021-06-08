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
    // <Typography className='line'>
    //   <div className='first-column'>
    //     <div className='name'>{data.name}</div>
    //     <div className='description'>{data.description}</div>
    //   </div>
    //   <div className='second-column'>
    //     <div className='promocode-label'>PROMOCODE</div>
    //     <input
    //       className='promocode-input'
    //       type='text'
    //       placeholder={data.promo_code}
    //     ></input>
    //     {/* <div>{data.has_bonus}</div> */}
    //   </div>
    //   <div className='third-column'>
    //     <Button className='button' onClick={() => toggleButton(data)}>
    //       {data.has_bonus ? 'Activated' : 'Activate bonus'}
    //     </Button>
    //   </div>
    // </Typography>
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
