import Text from 'components/Text'
import React, { useCallback } from 'react'
import { ComponentFormInputInteface } from 'utils/interface'
import {
  maskCPF,
  maskCurrencyBRL,
  maskDateBRL,
  maskMobile,
  maskPhone,
  maskPostalCode
} from 'utils/masks'

const Input: React.FC<ComponentFormInputInteface> = ({
  name,
  type = 'text',
  label,
  placeholder = 'Preencha esse campo',
  register,
  error,
  size = 'lg',
  mask,
  ...rest
}) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case 'maskPostalCode':
          maskPostalCode(e)
          break
        case 'maskDateBRL':
          maskDateBRL(e)
          break
        case 'maskCurrencyBRL':
          maskCurrencyBRL(e)
          break
        case 'maskCPF':
          maskCPF(e)
          break
        case 'maskMobile':
          maskMobile(e)
          break
        case 'maskPhone':
          maskPhone(e)
          break
        default:
          break
      }
    },
    [mask]
  )

  return (
    <>
      <Text
        label={label}
        color={error ? 'danger' : 'dark'}
        size="small"
        weight={500}
        className=""
      />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        size={size}
        className={error ? 'invalidForm' : ''}
        onKeyUp={handleKeyUp}
        {...register(name)}
        {...rest}
      />
      {error && (
        <Text
          label={error ? error.toString() : ''}
          color="danger"
          size="xsmall"
          weight={300}
          className=""
        />
      )}
    </>
  )
}

export default Input
