import React, { useEffect } from 'react';

const IndexPage = () => {
  useEffect(function redirect() {
    window.location.href = 'https://summit.nextflow.io/2024/boston/register/';
  }, []);

  return null;
};

export default IndexPage;
