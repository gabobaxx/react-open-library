import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './App.jsx';
// Test Data
import data from './data.json';

const headings = ['When', 'Who', 'Description'];

ReactDOM.render(
  <App data={data} title="React Open Library" headings={headings} />,
  document.getElementById('root')
);
