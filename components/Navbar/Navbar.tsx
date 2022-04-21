import React from 'react'
import { AppBar,Typography,Link  } from '@mui/material'
import useStyles from './styles'

export default function Navbar() {
    const classes = useStyles()
  return (
    <div>
        <AppBar className={classes.root}  >
            <div className='navbar__container '>
               <Link className={classes.link}  > <Typography variant='body1'>Trending</Typography></Link>
            <Link  className={classes.link}  ><Typography variant='body1'>Houses/Rent</Typography></Link>
            <Link className={classes.link} > <Typography  variant='body1'>Best Sellers</Typography></Link>
            </div>
        </AppBar>
    </div>
  )
}
