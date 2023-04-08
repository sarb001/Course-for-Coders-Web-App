import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'

const Users = () => {
  return (
    <div>
      <Grid minH = {'100vh'} 
      templateColumns={['1fr','5fr 1fr']}>
        <Box> </Box>
        <Sidebar />
      </Grid>
    </div>
  )
}

export default Users