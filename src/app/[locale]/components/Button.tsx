import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  className,
  ...props
}) => {
  const sizeStyles = {
    small: 'px-2 py-2 text-sm',
    medium: 'px-4 py-2 text-base font-semibold',
    large: 'px-6 py-3 text-lg font-semibold'
  }

  const baseStyles = `rounded focus:outline-none focus:shadow-outline ${rounded ? 'rounded-full' : ''}`
  
  const buttonStyles = `${baseStyles} ${sizeStyles[size]}  ${className}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
