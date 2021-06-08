import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Line from './Line';
import Title from './Title';
import Search from './Search';
import './Retrieve.scss';

const Retrieve = () => {
  const [apiResponse, setApiResponse] = useState([]);
  // const [loading, setLoading] = useState(true);

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then((response) => response.json())
      .then((data) => setApiResponse(data));
  };

  useEffect(() => {
    callAPI();
    // setLoading(false);
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
