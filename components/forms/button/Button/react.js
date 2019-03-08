import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Button = ({
  children, onClick, variant, size, uppercase, fullWidth,
}) => {
  const classes = cx(['btn'], {
    'btn--light': variant === 'light',
    'btn--dark': variant === 'dark',
    'btn--uppercase': uppercase,
    'btn--sm': size === 'small' || size === 'sm',
    'btn--full-width': fullWidth,
  })

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['small', 'sm']),
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  onClick: null,
  variant: null,
  size: null,
  uppercase: false,
  fullWidth: false
}

export default Button
