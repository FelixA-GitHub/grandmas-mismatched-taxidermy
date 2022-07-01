import React from 'react';
import Button from 'react-bootstrap/Button';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Button variant="primary">
         Primary Button
        </Button>

    </>
  );
}

export default App;
