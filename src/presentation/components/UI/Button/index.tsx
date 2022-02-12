import React from 'react'

import { ButtonProps } from '@mui/material'

import * as S from './styles'

export default function Button(props: ButtonProps) {
  return <S.Wrapper {...props} />
}
