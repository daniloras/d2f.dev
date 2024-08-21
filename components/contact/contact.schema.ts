import { z } from 'zod'

export const formSchema = z.object({
  name: z.string({
    required_error: 'O nome é obrigatório.',
    invalid_type_error: 'O nome deve ser um texto.',
  }),
  email: z.string({
    required_error: 'O e-mail é obrigatório.',
    invalid_type_error: 'O e-mail deve ser um texto.',
  }).email({ message: 'O e-mail deve ser válido.' }),
  phone: z.string({
    required_error: 'O telefone é obrigatório.',
    invalid_type_error: 'O telefone deve ser um texto.',
  }),
  message: z.string({
    required_error: 'A mensagem é obrigatória.',
    invalid_type_error: 'A mensagem deve ser um texto.',
  }),
})