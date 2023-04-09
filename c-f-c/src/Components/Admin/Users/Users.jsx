import { RiDeleteBin7Fill } from 'react-icons/ri';
import Sidebar from '../Sidebar'
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const Users = () => {

  const updateHandler = (id)  => {
    
  }

  const deleteButtonHandler = (id)  => {

  }

  const users = [{
     _id : "id1id1iid1id1id1i",
     name : "Abhii",
     role : "admin",
     email  : "abhi@gmail.com",
     subscription : {
      status :  "active" 
     },
  }]


  return (
    <div>
      <Grid minH = {'100vh'} 
      templateColumns={['1fr','5fr 1fr']}>
        <Box  p = {['0', '16']} overflowX="auto">

        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']} />  

        <TableContainer w = {['100vw', 'full']}>
              <Table variant={'simple'} size="lg">
                <TableCaption>  
                  All available users in the database
                </TableCaption>

                    <Thead>
                      <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th>Subscription</Th>
                        <Th isNumeric>Action</Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {users &&
                        users.map(item => (
                          <Row 
                            updateHandler = {updateHandler}
                            deleteButtonHandler={deleteButtonHandler}
                            key={item._id}
                            item={item}
                          />
                        ))}
                    </Tbody>
              </Table>
        </TableContainer>

          </Box>
        <Sidebar />
      </Grid>
    </div>
  )
}

export default Users


const Row = ({item  , updateHandler , deleteButtonHandler }) => 
{
   return (
    <Tr>
       <Td> # {item._id} </Td>
       <Td>  {item.name} </Td>
       <Td>  {item.email} </Td>
       <Td>  {item.role} </Td>
       <Td> 
          {item.subscription.status === "active" ? "Active" : "Not Active" }
       </Td>

     <Td isNumeric>
      <HStack justifyContent = {'flex-end'}>
           <Button onClick = {() =>  updateHandler(item._id)}  variant={'outline'} color = 'purple.500'>
              Change Role
           </Button>
           <Button color = 'purple.600'>
              <RiDeleteBin7Fill />
           </Button>
      </HStack>
     </Td>
    </Tr>
   )
}