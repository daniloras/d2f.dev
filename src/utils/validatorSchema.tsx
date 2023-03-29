import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const schemaGeneratorDefault = yup.object().shape({
  number: yup.object().shape({
    label: yup.string().required(),
    value: yup.number().min(1).max(25).required()
  })
})

export const schemaValidatorDefault = yup.object().shape({
  value: yup.string().required()
})
