
import { useState, useEffect } from "react"

import { Box, Fade, Modal, Paper, Typography } from "@mui/material"

// make login reusable 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',




 
};
const LoginModal = (props) => {
    
    return (


        <Modal
        open={props.OpenModalForm}
          onClose={props.CloseModalForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > 
          

          <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      For woke
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      I will be rich
    </Typography>
  </Box>
          
        </Modal>
    
  
    )
  }
  export default LoginModal