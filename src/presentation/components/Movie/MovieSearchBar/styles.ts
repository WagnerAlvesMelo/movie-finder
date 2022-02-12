import styled, { css, keyframes } from 'styled-components'

const up = () => keyframes`
  from {
    top: 50%;
    transform: translateY(-50%);
  }

  to {
    top: 0;
    transform: translateY(0);
  }
`

const down = () => keyframes`
  from {
    top: 0;
    transform: translateY(0);
  }

  to {
    top: 50%;
    transform: translateY(-50%);
  }
`

const wrapperModifies = {
  toTop: () => css`
    top: 0;
    background-color: black;
    transform: translateY(0);
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 1));
    img {
      margin: 0 0 16px 0;
      transform: translateX(0);
      margin-top: 24px;
    }
  `,
}

export const Wrapper = styled.form<{ toTop: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  width: 100%;
  flex-direction: column;
  padding-top: 24px;
  max-width: 980px;
  justify-content: center;
  top: 50%;
  margin: 0 auto;
  transform: translateY(-50%);
  transition: all 0.5s;
  animation: ${({ toTop }) =>
    css`
      ${toTop ? up : down} 0.5s ease-in-out
    `};

  @media screen and (max-width: 480px) {
    padding: 0 12px;
    & > div {
      margin: auto;
    }
  }

  @media screen and (max-width: 1030px) and (min-width: 480px) {
    padding: 0 24px;
  }

  ${({ toTop }) => toTop && wrapperModifies.toTop()}
`

export const LogoWrapper = styled.img`
  display: block;
  margin-bottom: 16px;
  transition: 0.5s;
  cursor: pointer;
  width: 180px !important;
  @media screen and (min-width: 480px) {
    transform: translateX(-50%);
    margin-left: 50%;
    width: 400px !important;
  }
`
