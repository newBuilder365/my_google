import { Grid, GridItem, Text, Avatar, Box } from '@chakra-ui/react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AddModal from './addModal';

const Collection = () => {

  const [myGooGleCollections, setMyGooGleCollections] = useState([])
  useEffect(() => {
    if (typeof window !== "undefined") {
      let data = window?.localStorage?.myGooGleCollections || '[]'
      setMyGooGleCollections(JSON.parse(data))
    }
  }, [])

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {
        myGooGleCollections.map(v => {
          return (
            <GridItem w='100%' key={v.id} cursor={'pointer'}>
              <Box textAlign='center' onClick={()=>{
                if (typeof window !== "undefined") {
                  window.open(v.url)
                }
              }}>
                  <Avatar size='xl' src={v.src} />{' '}
                  <Text mt={5}>{v.name}</Text>
              </Box>
            </GridItem>
          )
        })
      }
      <GridItem w='100%' cursor={'pointer'}>
        <Box textAlign='center'>
          <AddModal setMyGooGleCollections={setMyGooGleCollections} />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Collection
