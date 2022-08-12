/* eslint-disable react/function-component-definition */
import { useState } from 'react'

export default function useInputRequired(type, currentValue, setErrorMessage) {
  const [value, setValue] = useState('')
  const [placeholder, setError] = useState(currentValue)
  const minLengthPassword = 8

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value) setError('Required field')
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
