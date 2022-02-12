import styled from 'styled-components'

import { TextField } from '@mui/material'

export const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  position: relative;
`

export const Input = styled(TextField)`
  height: 40px;
  width: 100%;
  input {
    width: 100%;
    background-color: white;
    border-radius: 68px;
    height: 7px;
  }

  fieldset {
    outline: none;
    border: none;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  cursor: pointer;
`
