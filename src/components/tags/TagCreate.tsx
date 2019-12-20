import React from 'react';
import {
  Create, SimpleForm, TextInput,
} from 'react-admin';

const TagCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="destination" />
      <TextInput source="type" />
      <TextInput source="start" />
      <TextInput source="end" />
    </SimpleForm>
  </Create>
);
export default TagCreate;
