// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ReactNode } from 'react'

interface ComponentButtonInterface {
  id: string
  className?: string
  label?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  loading?: boolean
  children?: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any
}

const Button: React.FC<ComponentButtonInterface> = ({
  id,
  className = '',
  label = '',
  type,
  loading = false,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      id={id}
      className={className}
      type={type}
      disabled={loading}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={onClick as any}
      {...rest}
    >
      {label} {children}
    </button>
  )
}

export default Button
