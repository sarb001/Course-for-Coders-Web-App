import React , { useState } from 'react'

import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';

import introVideo from '../../../src/Assests/Videos/intro.mp4';

const Coursepage = () => {

    const [lectureNumber,setLectureNumber] = useState(0);

    const lectures = [
        {
             _id:  'id-1',
             title: "tititiit111",
             description : 'DEDEDEDE',
             video : {
                url:'URLURLURLURL'
             },
        },
        {
             _id:  'id-2',
             title: "tititiit222",
             description : 'DEDEDEDE',
             video : {
                url:'URLURLURLURL'
             },
        },
        {
             _id:  'id-3',
             title: "tititiit333",
             description : 'DEDEDEDE',
             video : {
                url:'URLURLURLURL'
             },
        },
    ]


  return (
    <div> 
        
        <Grid minH = {'90vh'} templateColumns={['1fr', '3fr 1fr']}>
       {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width = {'100%'}
              controls
              controlsList = "nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src = {introVideo}
            >
            </video>

            <Heading
              m="5"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick = {() => setLectureNumber(index)}
                key = {element._id}
                style = {{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}>
                <Text noOfLines = {1}>  #{index + 1} {element.title} </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading children = "No Lectures" />
      )}
    </Grid>

    </div>
  )
}

export default Coursepage