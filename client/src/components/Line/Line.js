import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; //
import Button from '@material-ui/core/Button';
import './Line.scss';

const Line = ({ data }) => {
  const toggleButton = (data) => {
    fetch('http://localhost:9000/testAPI', {
      method: 'POST',
      body: {
        id: data.id,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };
  return (
    <Typography className='line'>
      <div className='first-column'>
        <div className='name'>{data.name}</div>
        <div className='description'>{data.description}</div>
      </div>
      <div className='second-column'>
        <div className='promocode-label'>PROMOCODE</div>
        <input
          className='promocode-input'
          type='text'
          placeholder={data.promo_code}
        ></input>
      </div>
      <div className='third-column'>
        <Button
          style={{
            height: '50px',
            marginTop: '15px',
            backgroundColor: ' #0085FF',
            color: '#fff',
          }}
          variant='contained'
          onClick={() => toggleButton(data)}
        >
          {data.has_bonus ? 'Activated' : 'Activate bonus'}
        </Button>
      </div>
    </Typography>
  );
};

export default Line;
