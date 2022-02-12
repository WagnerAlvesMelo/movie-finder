import styled, { css } from 'styled-components'

import HomeBg from '../../assets/backgrounds/Home-Bg.png'
import HomeWideBg from '../../assets/backgrounds/Home-Wide-Bg.png'

const wrapperModifiers: Record<string, any> = {
  '/': () => css`
    background-image: url(${HomeBg});

    @media screen and (min-width: 480px) {
      background-image: url(${HomeWideBg});
    }
  `,
}

export const Wrapper = styled.div<{ location: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  ${({ location }) => {
    return wrapperModifiers[location]
  }}
`

export const Content = styled.div``
