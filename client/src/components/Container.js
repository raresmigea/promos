import React, { useEffect, useState } from 'react';

const Container = () => {
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

  return <div>test: {apiResponse}</div>;
};

export default Container;
