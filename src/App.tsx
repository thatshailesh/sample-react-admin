import React from 'react';
import { Admin, Resource } from 'react-admin';
// import logo from './logo.svg';
import './App.css';
// import jsonServerProvider from 'ra-data-json-server';
import TagList from './components/tags/TagList';
// import TagList from './components/tags';
import dataProvider from './api/dataProvider';

import TagCreate from './components/tags/TagCreate';
import TagEdit from './components/tags/TagEdit';


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tags" create={TagCreate} list={TagList} edit={TagEdit} />
  </Admin>
);

export default App;
