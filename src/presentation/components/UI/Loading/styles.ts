import styled from 'styled-components'

export const bg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  z-index: 999;
`

export const Wrapper = styled.div`
  transform-origin: center;
  width: 50px;
  min-height: 50px;
  box-shadow: 0px 4px 9px 2px rgba(0, 0, 0, 0.25);
  border-radius: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  align-items: center;
  text-align: center;
  z-index: 999;
`
