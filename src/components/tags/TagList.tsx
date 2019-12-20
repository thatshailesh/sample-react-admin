import React from 'react';
import {
  List, Datagrid, TextField,
} from 'react-admin';

const TagList = (props) => (
  <List label="List" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" key="id" />
      <TextField source="destination" key="destination" />
      <TextField source="type" key="type" />
      <TextField source="start" key="start" />
      <TextField source="end" key="end" />
    </Datagrid>
  </List>
);

export default TagList;
