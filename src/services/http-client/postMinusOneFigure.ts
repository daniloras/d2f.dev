import { api } from 'services/api'

export const postMinusOneFigure = (squadUserId: string) =>
  api
    .post(`/world-cup/minus-one-figure`, { squadUserId: squadUserId })
    .then((response) => response.data)
    .catch((error) => error.message)
