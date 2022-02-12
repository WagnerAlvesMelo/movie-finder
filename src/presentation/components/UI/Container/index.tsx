import React, { CSSProperties } from 'react'

import * as S from './styles'

type ContainerProps = {
  children: React.ReactNode
  style?: CSSProperties
  contentStyle?: CSSProperties
}

export default function Container({
  children,
  style,
  contentStyle,
}: ContainerProps) {
  return (
    <S.Container style={style}>
      <S.Content style={contentStyle}>{children}</S.Content>
    </S.Container>
  )
}
