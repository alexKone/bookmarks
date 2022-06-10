import React from 'react';
import './App.css';
import ListBookmarks from './components/ListBookmarks';
// import Filter from './components/Filter';
import Form from './components/Form';

function App() {
  return (
    <div>
      <header>BOOKMARKS APP</header>
      {/* <Filter /> */}
      <Form />
      <ListBookmarks />
    </div>
  );
}

export default App;
