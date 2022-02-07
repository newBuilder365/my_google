/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react'
import { AiOutlinePlus } from "react-icons/ai";

const AddModal = ({ setMyGooGleCollections }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [src, setSrc] = useState("")

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  function onOk() {
    let myGooGleCollections = window.localStorage.myGooGleCollections
    myGooGleCollections = (myGooGleCollections && JSON.parse(myGooGleCollections)) || []
    myGooGleCollections.push({
      name,
      url,
      src,
      id: `${name}_${myGooGleCollections.length + 1}`
    })
    setMyGooGleCollections(myGooGleCollections)
    window.localStorage.myGooGleCollections = JSON.stringify(myGooGleCollections)
    onClose()
  }

  return (
    <>
      <div onClick={onOpen}>
        <Avatar size='xl' name='' src='' icon={<AiOutlinePlus />} />{' '}
        <Text mt={5}>添加快捷方式</Text>
      </div>
      <Modal
        isCentered={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷方式</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名称</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>网址</FormLabel>
              <Input value={url} onChange={(e) => setUrl(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>图片地址</FormLabel>
              <Input value={src} onChange={(e) => setSrc(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              取消
            </Button>
            <Button onClick={onOk}>完成</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddModal
