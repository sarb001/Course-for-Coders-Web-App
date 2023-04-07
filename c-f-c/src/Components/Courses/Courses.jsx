import React, { useState } from 'react'
import { Container , Heading , Input  ,Button , Text , HStack, VStack, Stack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount,loading}) => {
    return(
        <>
                <VStack className="course" alignItems={['center', 'flex-start']}>
                 <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
                    <Heading
                    textAlign={['center', 'left']}
                    maxW="200px"
                    size={'sm'}
                    fontFamily={'sans-serif'}
                    noOfLines={3}
                    children={title}
                    />
                     <Text noOfLines={2} children={description} />

                    <HStack>
                        <Text
                        fontWeight={'bold'}
                        textTransform="uppercase"
                        children={'Creator'}
                        />
                    <Text
                    fontFamily={'body'}
                    textTransform="uppercase"
                    children={creator}
                    />
                    </HStack>

                    <Heading
                    textAlign={'center'}
                    size="xs"
                    children={`Lectures - ${lectureCount}`}
                    textTransform="uppercase"
                    />

                    <Heading
                    size = "xs"
                    children={`Views - ${views}`}
                    textTransform="uppercase"
                    />

                <Stack direction={['column', 'row']} alignItems="center">
                                <Link to={`/course/${id}`}>
                                <Button colorScheme={'yellow'}> Watch Now </Button>
                                </Link>
                    <Button
                    variant={'ghost'}
                    colorScheme={'yellow'}
                    onClick={() => addToPlaylistHandler(id)}
                    >
                    Add to playlist
                    </Button>
                </Stack>
    </VStack>
        </>
    )
}



const Courses = () => {

    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');
    
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const addToPlaylistHandler = (id) => {
        console.log('playerer');
  }

  return (
    <div> 
             <Container minH = {'95vh'} maxW="container.lg" paddingY={'8'}>
             <Heading children="All Courses" m={'8'} />

                     <Input
                        value = {keyword}
                        onChange={e => setKeyword(e.target.value)}
                        placeholder="Search a course..."
                        type={'text'}
                        focusBorderColor="yellow.500" />

                    <HStack
                        overflowX={'auto'}
                        paddingY="8"
                        css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        }}
                    >
                        {categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW = {'60'}>
                            <Text children={item} />
                        </Button>
                        ))}
                    </HStack>

                    <Stack
                    direction={['column', 'row']}
                    flexWrap="wrap"
                    justifyContent={['flex-start', 'space-evenly']}
                    alignItems={['center', 'flex-start']}>

                        <Course 
                        title = {"ttttttt"}
                        views = {"VVVVVV"}
                        imageSrc  = {"IIi"}
                        id = {"SSSSS"}
                        addToPlaylistHandler = {addToPlaylistHandler}
                        creator = {"CCCC"}
                        description = {"DDDDD"}
                        lectureCount = {"LLLL"}
                        loading ={"....."}
                        />        

                 </Stack>

             </Container>
    </div>
  )
}

export default Courses