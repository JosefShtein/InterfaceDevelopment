import React from 'react';

const JsonRenderer = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default JsonRenderer;
