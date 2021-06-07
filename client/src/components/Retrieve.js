import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Line from './Line';
import './Retrieve.scss';

const Retrieve = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const url = 'http://localhost:9000/testAPI';
  //       const response = await fetch(url);
  //       console.log('response: ', response);
  //       const result = await response.json();
  //       console.log('result: ', result);
  //       setApiResponse(result);
  //     }
  //     fetchData();
  //   }, []);

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then((response) => response.json())
      .then((data) => setApiResponse(data));
  };

  useEffect(() => {
    callAPI();
    setLoading(false);
  }, [loading]);
  return (
    <div>
      <Typography className='typography'>aaa</Typography>
      <Container style={{ backgroundColor: '#E5E5E5' }}>
        {apiResponse.map((a) => (
          <Line data={a} />
        ))}
      </Container>
    </div>
  );
};

export default Retrieve;
