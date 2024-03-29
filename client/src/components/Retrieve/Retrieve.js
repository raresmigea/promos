import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Line from '../Line/Line';
import Title from '../Title/Title';
import Search from '../Search/Search';
import './Retrieve.scss';

const Retrieve = () => {
  const [apiResponse, setApiResponse] = useState([]);

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then((response) => response.json())
      .then((data) => setApiResponse(data));
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div className='main-page'>
      <div className='left-side'></div>
      <div className='right-side'>
        <Title />
        <Container
          className='promos-container'
          style={{ backgroundColor: '#E5E5E5' }}
        >
          <Search />
          {apiResponse.map((a) => (
            <Line data={a} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Retrieve;
