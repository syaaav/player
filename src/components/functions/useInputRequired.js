/* eslint-disable react/function-component-definition */
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function useInputRequired(
  type,
  text,
  currentValue,
  required,
  setErrorMessage
) {
  const [value, setValue] = useState(currentValue)
  const [placeholder, setError] = useState(text)
  const minLengthPassword = 8

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value && required) setError('Required field')
      else setError('')
      if (
        event.target.type === 'password' &&
        event.target.value.length < minLengthPassword
      ) {
        setErrorMessage('Your password must be at least 8 characters')
      }
    },
    placeholder,
    onChange: (event) => setValue(event.target.value),
  }
}

useInputRequired.propTypes = {
  type: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}
