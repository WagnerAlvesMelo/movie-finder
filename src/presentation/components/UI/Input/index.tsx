import React from 'react'

// Types
import { TextFieldProps } from '@mui/material'

// Styles
import * as S from './styles'

type TextFieldComponentProps = TextFieldProps & {
  icon?: React.ReactNode
}

export default function TextField({ ...props }: TextFieldComponentProps) {
  return (
    <S.Wrapper>
      <S.Input autoComplete='off' id={props.id} {...props} />
      <S.IconWrapper>{props.icon}</S.IconWrapper>
    </S.Wrapper>
  )
}
