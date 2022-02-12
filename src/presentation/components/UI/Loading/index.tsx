import React from 'react'

import * as S from './styles'

import LoadingGif from '../../../assets/icons/loading.gif'

export default function Loading() {
  return (
    <S.bg>
      <S.Wrapper>
        <img src={LoadingGif} alt='Carregando' width={50} height={50} />
      </S.Wrapper>
    </S.bg>
  )
}
