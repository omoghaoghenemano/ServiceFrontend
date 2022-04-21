import React from 'react'
import { AppBar,Typography  } from '@mui/material'
import useStyles from './styles'
export default function Navbar() {
    const classes = useStyles()
  return (
    <div>
        <AppBar className={classes.navbar}  >
            <Typography variant='h2'>Hello from cyplusmega</Typography>
        </AppBar>
    </div>
  )
}
