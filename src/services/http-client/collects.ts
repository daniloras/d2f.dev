import { api } from 'services/api'

export const getCollects = () =>
  api
    .get('/collects')
    .then((response) => response.data)
    .catch((error) => error.message)
