import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: auto;
  flex: 1;
  width: 100%;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: left;

  @media screen and (max-width: 480px) {
    padding: 24px 12px;
  }
`

export const Content = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  width: 100%;
`
