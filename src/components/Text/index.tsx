import React from 'react'
import theme from '../../styles/theme'
import * as S from './styles'
interface Props {
  size?: string
  weight?: 300 | 500 | 700 | 800 | number
  label: string
  color?: string
  className?: string
}
const Text: React.FC<Props> = ({
  size = 'medium',
  weight = 500,
  label,
  color = 'dark',
  className,
  ...rest
}) => {
  return (
    <S.Text
      {...rest}
      className={className}
      size={theme.sizes[size as keyof typeof theme.sizes]}
      weight={weight}
      color={theme.colors[color as keyof typeof theme.colors]}
    >
      {label}
    </S.Text>
  )
}

export default Text
