import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

const Retrieve = () => {
  const [apiResponse, setApiResponse] = useState('');

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
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callAPI();
  });

  return (
    <React.Fragment>
      <Container
        // maxWidth='sm'
        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}
      >
        {apiResponse}
      </Container>
    </React.Fragment>
  );
};

export default Retrieve;
