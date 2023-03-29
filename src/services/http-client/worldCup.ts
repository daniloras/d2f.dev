import { api } from 'services/api'

export const getWorldCupByYear = (year: number, token: string) =>
  api
    .get(`/world-cup?year=${year}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then((response) => response.data)
    .catch((error) => error.message)
