import React from 'react';
import {
  Edit, SimpleForm, TextField, TextInput,
} from 'react-admin';

const TagEdit = (props) => (
  <Edit label="Edit" {...props} title="TAG">
    <SimpleForm redirect="list">
      <TextInput source="id" key="id" />
      <TextInput source="destination" key="destination" />
      <TextInput source="type" key="type" />
      <TextInput source="start" key="start" />
      <TextInput source="end" key="end" />
    </SimpleForm>
  </Edit>
);

export default TagEdit;
