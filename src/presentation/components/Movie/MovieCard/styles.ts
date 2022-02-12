import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 156.25%;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
`

export const MovieImage = styled.img`
  opacity: 1;
  animation: ${fadein} 1s ease-in-out;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, #000000 98.96%);
  animation: ${fadein} 0.2s ease-out;
  display: flex;
  flex-direction: column;
  margin-top: 100%;
  text-align: left;
  align-items: center;
  color: white;
  padding: 12px;
  z-index: 10;
  bottom: 0;

  button {
    width: 100%;
    cursor: pointer;
  }
`

export const OverlayContent = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  span {
    font-weight: 300;
    display: inline-block;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    line-height: 1.6rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    padding-right: 10px;
  }
`

export const MovieOverview = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 6px;

  &:nth-child(odd) {
    background-color: rgba(44, 44, 44, 0.4);
  }
`
