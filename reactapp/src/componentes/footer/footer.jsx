import React from 'react'
import Facebook from '@mui/icons-material/Facebook'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
      >
        <Facebook />
        <Box sx={{ ml: 1 }}>
          <p>RunApp/2021</p>
        </Box>
      </Box>
    </>
  )
}

export default Footer
