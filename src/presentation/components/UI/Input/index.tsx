import React from 'react'

// Types
import { TextFieldProps } from '@mui/material'

// Styles
import * as S from './styles'

export default function TextField({
  ...props
}: TextFieldProps & { icon?: React.ReactNode }) {
  return (
    <S.Wrapper>
      <S.Input autoComplete='off' id={props.id} {...props} />
      {props.icon}
    </S.Wrapper>
  )
}
