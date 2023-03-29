import { api } from 'services/api'

export const getResumeCategory = (category: string) =>
  api
    .get(`/resume-category?category=${category}`)
    .then((response) => response.data)
    .catch((error) => error.message)
