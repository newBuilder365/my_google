import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Image, Input, InputGroup, InputRightElement, Flex, Center } from '@chakra-ui/react'
import { BiMicrophone } from "react-icons/bi";
import Collection from '../components/collection'

export default function Home() {
  return (
    <Flex justifyContent='center'>
      <Box w='50%' p={4} mt={20}>
        <Center mb={10}>
          <Image htmlWidth={272} htmlHeight={92} src='google.png' alt='google' />
        </Center>
        <InputGroup mb={10}>
          <Input
            placeholder='在谷歌上搜索，或者输入一个网址'
            style={{ borderRadius: 30 }}
          />
          <InputRightElement>
            <BiMicrophone />
          </InputRightElement>
        </InputGroup>
        <Collection />
      </Box>
    </Flex>
  )
}
