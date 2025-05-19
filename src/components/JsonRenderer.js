import React from 'react';

const JsonRenderer = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default JsonRenderer;
