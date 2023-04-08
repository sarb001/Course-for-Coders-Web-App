import {
  Box,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import Sidebar from '../Sidebar'

const Dashboard = () => {

  const Bar = ({ title, value, profit }) => {
     return (
      <>
       <Box py="4" px={['0', '20']}>
          <Heading size="sm" children={title} mb="2" />

          <HStack w="full" alignItems={'center'}>
            <Text children={profit ? '0%' : `-${value}%`} />

            <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
            <Text children={`${value > 100 ? value : 100}%`} />
          </HStack>
  </Box>
      </>
     )
  }

  const Databox = ({title,qty,qtyPercentage,profit}) => {
    <Box w = {['full','20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} 
    p = "8" 
    borderRadius = {'lg'}>
      <Text   children = {title} />

      <HStack spacing={'6'}>
        <Text   fontSize={'2xl'} fontWeight='bold' children = {qty} />
            <HStack>
              <Text children = {`${qtyPercentage}%`} />
              { profit ? (
                  <RiArrowUpLine color = 'green' />
              ) : (
                <RiArrowDownLine  color = "red"  />
              ) }
            </HStack>
      </HStack>

    </Box>
  }


  return (
    <div> 
       
    </div>
  )
}

export default Dashboard