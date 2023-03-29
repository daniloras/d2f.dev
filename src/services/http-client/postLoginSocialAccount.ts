import { api } from 'services/api'

interface Props {
  payload: PayloadProps
}

interface PayloadProps {
  name: string
  email: string
  provider_id: string
  provider_name: string
  image: string | null
}

export const postLoginSocialAccount = (data: Props) =>
  api
    .post(`/auth/login-social-account`, data.payload)
    .then((response) => response.data)
    .catch((error) => error.message)
