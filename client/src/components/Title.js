import React, { useEffect, useState } from 'react';
import './Title.scss';

const Title = () => {
  return (
    <div className='title'>
      <div className='column-one'>
        <div className='key'>Balance</div>
        <div className='value'>213 920 $</div>
      </div>
      <div>
        <div className='key'>Payout</div>
        <div className='value'>159 465 $</div>
      </div>
    </div>
  );
};

export default Title;
