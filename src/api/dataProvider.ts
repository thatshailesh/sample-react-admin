import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:7000/api';

const httpClient = fetchUtils.fetchJson;

export default {
  create: (resource, params) => httpClient(`${apiUrl}/${resource}`, {
    method: 'POST',
    body: JSON.stringify(params.data),
  }).then(({ json }) => ({
    data: { ...params.data, id: json.id },
  })),

  getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
    data: json,
  })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  update: (resource, params) => {
    console.log('UPDATING RESOURCE ->>> ', params);
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: 'PUT',
  }).then(({ json }) => ({ data: json })),
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ headers, json }) => {
      console.log('json ->> ', json);
      return {
        data: json,
        total: 10,
      };
    });
  },


};
