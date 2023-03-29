import { api } from 'services/api'

export const postPlusOneFigure = (squadUserId: string) =>
  api
    .post(`/world-cup/plus-one-figure`, { squadUserId: squadUserId })
    .then((response) => response.data)
    .catch((error) => error.message)
