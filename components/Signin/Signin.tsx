
import React from 'react'
import {Button, TextField} from '@mui/material'
import {StyledButton, StyledButtonGoogle,StyledTextField} from './styles'

type Props = {}

function Signin({}: Props) {
  return (
    <div>
        <StyledButton>Facebook</StyledButton>
        <StyledButtonGoogle>Google</StyledButtonGoogle>
        <StyledTextField type='text' size='small' label="username"/>
        <StyledTextField type='password' size='small' label="password"/>

    </div>
  )
}

export default Signin